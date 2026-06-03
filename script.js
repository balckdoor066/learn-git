// AI Lab Dashboard v2.0 — Bilingual (EN/TH)

// ============================================
// INTERNATIONALIZATION
// ============================================
const i18n = {
    en: {
        "nav.home": "Home",
        "nav.history": "History",
        "nav.settings": "Settings",
        "home.title": "Dashboard",
        "home.newBuild": "New Build",
        "home.newBuildDesc": "Paste a GitHub repository URL to start a sandboxed build",
        "home.urlPlaceholder": "https://github.com/user/project",
        "home.buildBtn": "Build",
        "home.activeBuilds": "Active Builds",
        "home.noActive": "No active builds",
        "home.recentBuilds": "Recent Builds",
        "stats.total": "Total Builds",
        "stats.passed": "Passed",
        "stats.failed": "Failed",
        "stats.rate": "Success Rate",
        "history.title": "Build History",
        "history.search": "Search by repo name...",
        "history.all": "All Status",
        "history.passed": "Passed",
        "history.warning": "Warning",
        "history.failed": "Failed",
        "history.timeout": "Timeout",
        "settings.title": "Settings",
        "settings.buildDefaults": "Build Defaults",
        "settings.timeout": "Timeout (seconds)",
        "settings.memory": "Memory Limit",
        "settings.cpu": "CPU Limit",
        "settings.aiConfig": "AI Configuration",
        "settings.llmProvider": "LLM Provider",
        "settings.apiKey": "API Key",
        "settings.notifications": "Notifications",
        "settings.telegramToken": "Telegram Bot Token",
        "settings.telegramChat": "Telegram Chat ID",
        "settings.save": "Save Settings",
        "settings.saved": "Saved!",
        "build.building": "Building...",
        "build.tests": "tests",
        "build.noMatch": "No builds match your filters",
        "toast.buildStarted": "Build started",
        "toast.buildPassed": "Build passed — all tests OK",
        "toast.settingsSaved": "Settings saved successfully",
        "nav.connection": "Connection",
        "connection.title": "Server Connection",
        "connection.serverName": "OpenClaw Server",
        "connection.connected": "Connected",
        "connection.disconnected": "Disconnected",
        "connection.connecting": "Connecting...",
        "connection.endpoint": "Server Endpoint",
        "connection.endpointDesc": "Connect to your OpenClaw Lab server",
        "connection.host": "Host URL",
        "connection.apiPath": "API Path",
        "connection.wsPath": "WebSocket Path",
        "connection.token": "Auth Token",
        "connection.save": "Save & Connect",
        "connection.test": "Test Connection",
        "connection.status": "Connection Status",
        "connection.state": "State",
        "connection.latency": "Latency",
        "connection.protocol": "Protocol",
        "connection.lastPing": "Last Ping",
        "connection.activity": "Activity Log",
        "connection.noActivity": "No activity yet",
        "connection.channels": "Available Channels",
        "connection.idle": "Idle",
        "connection.active": "Active",
        "connection.error": "Error",
        "connection.testOk": "Connection successful",
        "connection.testFail": "Connection failed",
        "connection.saved": "Connection saved",
        "connection.wsOpen": "WebSocket connected",
        "connection.wsClosed": "WebSocket disconnected",
        "connection.pingOk": "Server responded",
        "connection.pingFail": "Server unreachable",
        "detail.status": "Status",
        "detail.language": "Language",
        "detail.duration": "Duration",
        "detail.tests": "Tests",
        "detail.aiSummary": "AI Summary",
        "detail.steps": "Build Steps",
        "detail.buildLog": "Build Log",
        "detail.step.clone": "Clone Repository",
        "detail.step.analyze": "Analyze Project",
        "detail.step.deps": "Install Dependencies",
        "detail.step.build": "Build Project",
        "detail.step.test": "Run Tests",
        "detail.step.qc": "Quality Gate",
        "detail.step.package": "Package Output",
        "time.justNow": "just now",
        "time.mAgo": "m ago",
        "time.hAgo": "h ago",
        "time.dAgo": "d ago",
        "menu.newBuild": "New Build",
        "menu.deploy": "Deploy",
        "menu.terminal": "Terminal",
        "menu.docs": "Docs",
        "menu.server": "Server",
        "menu.ai": "AI Lab"
    },
    th: {
        "nav.home": "หน้าหลัก",
        "nav.history": "ประวัติ",
        "nav.settings": "ตั้งค่า",
        "home.title": "แดชบอร์ด",
        "home.newBuild": "บิลด์ใหม่",
        "home.newBuildDesc": "วาง URL ของ GitHub repository เพื่อเริ่มบิลด์ในแซนด์บ็อกซ์",
        "home.urlPlaceholder": "https://github.com/user/project",
        "home.buildBtn": "บิลด์",
        "home.activeBuilds": "กำลังบิลด์",
        "home.noActive": "ไม่มีงานบิลด์ที่กำลังทำงาน",
        "home.recentBuilds": "บิลด์ล่าสุด",
        "stats.total": "บิลด์ทั้งหมด",
        "stats.passed": "ผ่าน",
        "stats.failed": "ล้มเหลว",
        "stats.rate": "อัตราสำเร็จ",
        "history.title": "ประวัติการบิลด์",
        "history.search": "ค้นหาชื่อ repo...",
        "history.all": "สถานะทั้งหมด",
        "history.passed": "ผ่าน",
        "history.warning": "คำเตือน",
        "history.failed": "ล้มเหลว",
        "history.timeout": "หมดเวลา",
        "settings.title": "ตั้งค่า",
        "settings.buildDefaults": "ค่าเริ่มต้นการบิลด์",
        "settings.timeout": "หมดเวลา (วินาที)",
        "settings.memory": "จำกัดหน่วยความจำ",
        "settings.cpu": "จำกัด CPU",
        "settings.aiConfig": "ตั้งค่า AI",
        "settings.llmProvider": "ผู้ให้บริการ LLM",
        "settings.apiKey": "คีย์ API",
        "settings.notifications": "การแจ้งเตือน",
        "settings.telegramToken": "โทเค็น Telegram Bot",
        "settings.telegramChat": "Chat ID ของ Telegram",
        "settings.save": "บันทึกการตั้งค่า",
        "settings.saved": "บันทึกแล้ว!",
        "build.building": "กำลังบิลด์...",
        "build.tests": "เทสต์",
        "build.noMatch": "ไม่พบบิลด์ที่ตรงกับตัวกรอง",
        "toast.buildStarted": "เริ่มบิลด์แล้ว",
        "toast.buildPassed": "บิลด์สำเร็จ — เทสต์ผ่านทั้งหมด",
        "toast.settingsSaved": "บันทึกการตั้งค่าเรียบร้อย",
        "nav.connection": "เชื่อมต่อ",
        "connection.title": "เชื่อมต่อเซิร์ฟเวอร์",
        "connection.serverName": "เซิร์ฟเวอร์ OpenClaw",
        "connection.connected": "เชื่อมต่อแล้ว",
        "connection.disconnected": "ไม่ได้เชื่อมต่อ",
        "connection.connecting": "กำลังเชื่อมต่อ...",
        "connection.endpoint": "ปลายทางเซิร์ฟเวอร์",
        "connection.endpointDesc": "เชื่อมต่อกับเซิร์ฟเวอร์ OpenClaw Lab ของคุณ",
        "connection.host": "URL โฮสต์",
        "connection.apiPath": "เส้นทาง API",
        "connection.wsPath": "เส้นทาง WebSocket",
        "connection.token": "โทเค็นยืนยันตัวตน",
        "connection.save": "บันทึกและเชื่อมต่อ",
        "connection.test": "ทดสอบการเชื่อมต่อ",
        "connection.status": "สถานะการเชื่อมต่อ",
        "connection.state": "สถานะ",
        "connection.latency": "เวลาตอบสนอง",
        "connection.protocol": "โปรโตคอล",
        "connection.lastPing": "ปิงล่าสุด",
        "connection.activity": "บันทึกกิจกรรม",
        "connection.noActivity": "ยังไม่มีกิจกรรม",
        "connection.channels": "ช่องทางที่ใช้ได้",
        "connection.idle": "ว่าง",
        "connection.active": "ใช้งาน",
        "connection.error": "ผิดพลาด",
        "connection.testOk": "เชื่อมต่อสำเร็จ",
        "connection.testFail": "เชื่อมต่อล้มเหลว",
        "connection.saved": "บันทึกการเชื่อมต่อแล้ว",
        "connection.wsOpen": "WebSocket เชื่อมต่อแล้ว",
        "connection.wsClosed": "WebSocket ตัดการเชื่อมต่อ",
        "connection.pingOk": "เซิร์ฟเวอร์ตอบสนอง",
        "connection.pingFail": "ไม่สามารถเข้าถึงเซิร์ฟเวอร์",
        "detail.status": "สถานะ",
        "detail.language": "ภาษา",
        "detail.duration": "ระยะเวลา",
        "detail.tests": "เทสต์",
        "detail.aiSummary": "สรุปจาก AI",
        "detail.steps": "ขั้นตอนการบิลด์",
        "detail.buildLog": "บันทึกการบิลด์",
        "detail.step.clone": "โคลน Repository",
        "detail.step.analyze": "วิเคราะห์โปรเจกต์",
        "detail.step.deps": "ติดตั้ง Dependencies",
        "detail.step.build": "บิลด์โปรเจกต์",
        "detail.step.test": "รันเทสต์",
        "detail.step.qc": "ตรวจสอบคุณภาพ",
        "detail.step.package": "แพ็กเกจผลลัพธ์",
        "time.justNow": "เมื่อกี้",
        "time.mAgo": " นาทีที่แล้ว",
        "time.hAgo": " ชม.ที่แล้ว",
        "time.dAgo": " วันที่แล้ว",
        "menu.newBuild": "บิลด์ใหม่",
        "menu.deploy": "ดีพลอย",
        "menu.terminal": "เทอร์มินัล",
        "menu.docs": "เอกสาร",
        "menu.server": "เซิร์ฟเวอร์",
        "menu.ai": "AI แล็บ"
    }
};

