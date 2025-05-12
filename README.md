# SmartPay: Voice-Activated Safe Mode (VASM)

**Project Module Document**  
**Author:** S’phesihle Ngidi  
**Date:** April 2025  

---

## Overview

The **Voice-Activated Safe Mode (VASM)** is a security-first feature in **SmartPay** — a digital wallet designed to protect users in high-risk scenarios such as armed robberies or coercion. It uses AI-driven voice recognition or a panic phrase to trigger a hidden mode, protecting the user’s real funds and preventing transaction access under duress.

---

## Problem Statement

In high-crime environments, users may be forced to open their mobile wallets under threat. If a criminal sees a large balance or is able to transfer funds, the user’s safety is compromised. There is currently no mainstream digital wallet that allows users to instantly disguise or lock their accounts under pressure.

---

## Proposed Solution

SmartPay introduces a **Voice-Activated Safe Mode**, allowing the user to:

- Speak a predefined panic phrase or use voice tone detection.
- Instantly switch the app interface to show a fake balance (e.g., `R0.00`).
- Disable all fund transfers or withdrawals.
- Optionally send a silent alert to trusted contacts or admin.
- Resume normal access only after secure re-authentication.

---

## Feature Flow

### 🔐 Normal Login Flow:
1. User logs in with regular PIN or biometric.
2. App fetches real wallet data and displays it.

### 🚨 Safe Mode Triggered Flow:
1. User speaks a panic phrase (e.g., “Please don’t hurt me”).
2. App detects the phrase via voice recognition module.
3. App activates **Safe Mode**:
    - Shows dummy balance.
    - Transaction options are hidden or disabled.
    - Triggers optional silent alert.
4. To exit Safe Mode, user must log out and log in again with a **secondary secure PIN**.

---

## Tech Stack Involved

| Layer         | Tech Used                                                                 |
|---------------|---------------------------------------------------------------------------|
| Frontend (UI) | Angular / .NET MAUI                                                       |
| Voice Capture | Microphone Access + Web Audio API / MAUI plugin                           |
| Voice AI      | Vosk (Offline), TensorFlow.js, or ML.NET                                  |
| Backend       | ASP.NET Core Web API (C#)                                                 |
| Database      | SQL Server (User table with `panic_phrase`, `safe_mode` flag)             |





Voice recognition	Yes	Use Vosk, TensorFlow.js, or ML.NET (free, works offline, no big data needed).
Panic phrase detection	Yes	Store a custom panic phrase in the DB and match the user’s voice input against it.
Fake UI in Safe Mode	Yes	Show a fake wallet balance and hide transfer buttons when isSafeMode == true.
Trigger Safe Mode on voice	Yes	Capture voice → detect trigger → flag account as IsInSafeMode = true.
Send silent alerts	Yes	Use backend C# service to email/SMS trusted contact without visible popup.
Switch back to real mode after re-authentication	Yes	Log out → log in again → verify using PIN or biometric → reset IsInSafeMode = false.
