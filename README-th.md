<p align="center">
  <img src="assets/logo.svg" width="80" alt="AI Lab Logo"/>
</p>

<h1 align="center">AI Lab</h1>

<p align="center"><strong>บิลด์ครั้งต่อไปของคุณไม่ต้องเฝ้าดูแลอีกต่อไป</strong></p>

<p align="center">
โรงงานซอฟต์แวร์โอเพนซอร์สสำหรับเซิร์ฟเวอร์ภายในบ้าน<br/>
วาง URL ของ GitHub — AI จะโคลน บิลด์ ทดสอบ และสรุปให้ — คุณแค่ดู
</p>

<p align="center">
  <img src="https://img.shields.io/badge/build-passing-34d399?style=flat-square" alt="CI"/>
  <img src="https://img.shields.io/badge/license-MIT-6c8cff?style=flat-square" alt="License"/>
  <img src="https://img.shields.io/badge/node-v18+-f0f2f8?style=flat-square&logo=node.js" alt="Node"/>
  <img src="https://img.shields.io/badge/docker-sandboxed-60a5fa?style=flat-square&logo=docker" alt="Docker"/>
  <img src="https://img.shields.io/badge/lang-EN%20%7C%20TH-fbbf24?style=flat-square" alt="Languages"/>
</p>

<p align="center">
  <a href="#-เริ่มต้นอย่างรวดเร็ว">เริ่มต้น</a> ·
  <a href="#-ฟีเจอร์">ฟีเจอร์</a> ·
  <a href="#️-สถาปัตยกรรม">สถาปัตยกรรม</a> ·
  <a href="#-api-อ้างอิง">API</a> ·
  <a href="#️-การดีพลอย">ดีพลอย</a> ·
  <a href="#-เอกสาร">เอกสาร</a>
</p>

<p align="center">
  <a href="README.md">English</a> | <strong>ภาษาไทย</strong>
</p>

---

## AI Lab คืออะไร?

AI Lab เปลี่ยนเซิร์ฟเวอร์ภายในบ้านของคุณให้เป็น **โรงงานซอฟต์แวร์** ให้ URL ของ GitHub repository — ระบบจะโคลน repo เข้าไปใน Docker sandbox ตรวจจับภาษาและเฟรมเวิร์ก ติดตั้ง dependencies รันเทสต์ และสร้างสรุปจาก AI ทั้งหมดทำงานอัตโนมัติบนเซิร์ฟเวอร์ **OpenClaw** ของคุณ

ไม่ต้อง SSH เข้าเซิร์ฟเวอร์อีกต่อไป ไม่ต้องบิลด์เอง แดชบอร์ดแสดงความคืบหน้าแบบเรียลไทม์ ผลเทสต์ และการวิเคราะห์จาก AI — รองรับ **Python, Node.js, Rust, Go** และอื่นๆ

<p align="center">
  <img src="assets/screenshot-dashboard.png" width="100%" alt="AI Lab Dashboard" style="border-radius: 12px; border: 1px solid #2a2f42;"/>
</p>

---

## ✨ ฟีเจอร์

| ฟีเจอร์ | รายละเอียด |
|---------|-----------|
| **บิลด์ด้วยคลิกเดียว** | วาง URL ของ GitHub คลิกบิลด์ — ทุกอย่างทำงานอัตโนมัติ |
| **ตรวจจับภาษาอัตโนมัติ** | รองรับ Python, Node.js, Rust, Go, Ruby, Java และอื่นๆ |
| **Docker Sandbox** | ทุกบิลด์รันใน Docker container ที่แยกออกมา |
| **ความคืบหน้าแบบเรียลไทม์** | อัปเดตสดผ่าน WebSocket พร้อมแถบความคืบหน้า |
| **สรุปเทสต์โดย AI** | LLM วิเคราะห์ผลบิลด์และผลลัพธ์เทสต์ |
| **UI สองภาษา** | อินเทอร์เฟซภาษาอังกฤษและไทยครบถ้วน สลับได้ด้วยคลิกเดียว |
| **ประวัติการบิลด์** | ประวัติที่ค้นหาได้พร้อมตัวกรองสถานะ (ผ่าน, ล้มเหลว, คำเตือน, หมดเวลา) |
| **REST API** | API ครบถ้วนสำหรับการเข้าถึงแบบโปรแกรมและ CI/CD |
| **Modal รายละเอียดบิลด์** | มุมมองไปป์ไลน์ 7 ขั้นตอน, ล็อกพร้อมไฮไลท์, สรุป AI |
| **การเชื่อมต่อเซิร์ฟเวอร์** | WebSocket เชื่อมต่อใหม่อัตโนมัติพร้อมตรวจสอบสุขภาพ |
| **การแจ้งเตือน Toast** | ตอบรับแบบเรียลไทม์สำหรับทุกการทำงาน |
| **Responsive Design** | รองรับเดสก์ท็อป แท็บเล็ต และมือถือ |

