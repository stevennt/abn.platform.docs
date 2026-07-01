# Retail Network (Real Beat) — Product Specification

> **Repo:** `abn.retail.network.app.1`
> **Status:** Active | **Language:** Dart (Flutter) + PLpgSQL
> **Issues:** 5 | **GitHub:** https://github.com/stevennt/abn.retail.network.app.1

---

## 1. Product Identity

**Retail Network (Real Beat)** — a retail network operating system for day-to-day store operations across frontline staff, store managers, regional leaders, head office, executives, and platform support. It answers, in one operational flow: *Is every store open, staffed, and healthy right now? What is blocked or at risk? Who owns each issue? Are customer problems being recovered fast enough?*

**Core concept — Real Beat:** A business-pulse action captured through the heartbeat action lane (walk-in, purchase, complaint, queue peak). Distinct from technical presence heartbeat.

## 2. Problem Statement

- Retail chains lack real-time visibility into store operational health
- Incident reporting is fragmented across Zalo, phone calls, and paper
- No structured escalation from employee → shop manager → regional → company → CXO
- Win signals (good practices) are not captured or replicated across the network
- Shift handovers lose context; critical blockers fall through cracks
- No unified heartbeat/liveliness monitoring for staff, devices, and shops

## 3. Target Users & Roles

| Role | Vietnamese | Core Job |
|---|---|---|
| **Employee** | Nhân viên | Start shift, send heartbeat, complete tasks, report incidents, submit shift summary |
| **Shop Manager** | Quản lý cửa hàng | Monitor live heartbeat, triage incidents, approve reports, escalate issues |
| **Regional Manager** | Quản lý vùng | Supervise shops in region, resolve cross-site incidents, review regional risk |
| **Company Admin** | Quản trị công ty | National operations heartbeat, govern incident policy, publish daily digest |
| **CXO** | Lãnh đạo | Executive daily summary, track risk/business continuity, intervene on major incidents |
| **Platform Super Admin** | Quản trị nền tảng | Platform reliability, tenant support, audit access, system health |

## 4. Domain Glossary

| Term | Definition |
|---|---|
| **Shift** | One staff member's active work session for one shop, including start, heartbeat, handover, and close |
| **Heartbeat** | A liveliness/presence signal proving a user, device, or shop is currently online enough to be operationally visible |
| **Real Beat** | A business-pulse action captured through the heartbeat action lane: walk-in, purchase, complaint, queue peak. *Not the same as technical heartbeat* |
| **Incident** | A risk event that disrupts operations — moves through acknowledgment, ownership, SLA, and resolution |
| **Risk Signal** | Normalized risk-side representation for dashboards and cross-role monitoring |
| **Win Signal** | A structured positive outcome verified, amplified, replicated, and archived so good practice spreads |
| **Mandatory Task** | Required operational action (e.g., open-store compliance) — pending, overdue, missed, or completed |
| **Handover** | Controlled transfer of an active shift with blockers, notes, and unresolved work made explicit |
| **Recovery Case** | Customer-feedback follow-up from low score/service failure — tracked until resolved |
| **Digest** | Company-level operations summary turning the day's risks, wins, and follow-ups into one management output |

## 5. Platform Architecture

### 5.1 Tech Stack

| Layer | Technology |
|---|---|
| Mobile App | Flutter |
| State Management | flutter_bloc |
| DI | get_it + injectable |
| Navigation | go_router |
| Local Database | drift (SQLite) |
| Backend | Rust/Axum (`abn.apiserver.rust.axum`) |
| Database | PostgreSQL (`abn.postgresql`) |
| Auth | OneID |

### 5.2 App Architecture

```
lib/
├── core/               # Shared infrastructure, database, network, router, themes
├── features/
│   ├── auth/          # Authentication + role selection
│   ├── home/          # Role-aware dashboards (employee, shop_manager, regional_manager, admin, cxo, super_admin)
│   ├── employee/      # Shift, heartbeat, tasks, incident reporting
│   ├── operations/    # Incident management, risk/win signals, escalation
│   ├── surveys/       # Customer survey module
│   ├── radio/         # Company Radio module
│   └── ...
├── shared/             # Shared widgets and utilities
└── main.dart
```

### 5.3 Role-Specific Home Screens

| Role | Screen | Path |
|---|---|---|
| Employee | Employee Home Page | `features/employee/employee_home_page.dart` |
| Shop Manager | Shop Manager Home Page | `features/home/shop_manager_home_page.dart` |
| Regional Manager | Regional Manager Home Page | `features/home/regional_manager_home_page.dart` |
| Company Admin | Company Admin Home Page | `features/admin/company_admin_home_page.dart` |
| CXO | CXO Home Page | `features/home/cxo_home_page.dart` |
| Platform Super Admin | Super Admin Home Page | `features/home/platform_super_admin_home_page.dart` |

## 6. Key Features

### 6.1 Shift Management
- Check-in / check-out with shift session tracking
- Shift status: active, handover_pending, closed
- Planned vs actual end time tracking
- Shift handover with explicit blockers, notes, unresolved work