// ✅ CENTRALIZED APP STATE
const AppState = {
    currentLang: localStorage.getItem("ailab-lang") || "en",
    activeBuild: null,
    builds: [...demoBuildHistory],
    listeners: [],

    subscribe(callback) {
        if (typeof callback === 'function') {
            this.listeners.push(callback);
        }
    },

    setState(updates) {
        const hasChanges = Object.keys(updates).some(key => this[key] !== updates[key]);
        if (!hasChanges) return; // No changes, skip notification

        Object.assign(this, updates);
        // Notify all listeners
        this.listeners.forEach(cb => {
            try {
                cb(this);
            } catch (e) {
                console.error("Error in state listener:", e);
            }
        });
    },

    getState() {
        return {
            currentLang: this.currentLang,
            activeBuild: this.activeBuild,
            builds: this.builds
        };
    }
};

let currentLang = AppState.currentLang; // Keep for backward compat
let activeBuild = AppState.activeBuild;
let demoBuildHistory = AppState.builds;

function t(key) {
    return (i18n[AppState.currentLang] && i18n[AppState.currentLang][key]) || i18n.en[key] || key;
}

function applyLanguage() {
    document.documentElement.lang = AppState.currentLang;

    // ✅ Cache DOM queries
    const i18nElements = document.querySelectorAll("[data-i18n]");
    const i18nPlaceholders = document.querySelectorAll("[data-i18n-placeholder]");
    const langBtns = document.querySelectorAll(".lang-btn");

    i18nElements.forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });
    i18nPlaceholders.forEach(el => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    langBtns.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === AppState.currentLang);
    });

    // Re-render dynamic content
    renderHome();
    if (document.getElementById("page-history")?.classList.contains("active")) {
        renderHistory();
    }
}