---

## 🖼️ ภาพหน้าจอ

### แดชบอร์ด — หน้าหลัก
เมนูไอคอนลัด ฟอร์มบิลด์ สถิติภาพรวม และบิลด์ล่าสุด

<p align="center">
  <img src="assets/screenshot-home.png" width="100%" alt="Dashboard Home" style="border-radius: 12px;"/>
</p>

### ประวัติการบิลด์
กรองและค้นหาบิลด์ทั้งหมดตามสถานะและชื่อ repository

<p align="center">
  <img src="assets/screenshot-history.png" width="100%" alt="Build History" style="border-radius: 12px;"/>
</p>

### รายละเอียดการบิลด์
ขั้นตอนไปป์ไลน์ครบถ้วน สรุป AI และล็อกบิลด์พร้อมไฮไลท์

<p align="center">
  <img src="assets/screenshot-detail.png" width="100%" alt="Build Detail" style="border-radius: 12px;"/>
</p>

### การเชื่อมต่อเซิร์ฟเวอร์
สถานะการเชื่อมต่อแบบเรียลไทม์ บันทึกกิจกรรม และการตั้งค่าปลายทาง

<p align="center">
  <img src="assets/screenshot-connection.png" width="100%" alt="Server Connection" style="border-radius: 12px;"/>
</p>

### เอกสาร (EN / TH)
เอกสารสองภาษาในตัวพร้อมเมนูนำทางด้านข้าง

<p align="center">
  <img src="assets/screenshot-docs.png" width="100%" alt="Documentation" style="border-radius: 12px;"/>
</p>

---

## 🏗️ สถาปัตยกรรม

```
┌─────────────────────────────────────────────────────┐
│                เบราว์เซอร์ (แดชบอร์ด)                  │
│                                                      │
│   หน้าหลัก · ประวัติ · เชื่อมต่อ · ตั้งค่า · เอกสาร      │
│                      │                               │
│              ┌───────┴────────┐                      │
│              │  ConnChannel   │                      │
│              │  REST + WS     │                      │
│              └───────┬────────┘                      │
└──────────────────────┼──────────────────────────────┘
                       │
            ┌──────────┴──────────┐
            │  เซิร์ฟเวอร์ Node.js  │
            │   (server.js)       │
            ├─────────────────────┤
            │  ไฟล์สแตติก          │
            │  REST API (/api)    │
            │  WebSocket (/ws)    │
            └──────────┬──────────┘
                       │
            ┌──────────┴──────────┐
            │   Docker Sandbox    │
            │   (ตัวรันบิลด์)       │
            └─────────────────────┘
```

| ส่วนประกอบ | เทคโนโลยี | หน้าที่ |
|-----------|----------|--------|
| แดชบอร์ด | Vanilla HTML/CSS/JS | หน้าจอผู้ใช้ — ไม่มี framework ไม่มี bundler |
| เซิร์ฟเวอร์ | Node.js + `ws` | REST API, WebSocket, ให้บริการไฟล์สแตติก |
| แซนด์บ็อกซ์ | Docker | สภาพแวดล้อมบิลด์แบบแยกต่อ repo |
| เอนจิน AI | LLM API | วิเคราะห์เทสต์ สรุปบิลด์ |
| Design System | CSS Custom Properties | โทเค็นการออกแบบ 50+ ตัว ธีมมืด |
| i18n | แอตทริบิวต์ `data-i18n` | สองภาษา EN/TH ด้วยฟังก์ชัน `t()` |

