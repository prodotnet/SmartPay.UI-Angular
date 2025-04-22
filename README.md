SmartPay: Voice-Activated Safe Mode (VASM)
Project Module Document
Author: S’phesihle Ngidi
Date: April 2025

Overview
The Voice-Activated Safe Mode (VASM) is a security-first feature in SmartPay — a digital wallet designed to protect users in high-risk scenarios such as armed robberies or coercion. It uses AI-driven voice recognition or a panic phrase to trigger a hidden mode, protecting the user’s real funds and preventing transaction access under duress.

Problem Statement
In high-crime environments, users may be forced to open their mobile wallets under threat. If a criminal sees a large balance or is able to transfer funds, the user’s safety is compromised. There is currently no mainstream digital wallet that allows users to instantly disguise or lock their accounts under pressure.

Proposed Solution
SmartPay introduces a Voice-Activated Safe Mode, allowing the user to:

Speak a predefined panic phrase or use voice tone detection.

Instantly switch the app interface to show a fake balance (e.g., R0.00).

Disable all fund transfers or withdrawals.

Optionally send a silent alert to trusted contacts or admin.

Resume normal access only after secure re-authentication.

Feature Flow
Normal Login Flow:

User logs in with regular PIN or biometric.

App fetches real wallet data and displays it.

Safe Mode Triggered Flow:

User speaks a panic phrase (e.g., “Please don’t hurt me”).

App detects the phrase (voice recognition module).

App activates Safe Mode:

Shows dummy balance.

Transaction options are hidden or disabled.

Triggers optional silent alert.

To exit Safe Mode, user must log out and log in again with a secondary secure PIN.

Tech Stack Involved

Layer	Tech Used
Frontend (UI)	Angular / .NET MAUI
Voice Capture	Microphone Access + Web Audio API / MAUI plugin
Voice AI	Vosk (Offline), TensorFlow.js, or ML.NET
Backend	ASP.NET Core Web API (C#)
Database	SQL Server (User table with panic_phrase, safe_mode flag)
Database Schema Changes
Users Table:

sql
Copy
Edit
ALTER TABLE Users
ADD PanicPhrase NVARCHAR(100),
    SafeModeEnabled BIT DEFAULT 0,
    IsInSafeMode BIT DEFAULT 0;
Safe Mode Log Table:

sql
Copy
Edit
CREATE TABLE SafeModeLogs (
    Id INT PRIMARY KEY IDENTITY,
    UserId INT,
    TriggerTime DATETIME,
    TriggerType NVARCHAR(50), -- 'Voice', 'Panic Phrase'
    Location NVARCHAR(100) NULL,
    AlertSent BIT
);
Security Considerations
Voice data is processed locally to avoid exposing sensitive recordings.

App uses fake UI routing and safe dummy balance in frontend when in Safe Mode.

API endpoints return fake data when IsInSafeMode = 1.

Safe mode cannot be disabled without full re-authentication and device check.

Future Enhancements
Facial expression analysis for fear detection.

Geo-fencing Safe Mode triggers in high-risk zones.

Smart Emergency Alerts with GPS and voice message snippet.

Integration with SAPS/Neighborhood Watch if approved legally.

Status
 Feature Concept Finalized

 Database Model Integrated

 Basic Safe Mode UI Prototype Built

 Voice Detection Setup

 Alert Logic Configured

Impress Recruiters With This
This is a real-world, problem-solving feature that addresses:

Crime in financial services

Voice and AI security innovation

Modern UX under threat

Ethical FinTech design

You Can Say On LinkedIn:
"In episode 5 of my #SmartPay series, I tackled a major concern for everyday people in SA: what happens if someone forces you to open your wallet app?
So I built a Voice-Activated Safe Mode. It listens for a secret panic phrase — and if I’m in danger, SmartPay hides my real balance, blocks transfers, and protects my life.
#Innovation #FinTech #DigitalWallet #SecurityByDesign"

Here’s What’s Already Possible Today (with your tech stack):

Feature	Can You Do It?	How?
Voice recognition	Yes	Use Vosk, TensorFlow.js, or ML.NET (free, works offline, no big data needed).
Panic phrase detection	Yes	Store a custom panic phrase in the DB and match the user’s voice input against it.
Fake UI in Safe Mode	Yes	Show a fake wallet balance and hide transfer buttons when isSafeMode == true.
Trigger Safe Mode on voice	Yes	Capture voice → detect trigger → flag account as IsInSafeMode = true.
Send silent alerts	Yes	Use backend C# service to email/SMS trusted contact without visible popup.
Switch back to real mode after re-authentication	Yes	Log out → log in again → verify using PIN or biometric → reset IsInSafeMode = false.