// ============================================
// SVG ICONS
// ============================================
const ICONS = {
    check: '<svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>',
    x: '<svg viewBox="0 0 24 24"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>',
    alertTriangle: '<svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    loader: '<svg viewBox="0 0 24 24"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>',
    inbox: '<svg viewBox="0 0 24 24"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/></svg>',
    checkCircle: '<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    xCircle: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    alertCircle: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
};

const STATUS_CONFIG = {
    PASSED:  { icon: ICONS.check, cls: "passed" },
    FAILED:  { icon: ICONS.x, cls: "failed" },
    WARNING: { icon: ICONS.alertTriangle, cls: "warning" },
    TIMEOUT: { icon: ICONS.clock, cls: "timeout" },
    RUNNING: { icon: ICONS.loader, cls: "running" }
};

// ============================================
// TOAST SYSTEM
// ============================================
function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    const iconMap = { success: ICONS.checkCircle, error: ICONS.xCircle, warning: ICONS.alertCircle };
    toast.innerHTML = `${iconMap[type] || iconMap.success}<span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add("toast-exit");
        setTimeout(() => toast.remove(), 200);
    }, 3000);
}

// ============================================
// DEMO DATA
// ============================================
const demoBuildHistory = [
    {
        job_id: "20260411-143022-a1b2c3",
        repo_url: "https://github.com/pallets/flask",
        status: "PASSED",
        language: "python",
        started_at: "2026-04-11T14:30:22Z",
        duration_seconds: 325,
        tests: { total: 312, passed: 312, failed: 0 },
        ai_summary: "Built Flask web framework. All 312 tests passed."
    },
    {
        job_id: "20260411-121500-d4e5f6",
        repo_url: "https://github.com/expressjs/express",
        status: "PASSED",
        language: "node",
        started_at: "2026-04-11T12:15:00Z",
        duration_seconds: 187,
        tests: { total: 1456, passed: 1456, failed: 0 },
        ai_summary: "Built Express.js. All 1456 tests passed."
    },
    {
        job_id: "20260411-100300-g7h8i9",
        repo_url: "https://github.com/gin-gonic/gin",
        status: "WARNING",
        language: "go",
        started_at: "2026-04-11T10:03:00Z",
        duration_seconds: 94,
        tests: { total: 248, passed: 248, failed: 0 },
        ai_summary: "Built Gin HTTP framework. Tests passed but image is large."
    },
    {
        job_id: "20260410-183200-j1k2l3",
        repo_url: "https://github.com/someuser/broken-app",
        status: "FAILED",
        language: "python",
        started_at: "2026-04-10T18:32:00Z",
        duration_seconds: 42,
        tests: { total: 8, passed: 5, failed: 3 },
        ai_summary: "Build failed: 3 tests failed in auth module."
    },
    {
        job_id: "20260410-160000-m4n5o6",
        repo_url: "https://github.com/tokio-rs/axum",
        status: "TIMEOUT",
        language: "rust",
        started_at: "2026-04-10T16:00:00Z",
        duration_seconds: 1800,
        tests: { total: 0, passed: 0, failed: 0 },
        ai_summary: "Build timed out after 30 minutes during cargo build."
    },
    {
        job_id: "20260410-140000-p7q8r9",
        repo_url: "https://github.com/fastapi/fastapi",
        status: "PASSED",
        language: "python",
        started_at: "2026-04-10T14:00:00Z",
        duration_seconds: 210,
        tests: { total: 894, passed: 894, failed: 0 },
        ai_summary: "Built FastAPI framework. All 894 tests passed."
    }
];

let activeBuild = null;

// ============================================
// HELPERS
// ============================================
function repoName(url) {
    return url.replace("https://github.com/", "");
}

function formatDuration(sec) {
    if (sec >= 3600) return Math.floor(sec / 3600) + "h " + Math.floor((sec % 3600) / 60) + "m";
    if (sec >= 60) return Math.floor(sec / 60) + "m " + (sec % 60) + "s";
    return sec + "s";
}

function timeAgo(dateStr) {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return t("time.justNow");
    if (mins < 60) return mins + t("time.mAgo");
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return hrs + t("time.hAgo");
    return Math.floor(hrs / 24) + t("time.dAgo");
}

function langLabel(lang) {
    const map = { python: "Python", node: "Node.js", go: "Go", rust: "Rust", general: "General" };
    return map[lang] || lang;
}

// ============================================
// RENDERING
// ============================================
function renderBuildCard(build, isActive) {
    const cfg = STATUS_CONFIG[isActive ? "RUNNING" : build.status];
    const card = document.createElement("div");
    card.className = "build-card" + (isActive ? " active-build" : "");

    const testStr = build.tests
        ? `${build.tests.passed}/${build.tests.total} ${t("build.tests")}`
        : "";

    card.innerHTML = `
        <div class="build-status ${cfg.cls}">${cfg.icon}</div>
        <div class="build-info">
            <div class="build-repo">${repoName(build.repo_url)}</div>
            <div class="build-meta">
                <span>${isActive ? t("build.building") : timeAgo(build.started_at)}</span>
                ${testStr ? `<span class="dot"></span><span>${testStr}</span>` : ""}
            </div>
        </div>
        <span class="build-lang">${langLabel(build.language)}</span>
        <span class="build-duration">${isActive ? "--:--" : formatDuration(build.duration_seconds)}</span>
        ${isActive ? `<div class="progress-bar"><div class="progress-fill" style="width: ${build.progress || 0}%"></div></div>` : ""}
    `;
    return card;
}

function renderHome() {
    try {
        const total = AppState.builds.length + (AppState.activeBuild ? 1 : 0);
        const passed = AppState.builds.filter(b => b.status === "PASSED").length;
        const failed = AppState.builds.filter(b => b.status === "FAILED").length;
        const rate = total > 0 ? Math.round((passed / total) * 100) : 0;

        document.getElementById("stat-total").textContent = total;
        document.getElementById("stat-passed").textContent = passed;
        document.getElementById("stat-failed").textContent = failed;
        document.getElementById("stat-rate").textContent = rate + "%";

        // Active builds
        const activeContainer = document.getElementById("active-builds");
        activeContainer.innerHTML = "";
        if (AppState.activeBuild) {
            activeContainer.appendChild(renderBuildCard(AppState.activeBuild, true));
        } else {
            activeContainer.innerHTML = `
                <div class="empty-state">
                    ${ICONS.inbox}
                    <div>${t("home.noActive")}</div>
                </div>`;
        }

        // Recent builds
        const recentContainer = document.getElementById("recent-builds");
        recentContainer.innerHTML = "";
        AppState.builds.slice(0, 5).forEach(build => {
            recentContainer.appendChild(renderBuildCard(build, false));
        });

        attachBuildCardListeners();
    } catch (e) {
        console.error("Error rendering home:", e);
    }
}

function renderHistory(filter, search) {
    try {
        const container = document.getElementById("history-list");
        container.innerHTML = "";
        let builds = [...AppState.builds];

        if (filter && filter !== "all") {
            builds = builds.filter(b => b.status === filter);
        }
        if (search) {
            const q = search.toLowerCase();
            builds = builds.filter(b => repoName(b.repo_url).toLowerCase().includes(q));
        }

        if (builds.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    ${ICONS.inbox}
                    <div>${t("build.noMatch")}</div>
                </div>`;
            return;
        }
        builds.forEach(build => {
            container.appendChild(renderBuildCard(build, false));
        });

        attachBuildCardListeners();
    } catch (e) {
        console.error("Error rendering history:", e);
    }
}