---

## 🔄 ไปป์ไลน์การบิลด์

ทุกบิลด์ผ่านไปป์ไลน์อัตโนมัติ 7 ขั้นตอน:

```
① โคลน Repo  →  ② วิเคราะห์โปรเจกต์  →  ③ ติดตั้ง Deps  →  ④ บิลด์
                                                                ↓
⑦ แพ็กเกจ     ←  ⑥ ตรวจสอบคุณภาพ      ←  ⑤ รันเทสต์
```

| ขั้นตอน | สิ่งที่เกิดขึ้น |
|--------|---------------|
| **1. โคลน Repository** | `git clone` เข้า Docker sandbox |
| **2. วิเคราะห์โปรเจกต์** | ตรวจจับภาษา เฟรมเวิร์ก ตัวจัดการแพ็กเกจ |
| **3. ติดตั้ง Dependencies** | รัน `npm install`, `pip install`, `cargo build` ฯลฯ |
| **4. บิลด์โปรเจกต์** | คอมไพล์ บันเดิล หรือเตรียมโปรเจกต์ |
| **5. รันเทสต์** | รันชุดเทสต์ (`pytest`, `jest`, `cargo test` ฯลฯ) |
| **6. ตรวจสอบคุณภาพ** | Lint, coverage, ตรวจสอบความปลอดภัย |
| **7. แพ็กเกจผลลัพธ์** | สร้าง build artifacts และสรุป AI |

---

## 🚀 เริ่มต้นอย่างรวดเร็ว

### สิ่งที่ต้องมี

- **Node.js** v18 ขึ้นไป
- **npm** ตัวจัดการแพ็กเกจ
- **Docker** (สำหรับบิลด์ใน sandbox)

### การติดตั้ง

```bash
# 1. สร้างโฟลเดอร์และคัดลอกไฟล์
mkdir -p ~/ailab
cd ~/ailab

# 2. ติดตั้ง dependencies
npm init -y
npm install ws

# 3. เริ่มเซิร์ฟเวอร์
PORT=8081 node server.js
```

เปิด **http://ip-เซิร์ฟเวอร์:8081/** ในเบราว์เซอร์

### ดีพลอยไปเซิร์ฟเวอร์ OpenClaw

```bash
# จากเครื่องของคุณ
scp index.html style.css script.js server.js \
    docs-en.html docs-th.html \
    bear1234@192.168.2.38:~/ailab/

# บนเซิร์ฟเวอร์
cd ~/ailab && npm install ws
PORT=8081 node server.js
```

---

## 📡 API อ้างอิง

URL หลัก: `http://เซิร์ฟเวอร์:8081/api`

### ตรวจสุขภาพ

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

### บิลด์

| เมธอด | Endpoint | รายละเอียด |
|-------|----------|-----------|
| `GET` | `/api/builds` | แสดงบิลด์ทั้งหมด (ใหม่สุดก่อน) |
| `GET` | `/api/builds/:id` | ดูบิลด์ตาม job ID |
| `POST` | `/api/builds` | ส่งงานบิลด์ใหม่ |
| `POST` | `/api/webhook` | รับ webhook ภายนอก |

### ส่งงานบิลด์

```bash
curl -X POST http://192.168.2.38:8081/api/builds \
  -H "Content-Type: application/json" \
  -d '{"repo_url": "https://github.com/user/project"}'
```

### เหตุการณ์ WebSocket

เชื่อมต่อที่ `ws://เซิร์ฟเวอร์:8081/ws` สำหรับอัปเดตแบบเรียลไทม์

| เหตุการณ์ | ทิศทาง | รายละเอียด |
|----------|-------|-----------|
| `connected` | เซิร์ฟเวอร์ → ไคลเอนต์ | เชื่อมต่อสำเร็จ |
| `build:started` | เซิร์ฟเวอร์ → ไคลเอนต์ | ส่งบิลด์ใหม่ |
| `build:progress` | เซิร์ฟเวอร์ → ไคลเอนต์ | อัปเดตความคืบหน้า (0–100%) |
| `build:completed` | เซิร์ฟเวอร์ → ไคลเอนต์ | บิลด์เสร็จพร้อมผลลัพธ์ |
| `ping` / `pong` | สองทิศทาง | ตรวจสอบ heartbeat |
| `webhook` | เซิร์ฟเวอร์ → ไคลเอนต์ | ส่งต่อ webhook ภายนอก |

