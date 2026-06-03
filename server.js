// AI Lab Dashboard Server
// Serves the dashboard UI + REST API + WebSocket on port 8080
// Deploy to OpenClaw server: node server.js

const http = require("http");
const fs = require("fs");
const path = require("path");
const { WebSocketServer } = require("ws");
const crypto = require("crypto");

const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

// ✅ Security Configuration
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',')
    : ['http://localhost', 'http://localhost:8080', 'http://192.168.2.38:8080'];

const MAX_BUILDS = 1000;
const MAX_BODY_SIZE = 1024 * 50; // 50 KB

// --- Validation Functions ---
function isValidGitHubUrl(url) {
    if (!url || typeof url !== 'string') return false;
    if (url.length > 500) return false;
    // ✅ Validate GitHub URL format
    const pattern = /^https:\/\/github\.com\/[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\/[a-zA-Z0-9._-]+$/;
    return pattern.test(url);
}

// ✅ Enhanced Job ID with crypto randomness
function generateJobId() {
    const ts = Date.now().toString(36);
    const rand = crypto.randomBytes(8).toString('hex').slice(0, 12);
    return `${ts}-${rand}`;
}

// --- Static file serving ---
const MIME = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon"
};

function serveStatic(req, res) {
    let filePath = req.url === "/" ? "/index.html" : req.url;
    filePath = path.join(__dirname, filePath.split("?")[0]);

    const ext = path.extname(filePath);
    const mime = MIME[ext] || "application/octet-stream";

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Not found" }));
            return;
        }
        res.writeHead(200, { "Content-Type": mime });
        res.end(data);
    });
}

// --- In-memory build store (with cleanup) ---
const builds = [];

// ✅ Cleanup old builds periodically
setInterval(() => {
    if (builds.length > MAX_BUILDS) {
        const removed = builds.splice(MAX_BUILDS);
        console.log(`[Cleanup] Removed ${removed.length} old builds (kept ${builds.length})`);
    }
}, 60000); // Every 60 seconds

// --- API routes ---
function handleAPI(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const apiPath = url.pathname;

    // ✅ Secure CORS (only allowed origins)
    const origin = req.headers.origin || '';
    const isAllowed = ALLOWED_ORIGINS.some(o => origin.includes(o)) || !origin;

    if (isAllowed) {
        res.setHeader("Access-Control-Allow-Origin", origin || ALLOWED_ORIGINS[0]);
    }
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }

    // ✅ Reject if not allowed origin
    if (!isAllowed) {
        res.writeHead(403, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "CORS: Origin not allowed" }));
        return;
    }

    // GET /api — health check
    if (apiPath === "/api" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            status: "ok",
            server: "AI Lab",
            version: "1.0",
            uptime: process.uptime(),
            builds: builds.length
        }));
        return;
    }

    // GET /api/builds — list builds
    if (apiPath === "/api/builds" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(builds));
        return;
    }

    // POST /api/builds — submit a build
    if (apiPath === "/api/builds" && req.method === "POST") {
        let body = "";

        // ✅ Handle request body with size limit
        req.on("data", chunk => {
            body += chunk.toString();
            // ✅ Prevent memory bomb attacks
            if (body.length > MAX_BODY_SIZE) {
                res.writeHead(413, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Payload too large (max 50KB)" }));
                req.connection.destroy(); // Force close
                return;
            }
        });

        req.on("error", (err) => {
            console.error("[API Error] Request stream error:", err.message);
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Bad request" }));
        });

        req.on("end", () => {
            try {
                // ✅ Better error handling for JSON parsing
                let data;
                try {
                    data = JSON.parse(body);
                } catch (e) {
                    res.writeHead(400, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ error: "Invalid JSON" }));
                    return;
                }

                const { repo_url } = data;

                // ✅ Validate repo_url exists and has correct format
                if (!repo_url) {
                    res.writeHead(400, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ error: "repo_url is required" }));
                    return;
                }

                if (!isValidGitHubUrl(repo_url)) {
                    res.writeHead(400, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ error: "repo_url must be a valid GitHub repository URL" }));
                    return;
                }

                const build = {
                    job_id: generateJobId(),
                    repo_url,
                    status: "RUNNING",
                    language: "auto",
                    started_at: new Date().toISOString(),
                    duration_seconds: 0,
                    tests: null,
                    ai_summary: null,
                    progress: 0
                };

                builds.unshift(build);

                // Broadcast to WebSocket clients
                try {
                    broadcast({ type: "build:started", build });
                } catch (e) {
                    console.error("[Broadcast Error]", e.message);
                }

                // Simulate build progress
                simulateBuild(build);

                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(JSON.stringify(build));
            } catch (e) {
                console.error("[API Error] Unexpected error in POST /builds:", e.message);
                res.writeHead(500, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Internal server error" }));
            }
        });
        return;
    }

    // GET /api/builds/:id
    if (apiPath.startsWith("/api/builds/") && req.method === "GET") {
        const id = apiPath.split("/").pop();
        const build = builds.find(b => b.job_id === id);
        if (build) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(build));
        } else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Build not found" }));
        }
        return;
    }

    // POST /api/webhook — incoming webhook
    if (apiPath === "/api/webhook" && req.method === "POST") {
        let body = "";
        req.on("data", chunk => { body += chunk; });
        req.on("end", () => {
            console.log("[Webhook]", body);
            broadcast({ type: "webhook", payload: body });
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ received: true }));
        });
        return;
    }

    // 404
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
}