// ============================================
// NAVIGATION
// ============================================
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
        document.getElementById("page-" + page).classList.add("active");
        if (page === "history") renderHistory();
    });
});

// ============================================
// ACTION BAR BUTTONS
// ============================================
document.getElementById("action-new-build")?.addEventListener("click", () => {
    // Navigate to Home page and focus the repo URL input
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    document.querySelector('[data-page="home"]').classList.add("active");
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById("page-home").classList.add("active");
    document.getElementById("repo-url").focus();
});

document.getElementById("action-deploy")?.addEventListener("click", () => {
    // Navigate to Connection page
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    document.querySelector('[data-page="connection"]').classList.add("active");
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById("page-connection").classList.add("active");
});

document.getElementById("action-terminal")?.addEventListener("click", () => {
    showToast("Terminal — coming soon", "warning");
});

document.getElementById("action-docs")?.addEventListener("click", () => {
    const lang = currentLang === "th" ? "docs-th.html" : "docs-en.html";
    window.open(lang, "_blank");
});

// ============================================
// MENU ICON CARDS
// ============================================
function navigateTo(page) {
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    const navLink = document.querySelector(`[data-page="${page}"]`);
    if (navLink) navLink.classList.add("active");
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    const pageEl = document.getElementById("page-" + page);
    if (pageEl) pageEl.classList.add("active");
    if (page === "history") renderHistory();
}

document.getElementById("menu-new-build")?.addEventListener("click", () => {
    navigateTo("home");
    document.getElementById("repo-url").focus();
});
document.getElementById("menu-history")?.addEventListener("click", () => {
    navigateTo("history");
});
document.getElementById("menu-deploy")?.addEventListener("click", () => {
    navigateTo("connection");
});
document.getElementById("menu-terminal")?.addEventListener("click", () => {
    showToast("Terminal — coming soon", "warning");
});
document.getElementById("menu-connection")?.addEventListener("click", () => {
    navigateTo("connection");
});
document.getElementById("menu-docs")?.addEventListener("click", () => {
    const lang = currentLang === "th" ? "docs-th.html" : "docs-en.html";
    window.open(lang, "_blank");
});
document.getElementById("menu-settings")?.addEventListener("click", () => {
    navigateTo("settings");
});
document.getElementById("menu-ai")?.addEventListener("click", () => {
    showToast("AI Lab — coming soon", "warning");
});

// ============================================
// LANGUAGE SWITCHER
// ============================================
document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const newLang = btn.dataset.lang;
        AppState.setState({
            currentLang: newLang
        });
        currentLang = newLang; // Update for backward compat
        localStorage.setItem("ailab-lang", newLang);
        applyLanguage();
    });
});