---

## 🖥️ การดีพลอย

### Systemd Service (เริ่มอัตโนมัติเมื่อบูต)

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

### Nginx Reverse Proxy (ถ้าต้องการ)

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

## 📖 เอกสาร

เอกสารสองภาษาในตัวเข้าถึงได้จากแดชบอร์ด:

| ภาษา | URL |
|------|-----|
| English | [/docs-en.html](docs-en.html) |
| ภาษาไทย | [/docs-th.html](docs-th.html) |

ครอบคลุม: ภาพรวม, สถาปัตยกรรม, หน้าจอแดชบอร์ด, ไปป์ไลน์การบิลด์, API อ้างอิง, การตั้งค่าเชื่อมต่อ, การดีพลอย, การตั้งค่า, และ i18n

---

## 📁 โครงสร้างโปรเจกต์

```
ailab/
├── index.html        # UI แดชบอร์ด (single-page app)
├── style.css         # ระบบการออกแบบ (CSS token 50+ ตัว)
├── script.js         # ลอจิกแอป, i18n, ConnChannel, BuildDetail
├── server.js         # เซิร์ฟเวอร์ Node.js (REST + WebSocket)
├── docs-en.html      # เอกสารภาษาอังกฤษ
├── docs-th.html      # เอกสารภาษาไทย
├── assets/           # ภาพหน้าจอและโลโก้
└── README.md         # ไฟล์นี้
```

---

## ⚙️ การกำหนดค่า

การตั้งค่าจะบันทึกใน `localStorage` ของเบราว์เซอร์:

| การตั้งค่า | ค่าเริ่มต้น | รายละเอียด |
|----------|----------|-----------|
| หมดเวลา | 300 วินาที | ระยะเวลาบิลด์สูงสุด |
| หน่วยความจำ | 512MB | จำกัดหน่วยความจำ Docker container |
| CPU | 1.0 | จำกัด CPU shares ของ Docker container |
| ผู้ให้บริการ LLM | OpenAI | เอนจินสรุป AI |
| คีย์ API | — | คีย์ API ของ LLM |
| โทเค็น Telegram | — | โทเค็น bot สำหรับแจ้งเตือน |
| Chat ID ของ Telegram | — | เป้าหมายการแจ้งเตือน |
| ภาษา | EN | ภาษาแดชบอร์ด (EN/TH) |

---

## 🌐 ภาษาที่รองรับ

AI Lab ตรวจจับและบิลด์โปรเจกต์ในภาษา:

| ภาษา | ตัวจัดการแพ็กเกจ | เฟรมเวิร์กเทสต์ |
|------|----------------|---------------|
| Python | pip / pipenv | pytest |
| Node.js | npm / yarn | jest / mocha |
| Rust | cargo | cargo test |
| Go | go mod | go test |
| Ruby | bundler | rspec |
| Java | maven / gradle | JUnit |

---

## 🤝 การรวมกับ OpenClaw

AI Lab รวมกับ [OpenClaw Dashboard](http://192.168.2.38:8080/) เป็นการ์ดเครื่องมือในส่วน **N8N Tools & Services**

```
OpenClaw Dashboard (:8080)
├── Monitor: CPU, RAM, SSD, อุณหภูมิ
├── Tools
│   ├── n8n Workflows
│   ├── Leafbox
│   ├── Dynamic Pricing
│   ├── Product Data
│   ├── Prompt Translator
│   └── 🧪 AI Lab ← เปิด :8081
└── System: SSH, Logs
```

---

## 📄 สัญญาอนุญาต

MIT License — ใช้ แก้ไข และแจกจ่ายได้อย่างอิสระ

---

<p align="center">
  สร้างด้วย ❤️ สำหรับ <strong>เซิร์ฟเวอร์ OpenClaw</strong><br/>
  <sub>หาดใหญ่ ประเทศไทย</sub>
</p>