// --- Build simulation ---
function simulateBuild(build) {
    const steps = [10, 25, 45, 65, 80, 92, 100];
    let step = 0;

    const interval = setInterval(() => {
        if (step >= steps.length) {
            clearInterval(interval);
            build.status = "PASSED";
            build.duration_seconds = Math.round((Date.now() - new Date(build.started_at).getTime()) / 1000);
            build.tests = { total: 24, passed: 24, failed: 0 };
            build.ai_summary = "Build completed successfully. All tests passed.";
            build.progress = 100;
            broadcast({ type: "build:completed", build });
            return;
        }
        build.progress = steps[step];
        step++;
        broadcast({ type: "build:progress", job_id: build.job_id, progress: build.progress });
    }, 2000);
}

// --- HTTP Server ---
const server = http.createServer((req, res) => {
    try {
        if (req.url.startsWith("/api")) {
            handleAPI(req, res);
        } else {
            serveStatic(req, res);
        }
    } catch (e) {
        console.error("[Server Error]", e);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal server error" }));
    }
});

// ✅ Error handling for HTTP server
server.on("error", (err) => {
    console.error("[Server Error]", err);
    process.exit(1);
});

server.on("clientError", (err, socket) => {
    console.error("[Client Error]", err.message);
    if (socket.writable) {
        socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
    }
});

// --- WebSocket Server ---
const wss = new WebSocketServer({ server, path: "/ws" });
const wsClients = new Set();

wss.on("connection", (ws) => {
    wsClients.add(ws);
    console.log(`[WS] Client connected (${wsClients.size} total)`);

    try {
        ws.send(JSON.stringify({
            type: "connected",
            server: "AI Lab",
            builds: builds.length,
            timestamp: new Date().toISOString()
        }));
    } catch (e) {
        console.error("[WS] Failed to send initial message:", e.message);
    }

    ws.on("message", (msg) => {
        try {
            const data = JSON.parse(msg.toString());
            if (data.type === "ping") {
                ws.send(JSON.stringify({ type: "pong", ts: Date.now() }));
            }
        } catch (e) {
            console.error("[WS] Invalid message received:", e.message);
            // Don't crash, just ignore malformed messages
        }
    });

    ws.on("error", (err) => {
        console.error("[WS] Client error:", err.message);
        wsClients.delete(ws);
    });

    ws.on("close", () => {
        wsClients.delete(ws);
        console.log(`[WS] Client disconnected (${wsClients.size} remaining)`);
    });
});

function broadcast(data) {
    const msg = JSON.stringify(data);
    let failCount = 0;

    for (const ws of wsClients) {
        try {
            if (ws.readyState === 1) { // WebSocket.OPEN
                ws.send(msg);
            }
        } catch (e) {
            console.error("[Broadcast Error] Failed to send to client:", e.message);
            failCount++;
            // Remove dead connections
            wsClients.delete(ws);
        }
    }

    if (failCount > 0) {
        console.log(`[Broadcast] ${failCount} client(s) failed, removed from pool`);
    }
}

// --- Start ---
server.listen(PORT, HOST, () => {
    console.log(`
  ╔══════════════════════════════════════╗
  ║        AI Lab — Server v1.0         ║
  ║                                     ║
  ║  Dashboard: http://${HOST}:${PORT}/       ║
  ║  REST API:  http://${HOST}:${PORT}/api    ║
  ║  WebSocket: ws://${HOST}:${PORT}/ws       ║
  ╚══════════════════════════════════════╝
`);
});