// ============================================
// BUILD FORM
// ============================================
document.getElementById("build-form").addEventListener("submit", (e) => {
    e.preventDefault();

    try {
        const url = document.getElementById("repo-url").value.trim();
        if (!url) return;

        const newActiveBuild = {
            job_id: "live-" + Date.now(),
            repo_url: url,
            status: "RUNNING",
            language: "python",
            started_at: new Date().toISOString(),
            duration_seconds: 0,
            tests: null,
            progress: 0
        };

        // ✅ Update state atomically
        AppState.setState({
            activeBuild: newActiveBuild
        });
        activeBuild = newActiveBuild; // backward compat

        document.getElementById("repo-url").value = "";
        renderHome();
        showToast(t("toast.buildStarted"), "success");

        // Send to server if connected
        if (ConnChannel.state === "connected") {
            ConnChannel.sendBuild(url).catch(err => {
                console.error("Failed to send build to server:", err);
                showToast("Failed to submit to server", "error");
            });
        }

        const steps = [
            { p: 15 }, { p: 30 }, { p: 50 },
            { p: 70 }, { p: 85 }, { p: 95 }, { p: 100 }
        ];

        let step = 0;
        const interval = setInterval(() => {
            try {
                if (step >= steps.length) {
                    clearInterval(interval);
                    const finishedBuild = {
                        ...AppState.activeBuild,
                        status: "PASSED",
                        duration_seconds: Math.floor((Date.now() - new Date(AppState.activeBuild.started_at).getTime()) / 1000),
                        tests: { total: 24, passed: 24, failed: 0 },
                        ai_summary: "Build completed successfully."
                    };

                    // Keep builds in sync
                    AppState.setState({
                        builds: [finishedBuild, ...AppState.builds],
                        activeBuild: null
                    });
                    demoBuildHistory = AppState.builds;
                    activeBuild = null;

                    renderHome();
                    showToast(t("toast.buildPassed"), "success");
                    return;
                }

                if (AppState.activeBuild) {
                    AppState.activeBuild.progress = steps[step].p;
                }
                step++;
                renderHome();
            } catch (e) {
                console.error("Error in build progress:", e);
                clearInterval(interval);
            }
        }, 2000);
    } catch (e) {
        console.error("Error in build form submission:", e);
        showToast("Error submitting build", "error");
    }
});

// ============================================
// HISTORY FILTERS
// ============================================
document.getElementById("filter-status").addEventListener("change", () => {
    renderHistory(
        document.getElementById("filter-status").value,
        document.getElementById("search-builds").value
    );
});

document.getElementById("search-builds").addEventListener("input", () => {
    renderHistory(
        document.getElementById("filter-status").value,
        document.getElementById("search-builds").value
    );
});

// ============================================
// CLOCK
// ============================================
function updateClock() {
    const el = document.getElementById("current-time");
    if (!el) return;
    const now = new Date();
    const locale = currentLang === "th" ? "th-TH" : "en-US";
    el.textContent =
        now.toLocaleDateString(locale, { weekday: "short", month: "short", day: "numeric" }) +
        "  " +
        now.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" });
}
setInterval(updateClock, 1000);

// ============================================
// SETTINGS
// ============================================
document.getElementById("save-settings").addEventListener("click", () => {
    const settings = {
        timeout: document.getElementById("setting-timeout").value,
        memory: document.getElementById("setting-memory").value,
        cpus: document.getElementById("setting-cpus").value,
        llm: document.getElementById("setting-llm").value
    };
    localStorage.setItem("ailab-settings", JSON.stringify(settings));
    showToast(t("toast.settingsSaved"), "success");
});

const saved = localStorage.getItem("ailab-settings");
if (saved) {
    const s = JSON.parse(saved);
    if (s.timeout) document.getElementById("setting-timeout").value = s.timeout;
    if (s.memory) document.getElementById("setting-memory").value = s.memory;
    if (s.cpus) document.getElementById("setting-cpus").value = s.cpus;
    if (s.llm) document.getElementById("setting-llm").value = s.llm;
}

