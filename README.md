<p align="center">
  <img src="assets/logo.svg" width="80" alt="AI Lab Logo"/>
</p>

<h1 align="center">AI Lab</h1>

<p align="center"><strong>Your next builds won't need babysitting.</strong></p>

<p align="center">
The open-source software factory for your home server.<br/>
Paste a GitHub URL — AI clones, builds, tests, and summarizes — you just watch.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/build-passing-34d399?style=flat-square" alt="CI"/>
  <img src="https://img.shields.io/badge/license-MIT-6c8cff?style=flat-square" alt="License"/>
  <img src="https://img.shields.io/badge/node-v18+-f0f2f8?style=flat-square&logo=node.js" alt="Node"/>
  <img src="https://img.shields.io/badge/docker-sandboxed-60a5fa?style=flat-square&logo=docker" alt="Docker"/>
  <img src="https://img.shields.io/badge/lang-EN%20%7C%20TH-fbbf24?style=flat-square" alt="Languages"/>
</p>

<p align="center">
  <a href="#-quick-start">Quick Start</a> ·
  <a href="#-features">Features</a> ·
  <a href="#-architecture">Architecture</a> ·
  <a href="#-api-reference">API</a> ·
  <a href="#-deployment">Deployment</a> ·
  <a href="#-documentation">Docs</a>
</p>

<p align="center">
  <strong>English</strong> | <a href="README-th.md">ภาษาไทย</a>
</p>

---

## What is AI Lab?

AI Lab turns your home server into a **software factory**. Give it a GitHub repository URL — it clones the repo into a Docker sandbox, detects the language and framework, installs dependencies, runs tests, and generates an AI-powered summary. The entire pipeline runs automatically on your **OpenClaw** server.

No more SSH-ing in. No more manual builds. Your dashboard shows real-time progress, test results, and AI analysis — works with **Python, Node.js, Rust, Go**, and more.

<p align="center">
  <img src="assets/screenshot-dashboard.png" width="100%" alt="AI Lab Dashboard" style="border-radius: 12px; border: 1px solid #2a2f42;"/>
</p>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **One-Click Build** | Paste a GitHub URL, click Build — everything else is automated |
| **Auto Language Detection** | Supports Python, Node.js, Rust, Go, Ruby, Java, and more |
| **Docker Sandboxed** | Every build runs in an isolated Docker container |
| **Real-time Progress** | WebSocket-powered live updates with progress bar |
| **AI Test Summaries** | LLM-generated analysis of build results and test output |
| **Bilingual UI** | Full English & Thai interface with one-click switching |
| **Build History** | Searchable history with status filters (Passed, Failed, Warning, Timeout) |
| **REST API** | Full API for programmatic access and CI/CD integration |
| **Build Detail Modal** | 7-step pipeline view, syntax-highlighted logs, AI summary |
| **Server Connection** | Auto-reconnecting WebSocket with health monitoring |
| **Toast Notifications** | Real-time feedback for all actions |
| **Responsive Design** | Desktop, tablet, and mobile layouts |

---

## 🖼️ Screenshots

### Dashboard — Home
Quick-access icon menu, build form, stats overview, and recent builds.

<p align="center">
  <img src="assets/screenshot-home.png" width="100%" alt="Dashboard Home" style="border-radius: 12px;"/>
</p>

### Build History
Filter and search all past builds by status and repository name.

<p align="center">
  <img src="assets/screenshot-history.png" width="100%" alt="Build History" style="border-radius: 12px;"/>
</p>

### Build Detail
Full pipeline steps, AI summary, and syntax-highlighted build log.

<p align="center">
  <img src="assets/screenshot-detail.png" width="100%" alt="Build Detail" style="border-radius: 12px;"/>
</p>

### Server Connection
Real-time connection status, activity log, and endpoint configuration.

<p align="center">
  <img src="assets/screenshot-connection.png" width="100%" alt="Server Connection" style="border-radius: 12px;"/>
</p>

### Documentation (EN / TH)
Built-in bilingual documentation with sidebar navigation.

<p align="center">
  <img src="assets/screenshot-docs.png" width="100%" alt="Documentation" style="border-radius: 12px;"/>
</p>

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────┐
│                Browser (Dashboard)                   │
│                                                      │
│   Home · History · Connection · Settings · Docs      │
│                      │                               │
│              ┌───────┴────────┐                      │
│              │  ConnChannel   │                      │
│              │  REST + WS     │                      │
│              └───────┬────────┘                      │
└──────────────────────┼──────────────────────────────┘
                       │
            ┌──────────┴──────────┐
            │   Node.js Server    │
            │   (server.js)       │
            ├─────────────────────┤
            │  Static Files       │
            │  REST API (/api)    │
            │  WebSocket (/ws)    │
            └──────────┬──────────┘
                       │
            ┌──────────┴──────────┐
            │   Docker Sandbox    │
            │   (Build Runner)    │
            └─────────────────────┘
```

| Component | Technology | Purpose |
|-----------|-----------|---------|
| Dashboard | Vanilla HTML/CSS/JS | User interface — no framework, no bundler |
| Server | Node.js + `ws` | REST API, WebSocket, static file serving |
| Sandbox | Docker | Isolated build environment per repo |
| AI Engine | LLM API | Test analysis, build summaries |
| Design System | CSS Custom Properties | 50+ design tokens, dark theme |
| i18n | `data-i18n` attributes | Bilingual EN/TH with `t()` function |

---

## 🔄 Build Pipeline

Every build goes through a 7-step automated pipeline:

```
① Clone Repo  →  ② Analyze Project  →  ③ Install Deps  →  ④ Build
                                                              ↓