### 6.2 Heartbeat Monitoring
- User heartbeat every 60 seconds during active shift
- Device and shop-level heartbeat signals
- Status transitions: online → warning (3 missed) → offline (5 missed)
- Shop manager notified when staff go offline
- Regional manager alerted for shop offline > 10 minutes
- **Real Beat:** Business-pulse actions captured through heartbeat lane (walk-in, purchase, complaint, queue peak)

### 6.3 Incident Reporting & Escalation
- Immediate incident creation with evidence (photos, voice)
- Severity levels: P1 (critical) → P4 (low)
- Lifecycle: new → acknowledged → in_progress → resolved → closed
- SLA-based escalation: P1 immediate, P2/P3 within defined windows
- Escalation path: Employee → Shop Manager → Regional → Company Admin → CXO
- Audit trail on all state changes

### 6.4 Win Signal Reporting
- Capture positive outcomes (sales, service, teamwork, process, compliance)
- Lifecycle: verified → amplified → replicated → archived
- Cross-shop amplification and replication of best practices
- Impact scoring and replication potential tracking

### 6.5 Daily Operations Reports
- Shift report (per employee)
- Daily shop report (per shop manager)
- Daily region report (per regional manager)
- Daily company digest (per company admin)
- Report coverage tracking across all levels

### 6.6 Customer Survey Module
- In-app customer feedback collection
- Recovery case creation from low scores
- Follow-up tracking until resolution

### 6.7 Company Radio Module
- Internal broadcast/communication channel
- Company-wide announcements and updates

### 6.8 Point System (Issue #5)
- Gamification / reward points for retail staff

## 7. Daily Workflow

```
PHASE 1: Shift Start
  Employee checks in → baseline heartbeat (2 min) → opening checklist

PHASE 2: Live Operations
  Heartbeat every 60s → tasks → monitor risk → incident reporting

PHASE 3A: Incident Response
  Create incident → acknowledge → triage → resolve → close
  SLA escalation if breached

PHASE 3B: Win Signal
  Capture win → verify → amplify → replicate → archive

PHASE 4: Shift Handover
  Summary → list pending incidents → incoming accepts → manager confirms

PHASE 5: Day Closure
  Shop report → region review → company digest → publish
```

## 8. Core Data Model

### Shift Session
`shift_id, user_id, role, shop_id, start_time, planned_end_time, actual_end_time, shift_status`

### Heartbeat Record
`heartbeat_id, source_type(user/device/shop), source_id, shop_id, timestamp, status(online/warning/offline), battery_level, network_quality`

### Incident Report
`incident_id, shop_id, region_id, reported_by, category, severity(P1-P4), title, description, evidence, status, SLA timestamps`

### Operational Signal (Risk or Win)
`signal_id, intent_type(risk/win), company_id, region_id, shop_id, created_by, category, title, description, evidence, status`
- Risk: severity, acknowledged_at, resolved_at
- Win: win_category, impact_score, replication_potential, amplified_at, replicated_at

## 9. Current Status & Issues

| # | Title | State |
|---|---|---|
| 5 | Points | OPEN |
| 4 | WorldMonitor: link to corporate dashboard | OPEN |
| 3 | Company Radio Module | OPEN |
| 2 | Rearrange the roles screens | OPEN |
| 1 | Customer Survey Module | OPEN |

**Development milestones (from docs):**
- 100 — Retail Company Implementation Blueprint & Prompt Pack
- 101 — Pilot vs Rollout Readiness Roadmap
- 102 — Rollout Readiness Implementation Prompt Pack
- 103 — Remaining Rollout Gaps Closure Prompt Pack
- 104 — Go-Live Readiness Prompt Pack
- Role home screen audit, user flows, customer survey module docs completed

## 10. Frappe Implementation Notes

- **Current stack** is Flutter + Axum — NOT Frappe
- **Frappe migration candidate** — Retail Operations / Store Management maps well to ERPNext:
  - **Employee** → Frappe `Employee` with shift management
  - **Shifts** → Frappe `Shift Type`, `Shift Assignment`, `Shift Request`
  - **Tasks** → Frappe `Task` with checklists
  - **Incidents** → Frappe `Issue` with SLA escalation
  - **Surveys** → Frappe CRM Feedback / custom DocType
  - **Company Radio** → Frappe `Announcement` / custom broadcast module
  - **Points/Gamification** → custom Frappe app
- Suggested: Create a custom Frappe app `abn_retail_ops` with:
  - DocTypes: `Shop`, `Shift Session`, `Heartbeat Log`, `Incident Report`, `Win Signal`, `Daily Operation Report`, `Recovery Case`
  - Workflows: Incident lifecycle, Shift lifecycle, Report approval chain
  - SLA engine using Frappe's built-in assignment rules

## 11. Infrastructure Dependencies

| Dependency | Repository |
|---|---|
| API Server | `abn.apiserver.rust.axum` |
| Database | `abn.postgresql` |
| Auth | OneID (via Axum API server) |
| WorldMonitor | `abn.worldmonitor` (issue #4 integration) |