// ============================================
// CONNECTION CHANNEL
// ============================================
const ConnChannel = {
    config: {
        host: window.location.origin !== "null" ? window.location.origin : "http://192.168.2.38:8080",
        apiPath: "/api",
        wsPath: "/ws",
        token: ""
    },
    state: "disconnected", // disconnected | connecting | connected | error
    ws: null,
    pingInterval: null,
    latency: null,
    logEntries: [],

    init() {
        const saved = localStorage.getItem("ailab-conn");
        if (saved) {
            Object.assign(this.config, JSON.parse(saved));
        }
        // Populate form fields — show current origin as hint
        document.getElementById("conn-host").value = this.config.host;
        document.getElementById("conn-host").placeholder = window.location.origin || "http://192.168.2.38:8080";
        document.getElementById("conn-api-path").value = this.config.apiPath;
        document.getElementById("conn-ws-path").value = this.config.wsPath;
        document.getElementById("conn-token").value = this.config.token;

        // Update channel URLs display
        this.updateChannelUrls();

        // Bind buttons
        document.getElementById("conn-save").addEventListener("click", () => this.saveAndConnect());
        document.getElementById("conn-test").addEventListener("click", () => this.testConnection());

        // Update sidebar dot
        this.updateUI();

        // Auto-connect if previously saved
        if (saved) {
            this.connect();
        }
    },

    readForm() {
        this.config.host = document.getElementById("conn-host").value.replace(/\/+$/, "");
        this.config.apiPath = document.getElementById("conn-api-path").value;
        this.config.wsPath = document.getElementById("conn-ws-path").value;
        this.config.token = document.getElementById("conn-token").value;
    },

    saveAndConnect() {
        this.readForm();
        localStorage.setItem("ailab-conn", JSON.stringify(this.config));
        this.updateChannelUrls();
        showToast(t("connection.saved"), "success");
        this.addLog(t("connection.saved"), "info");
        this.connect();
    },

    updateChannelUrls() {
        const host = this.config.host;
        const wsHost = host.replace(/^http/, "ws");
        document.getElementById("ch-rest-url").textContent = host + this.config.apiPath;
        document.getElementById("ch-ws-url").textContent = wsHost + this.config.wsPath;
        document.getElementById("ch-wh-url").textContent = host + this.config.apiPath + "/webhook";
    },

    setState(state) {
        this.state = state;
        this.updateUI();
    },

    updateUI() {
        // Sidebar dot
        const dot = document.getElementById("server-dot");
        dot.className = "status-dot";
        if (this.state === "connected") dot.classList.add("online");

        // Badge
        const badge = document.getElementById("conn-badge");
        const badgeDot = document.getElementById("conn-badge-dot");
        const badgeText = document.getElementById("conn-badge-text");

        badge.className = "conn-status-badge";
        badgeDot.className = "status-dot";

        if (this.state === "connected") {
            badge.classList.add("connected");
            badgeDot.classList.add("online");
            badgeText.textContent = t("connection.connected");
        } else if (this.state === "error") {
            badge.classList.add("error");
            badgeText.textContent = t("connection.error");
        } else if (this.state === "connecting") {
            badgeText.textContent = t("connection.connecting");
        } else {
            badgeText.textContent = t("connection.disconnected");
        }

        // Status details
        const stateEl = document.getElementById("conn-state");
        if (stateEl) {
            stateEl.textContent = this.state.charAt(0).toUpperCase() + this.state.slice(1);
            stateEl.className = "conn-val " + this.state;
            if (this.state === "connected") stateEl.classList.add("online");
            if (this.state === "error") stateEl.classList.add("offline");
            if (this.state === "connecting") stateEl.classList.add("connecting");
        }

        const latEl = document.getElementById("conn-latency");
        if (latEl) latEl.textContent = this.latency !== null ? this.latency + " ms" : "-- ms";

        const protoEl = document.getElementById("conn-protocol");
        if (protoEl) protoEl.textContent = this.ws ? "WebSocket" : this.state === "connected" ? "REST" : "--";

        // Action bar dot
        const abDot = document.getElementById("action-bar-dot");
        if (abDot) {
            abDot.className = "status-dot";
            if (this.state === "connected") abDot.classList.add("online");
        }

        // Channel statuses
        const restStatus = document.getElementById("ch-rest-status");
        const wsStatus = document.getElementById("ch-ws-status");
        if (restStatus) {
            restStatus.textContent = this.state === "connected" ? t("connection.active") : t("connection.idle");
            restStatus.className = "conn-channel-status" + (this.state === "connected" ? " active" : "");
        }
        if (wsStatus) {
            const wsActive = this.ws && this.ws.readyState === WebSocket.OPEN;
            wsStatus.textContent = wsActive ? t("connection.active") : t("connection.idle");
            wsStatus.className = "conn-channel-status" + (wsActive ? " active" : "");
        }
    },

    async connect() {
        this.setState("connecting");
        this.addLog(t("connection.connecting"), "info");

        // Try REST ping first
        const restOk = await this.pingREST();
        if (restOk) {
            this.setState("connected");
            this.addLog(t("connection.pingOk") + ` (${this.latency}ms)`, "ok");
            // Try WebSocket
            this.connectWS();
            // Start periodic ping
            this.startPingLoop();
        } else {
            this.setState("error");
            this.addLog(t("connection.pingFail"), "err");
        }
    },

    disconnect() {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
        if (this.pingInterval) {
            clearInterval(this.pingInterval);
            this.pingInterval = null;
        }
        this.setState("disconnected");
    },

    async pingREST() {
        const url = this.config.host + this.config.apiPath;
        const headers = {};
        if (this.config.token) headers["Authorization"] = "Bearer " + this.config.token;

        try {
            const start = performance.now();
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 5000);

            const res = await fetch(url, {
                method: "GET",
                headers,
                signal: controller.signal,
                mode: "cors"
            });
            clearTimeout(timeout);

            this.latency = Math.round(performance.now() - start);
            document.getElementById("conn-last-ping").textContent =
                new Date().toLocaleTimeString(currentLang === "th" ? "th-TH" : "en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
            return res.ok || res.status === 401 || res.status === 404;
        } catch (e) {
            this.latency = null;
            return false;
        }
    },

    connectWS() {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }

        const wsUrl = this.config.host.replace(/^http/, "ws") + this.config.wsPath;
        try {
            const protocols = this.config.token ? [this.config.token] : undefined;
            this.ws = new WebSocket(wsUrl, protocols);

            this.ws.onopen = () => {
                this.addLog(t("connection.wsOpen"), "ws");
                this.updateUI();
            };

            this.ws.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    this.handleServerMessage(data);
                } catch (e) {
                    let msg = event.data;
                    if (msg.length > 80) msg = msg.substring(0, 80) + "...";
                    this.addLog("WS: " + msg, "ws");
                }
            };

            this.ws.onerror = () => {
                this.addLog("WebSocket error", "err");
                this.updateUI();
            };

            this.ws.onclose = () => {
                this.addLog(t("connection.wsClosed"), "ws");
                this.ws = null;
                this.updateUI();
            };
        } catch (e) {
            this.addLog("WebSocket: " + e.message, "err");
        }
    },

    startPingLoop() {
        if (this.pingInterval) clearInterval(this.pingInterval);
        this.pingInterval = setInterval(async () => {
            const ok = await this.pingREST();
            if (ok) {
                if (this.state !== "connected") {
                    this.setState("connected");
                    this.addLog(t("connection.pingOk"), "ok");
                }
            } else {
                this.setState("error");
                this.addLog(t("connection.pingFail"), "err");
            }
            this.updateUI();
        }, 15000);
    },

    async testConnection() {
        const btn = document.getElementById("conn-test");
        const origText = btn.textContent;
        btn.innerHTML = '<span class="conn-spinner"></span>';
        btn.disabled = true;

        this.readForm();
        this.updateChannelUrls();
        const ok = await this.pingREST();

        if (ok) {
            this.setState("connected");
            showToast(t("connection.testOk") + ` (${this.latency}ms)`, "success");
            this.addLog(t("connection.testOk") + ` (${this.latency}ms)`, "ok");
        } else {
            this.setState("error");
            showToast(t("connection.testFail"), "error");
            this.addLog(t("connection.testFail"), "err");
        }

        btn.textContent = origText;
        btn.disabled = false;
    },

    handleServerMessage(data) {
        try {
            switch (data.type) {
                case "connected":
                    this.addLog("Server: " + data.server + " (" + data.builds + " builds)", "ws");
                    break;
                case "pong":
                    // latency from WS ping
                    break;
                case "build:started":
                    this.addLog("Build started: " + data.build.repo_url.split("/").slice(-1)[0], "info");
                    showToast(t("toast.buildStarted"), "success");
                    break;
                case "build:progress":
                    // Update active build progress if it matches
                    if (AppState.activeBuild && AppState.activeBuild.job_id === data.job_id) {
                        AppState.activeBuild.progress = data.progress;
                        renderHome();
                    }
                    break;
                case "build:completed":
                    this.addLog("Build done: " + data.build.status, data.build.status === "PASSED" ? "ok" : "err");
                    if (data.build.status === "PASSED") {
                        showToast(t("toast.buildPassed"), "success");
                    }
                    // Add to builds list
                    AppState.setState({
                        builds: [data.build, ...AppState.builds],
                        activeBuild: null
                    });
                    renderHome();
                    break;
                case "webhook":
                    this.addLog("Webhook received", "info");
                    break;
                default:
                    this.addLog("WS: " + data.type, "ws");
            }
        } catch (e) {
            console.error("Error handling server message:", e);
            this.addLog("Error: " + e.message, "err");
        }
    },

    addLog(message, tag = "info") {
        const now = new Date();
        const time = now.toLocaleTimeString(currentLang === "th" ? "th-TH" : "en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
        this.logEntries.unshift({ time, message, tag });
        if (this.logEntries.length > 50) this.logEntries.pop();

        const container = document.getElementById("conn-log");
        if (!container) return;

        container.innerHTML = this.logEntries.map(entry => `
            <div class="conn-log-entry">
                <span class="conn-log-time">${entry.time}</span>
                <span class="conn-log-msg">${entry.message}</span>
                <span class="conn-log-tag ${entry.tag}">${entry.tag.toUpperCase()}</span>
            </div>
        `).join("");
    },

    // Public API methods for builds
    async sendBuild(repoUrl) {
        const url = this.config.host + this.config.apiPath + "/builds";
        const headers = { "Content-Type": "application/json" };
        if (this.config.token) headers["Authorization"] = "Bearer " + this.config.token;

        try {
            const res = await fetch(url, {
                method: "POST",
                headers,
                body: JSON.stringify({ repo_url: repoUrl })
            });
            const data = await res.json();
            this.addLog("Build submitted: " + repoUrl.split("/").slice(-1)[0], "ok");
            return data;
        } catch (e) {
            this.addLog("Build submit failed: " + e.message, "err");
            return null;
        }
    },

    async fetchBuilds() {
        const url = this.config.host + this.config.apiPath + "/builds";
        const headers = {};
        if (this.config.token) headers["Authorization"] = "Bearer " + this.config.token;

        try {
            const res = await fetch(url, { headers });
            return await res.json();
        } catch (e) {
            return null;
        }
    }
};