⑦ Package     ←  ⑥ Quality Check    ←  ⑤ Run Tests
```

| Step | What Happens |
|------|-------------|
| **1. Clone Repository** | `git clone` into Docker sandbox |
| **2. Analyze Project** | Detect language, framework, package manager |
| **3. Install Dependencies** | Run `npm install`, `pip install`, `cargo build`, etc. |
| **4. Build Project** | Compile, bundle, or prepare the project |
| **5. Run Tests** | Execute test suite (`pytest`, `jest`, `cargo test`, etc.) |
| **6. Quality Check** | Lint, coverage analysis, security audit |
| **7. Package Results** | Generate build artifacts and AI summary |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** v18+
- **npm** package manager
- **Docker** (for sandboxed builds)

### Installation

```bash
# 1. Clone or copy files
mkdir -p ~/ailab
cd ~/ailab

# 2. Install dependencies
npm init -y
npm install ws

# 3. Start the server
PORT=8081 node server.js
```

Open **http://your-server-ip:8081/** in your browser.

### Deploy to OpenClaw Server

```bash
# From your local machine
scp index.html style.css script.js server.js \
    docs-en.html docs-th.html \
    bear1234@192.168.2.38:~/ailab/

# On the server
cd ~/ailab && npm install ws
PORT=8081 node server.js
```

---

## 📡 API Reference

Base URL: `http://your-server:8081/api`

### Health Check

```
GET /api
```

```json
{
  "status": "ok",
  "server": "AI Lab",
  "version": "1.0",
  "uptime": 3600.5,
  "builds": 12
}
```

### Builds

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/builds` | List all builds (newest first) |
| `GET` | `/api/builds/:id` | Get build by job ID |
| `POST` | `/api/builds` | Submit a new build |
| `POST` | `/api/webhook` | Receive external webhook |

### Submit a Build

```bash
curl -X POST http://192.168.2.38:8081/api/builds \
  -H "Content-Type: application/json" \
  -d '{"repo_url": "https://github.com/user/project"}'
```

### WebSocket Events

Connect to `ws://your-server:8081/ws` for real-time updates.

| Event | Direction | Description |
|-------|-----------|-------------|
| `connected` | Server → Client | Connection established |
| `build:started` | Server → Client | New build submitted |
| `build:progress` | Server → Client | Progress update (0–100%) |
| `build:completed` | Server → Client | Build finished with results |
| `ping` / `pong` | Bidirectional | Heartbeat |
| `webhook` | Server → Client | External webhook forwarded |

---

## 🖥️ Deployment

### Systemd Service (Auto-start on boot)

```ini
# /etc/systemd/system/ailab.service
[Unit]
Description=AI Lab Server
After=network.target

[Service]
Type=simple
User=bear1234
WorkingDirectory=/home/bear1234/ailab
ExecStart=/usr/bin/node server.js
Environment=PORT=8081
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable ailab
sudo systemctl start ailab
```

### Nginx Reverse Proxy (Optional)

```nginx
server {
    listen 80;
    server_name ailab.local;

    location / {
        proxy_pass http://127.0.0.1:8081;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }
}
```

---

## 📖 Documentation

Built-in bilingual documentation accessible from the dashboard:

| Language | URL |
|----------|-----|
| English | [/docs-en.html](docs-en.html) |
| ภาษาไทย | [/docs-th.html](docs-th.html) |

Covers: Overview, Architecture, Dashboard UI, Build Pipeline, API Reference, Connection Setup, Deployment, Settings, and i18n.

---

## 📁 Project Structure

```
ailab/
├── index.html        # Dashboard UI (single-page app)
├── style.css         # Design system (50+ CSS tokens)
├── script.js         # App logic, i18n, ConnChannel, BuildDetail
├── server.js         # Node.js server (REST + WebSocket)
├── docs-en.html      # English documentation
├── docs-th.html      # Thai documentation
├── assets/           # Screenshots and logo
└── README.md         # This file
```

---

## ⚙️ Configuration

Settings are stored in the browser's `localStorage`:

| Setting | Default | Description |
|---------|---------|-------------|
| Timeout | 300s | Max build duration |
| Memory | 512MB | Docker container memory limit |
| CPU | 1.0 | Docker container CPU shares |
| LLM Provider | OpenAI | AI summary engine |
| API Key | — | LLM API key |
| Telegram Token | — | Notification bot token |
| Telegram Chat ID | — | Notification target |
| Language | EN | Dashboard language (EN/TH) |

---

## 🌐 Supported Languages

AI Lab auto-detects and builds projects in:

| Language | Package Manager | Test Framework |
|----------|----------------|---------------|
| Python | pip / pipenv | pytest |
| Node.js | npm / yarn | jest / mocha |
| Rust | cargo | cargo test |
| Go | go mod | go test |
| Ruby | bundler | rspec |
| Java | maven / gradle | JUnit |

---

## 🤝 Integration with OpenClaw

AI Lab integrates with the [OpenClaw Dashboard](http://192.168.2.38:8080/) as a tool card in the **N8N Tools & Services** section.

```
OpenClaw Dashboard (:8080)
├── Monitor: CPU, RAM, SSD, Temperature
├── Tools
│   ├── n8n Workflows
│   ├── Leafbox
│   ├── Dynamic Pricing
│   ├── Product Data
│   ├── Prompt Translator
│   └── 🧪 AI Lab ← opens :8081
└── System: SSH, Logs
```

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

<p align="center">
  Built with ❤️ for <strong>OpenClaw Server</strong><br/>
  <sub>Hat Yai, Thailand</sub>
</p>
