# 💳 SmartPay: Voice-Activated Safe Mode (VASM)

> A next-gen, voice-secured digital wallet built to protect users in high-risk scenarios — with real-time AI voice recognition and a duress-safe mode.

---

## 📌 Project Overview

SmartPay is a full-featured **digital wallet** application designed for both convenience and safety. It introduces a game-changing innovation: **Voice-Activated Safe Mode (VASM)** — which protects users under threat by instantly hiding sensitive financial data, locking transactions, and optionally sending silent alerts.

This project demonstrates a deep understanding of secure financial systems, modern front-end architecture, and AI-powered user safety.

---

## 🚨 Problem It Solves

In high-crime environments, users may be forced to open their mobile wallets under threat. If a criminal sees the real balance or is able to initiate transfers, the user’s safety is at risk.

> Most digital wallets don't offer any safety fallback under coercion — **SmartPay does.**

---

## ✅ Key Features

- 🎙️ **Voice-activated panic mode** with offline voice recognition
- 🔒 **Fake balance mode** triggered under duress
- 🛑 **Transaction lock** during panic mode
- 📩 **Silent emergency alerts** to trusted contacts
- 🔐 **Dual PIN system** (primary for login, secondary for exiting safe mode)
- 💰 **Secure wallet management** (add, send, receive funds)
- 📄 **Transaction history** with filters and sorting
- 👥 **User profile and KYC integration**
- 🔐 **PIN and biometric authentication**
- 🧾 **Bill payments** (e.g., airtime, utilities)
- 🌐 **Multi-currency support**
- 📲 **Responsive UI** for mobile and desktop use

---

## 📱 UI Flow (Angular Frontend)

### 🔐 Normal Login
1. User logs in via PIN or biometric
2. Dashboard loads:
   - Real wallet balance
   - Quick actions: Send, Receive, Pay Bills
   - Recent transaction list
   - Settings and profile access

### ⚠️ Panic Mode Trigger
1. User says a predefined panic phrase (e.g., “Please don’t hurt me”)
2. Voice recognition module detects the phrase
3. App enters **Safe Mode**:
   - Fake balance is displayed (e.g., R0.00)
   - All transfers and payments are disabled
   - UI mimics normal functionality (decoy mode)
   - Optional silent alert is sent to a predefined contact or admin
4. To exit Safe Mode:
   - Logout required
   - Re-login with **secondary secure PIN**

---

## 🧠 Tech Stack

| Layer         | Technology Stack |
|---------------|------------------|
| Frontend      | Angular 19, TypeScript, CSS, Bootstrap 5 |
| Voice Capture | Web Audio API, Microphone Access |
| Voice AI      | Vosk (Offline), TensorFlow.js |
| Backend       | ASP.NET Core Web API (C#) |
| Authentication|  PIN + JWT |
| Database      | SQL Server  |

---

## 🧠 AI Integration

- Offline voice recognition using **Vosk**
- Fast local processing for panic phrase detection
- Designed to work even in **low-network or offline** conditions
- Future scope: vocal emotion detection for smarter triggers

---

## 🎯 Why This Project Stands Out

- **Real-world problem solving**: Addresses safety in financial technology
- **End-to-end thinking**: Full-stack design with security, UX, and AI
- **Scalable architecture**: Modular Angular components, secure .NET API
- **User-first design**: Focus on usability, accessibility, and privacy

---

## 📸 Screenshots & Demos *(Coming Soon)*

> 🎥 Demo walkthrough and screenshots of the wallet UI and Safe Mode in action.

---


## 🚀 Project Status

- ✅ Backend APIs completed and secured (ASP.NET Core)
- ✅ Angular 19 UI development underway (modular, responsive components)
- 🔄 Voice recognition model integration in progress (using Vosk / TensorFlow.js)
- 🔜 Mobile responsiveness testing and optimization (Bootstrap 5)
- 🔜 Demo video recording and live deployment planned

---

## 🤝 Want to Connect or Collaborate?

I'm open to:
- Collaborations with other developers


Feel free to fork the repo, open an issue, or send a message.

---