// ============================================
// BUILD DETAIL MODAL
// ============================================
const BuildDetail = {
    overlay: document.getElementById("modal-overlay"),

    open(build) {
        const cfg = STATUS_CONFIG[build.status] || STATUS_CONFIG.PASSED;

        // Header
        document.getElementById("modal-status-icon").className = "build-status " + cfg.cls;
        document.getElementById("modal-status-icon").innerHTML = cfg.icon;
        document.getElementById("modal-repo").textContent = repoName(build.repo_url);
        document.getElementById("modal-job-id").textContent = build.job_id;

        // Stats
        const statusText = document.getElementById("modal-status-text");
        statusText.textContent = build.status;
        statusText.className = "modal-stat-value " + cfg.cls;

        document.getElementById("modal-language").textContent = langLabel(build.language);
        document.getElementById("modal-duration").textContent = formatDuration(build.duration_seconds);

        const testsEl = document.getElementById("modal-tests");
        if (build.tests && build.tests.total > 0) {
            testsEl.textContent = build.tests.passed + " / " + build.tests.total;
            testsEl.className = "modal-stat-value mono" + (build.tests.failed > 0 ? " failed" : " passed");
        } else {
            testsEl.textContent = "--";
            testsEl.className = "modal-stat-value mono";
        }

        // AI Summary
        document.getElementById("modal-summary").textContent = build.ai_summary || "No summary available.";

        // Build Steps
        this.renderSteps(build);

        // Build Log
        this.renderLog(build);

        // Show
        this.overlay.classList.add("open");
        document.body.style.overflow = "hidden";
    },

    close() {
        this.overlay.classList.remove("open");
        document.body.style.overflow = "";
    },

    renderSteps(build) {
        const container = document.getElementById("modal-steps");
        const stepDefs = [
            { key: "clone", dur: "2s" },
            { key: "analyze", dur: "1s" },
            { key: "deps", dur: null },
            { key: "build", dur: null },
            { key: "test", dur: null },
            { key: "qc", dur: "1s" },
            { key: "package", dur: "3s" }
        ];

        // Determine how many steps completed based on status
        let completedSteps = 7;
        let failedAt = -1;
        if (build.status === "FAILED") {
            failedAt = 4; // fail at test
            completedSteps = 4;
        } else if (build.status === "TIMEOUT") {
            failedAt = 3; // timeout at build
            completedSteps = 3;
        }

        // Distribute duration across steps
        const totalDur = build.duration_seconds;
        const weights = [0.05, 0.03, 0.25, 0.35, 0.2, 0.02, 0.1];

        container.innerHTML = stepDefs.map((step, i) => {
            let iconCls, iconSvg;
            if (i < completedSteps) {
                iconCls = "done";
                iconSvg = ICONS.check;
            } else if (i === failedAt) {
                iconCls = "fail";
                iconSvg = ICONS.x;
            } else {
                iconCls = "skip";
                iconSvg = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/></svg>';
            }

            const stepDur = i <= completedSteps ? Math.round(totalDur * weights[i]) + "s" : "--";

            return `
                <div class="modal-step">
                    <div class="step-icon ${iconCls}">${iconSvg}</div>
                    <div class="step-info">
                        <div class="step-name">${t("detail.step." + step.key)}</div>
                        ${i === failedAt ? '<div class="step-detail" style="color:var(--danger)">Failed</div>' : ""}
                    </div>
                    <span class="step-time">${stepDur}</span>
                </div>
            `;
        }).join("");
    },

    renderLog(build) {
        const container = document.getElementById("modal-log");
        const repo = repoName(build.repo_url);

        // Generate realistic-looking log lines
        const logLines = [
            { type: "cmd", text: `$ git clone https://github.com/${repo}.git` },
            { type: "", text: `Cloning into '${repo.split("/")[1]}'...` },
            { type: "ok", text: "Clone complete. 847 files." },
            { type: "cmd", text: "$ cat README.md | head -1" },
            { type: "", text: `# ${repo.split("/")[1]}` },
            { type: "cmd", text: `$ detect-language .` },
            { type: "ok", text: `Detected: ${langLabel(build.language)}` },
        ];

        if (build.language === "python") {
            logLines.push(
                { type: "cmd", text: "$ pip install -r requirements.txt" },
                { type: "", text: "Collecting dependencies..." },
                { type: "ok", text: "Successfully installed 47 packages" },
                { type: "cmd", text: "$ python -m pytest --tb=short" }
            );
        } else if (build.language === "node") {
            logLines.push(
                { type: "cmd", text: "$ npm install" },
                { type: "", text: "added 312 packages in 24s" },
                { type: "cmd", text: "$ npm test" }
            );
        } else if (build.language === "go") {
            logLines.push(
                { type: "cmd", text: "$ go mod download" },
                { type: "ok", text: "go: downloaded 28 modules" },
                { type: "cmd", text: "$ go test ./..." }
            );
        } else if (build.language === "rust") {
            logLines.push(
                { type: "cmd", text: "$ cargo build --release" },
                { type: "", text: "Compiling 156 crates..." },
                { type: "", text: "Compiling axum v0.7.4..." }
            );
        }

        if (build.status === "PASSED" || build.status === "WARNING") {
            if (build.tests) {
                logLines.push({ type: "ok", text: `${build.tests.passed} passed, ${build.tests.failed} failed` });
            }
            logLines.push(
                { type: "cmd", text: "$ docker build -t lab-output ." },
                { type: "ok", text: "Successfully built image" },
                { type: "ok", text: "=== BUILD PASSED ===" }
            );
        } else if (build.status === "FAILED") {
            logLines.push(
                { type: "err", text: "FAILED: 3 tests failed" },
                { type: "err", text: "  test_auth_login - AssertionError" },
                { type: "err", text: "  test_auth_register - KeyError: 'DATABASE_URL'" },
                { type: "err", text: "  test_auth_token - ConnectionRefused" },
                { type: "err", text: "=== BUILD FAILED ===" }
            );
        } else if (build.status === "TIMEOUT") {
            logLines.push(
                { type: "", text: "Still compiling..." },
                { type: "", text: "[1800s elapsed]" },
                { type: "err", text: "=== TIMEOUT: Build killed after 30 minutes ===" }
            );
        }

        container.innerHTML = logLines.map((line, i) =>
            `<div class="log-line"><span class="log-num">${i + 1}</span><span class="log-text ${line.type}">${line.text}</span></div>`
        ).join("");
    }
};

// Close modal
document.getElementById("modal-close").addEventListener("click", () => BuildDetail.close());
document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) BuildDetail.close();
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") BuildDetail.close();
});

// ============================================
// WIRE BUILD CARDS TO DETAIL MODAL
// ============================================
function attachBuildCardListeners() {
    try {
        document.querySelectorAll(".build-card:not(.active-build)").forEach(card => {
            const repo = card.querySelector(".build-repo")?.textContent;
            if (!repo) return;

            // Remove old listeners by cloning
            const newCard = card.cloneNode(true);
            card.parentNode.replaceChild(newCard, card);

            newCard.addEventListener("click", () => {
                try {
                    const build = AppState.builds.find(b => repoName(b.repo_url) === repo);
                    if (build) BuildDetail.open(build);
                } catch (e) {
                    console.error("Error opening build detail:", e);
                }
            });
        });
    } catch (e) {
        console.error("Error attaching build card listeners:", e);
    }
}

// ============================================
// INIT
// ============================================
applyLanguage();
updateClock();
ConnChannel.init();
