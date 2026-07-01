# ABN Real Estate (Đất Cát) — Product Specification

> **Repo:** `abn.app.realestate`
> **Status:** Active | **Language:** Dart (Flutter)
> **Issues:** 60+ | **GitHub:** https://github.com/stevennt/abn.app.realestate

---

## 1. Product Identity

**ABN Real Estate (Đất Cát)** — a Vietnam-focused real estate operating system with one shared asset and transaction model expressed through six canonical role-specific workspaces: **Owner, Resident, Broker, Operator, Investor, Developer**.

**Positioning:** *"One property, one transaction history, many role-specific workspaces."*

## 2. Problem Statement

- Vietnamese real estate market lacks an integrated platform covering the full property lifecycle
- Fragmented tools: separate apps for listing, brokerage, property management, finance, and investor relations
- No unified record spans owner intent → broker pipeline → operator management → investor diligence
- Vietnam-specific needs not served by global proptech: private broker pools, informal agreements, VND/address structure, Zalo integration, sổ đỏ/sổ hồng documents

## 3. Target Users

| Role | Vietnamese | Core Job |
|---|---|---|
| **Owner** | Chủ nhà | Choose economic lane per property: sell, rent direct, or outsource. Needs strategy visibility, delegated oversight, approvals, finance pulse |
| **Resident** | Cư dân | Run housing lifecycle: discover, inspect, apply, sign, pay, request service, manage household |
| **Broker** | Môi giới | Move supply and demand toward closing: source owners, manage private pool, qualify leads, negotiate, close, collect commission |
| **Operator** | Quản lý vận hành | Run day-to-day rental operations: leasing, rent roll, maintenance, resident follow-through, owner reporting |
| **Investor** | Nhà đầu tư | Scan opportunities, track portfolio, compare deals, monitor developer releases, assess risk flags |
| **Developer** | Chủ đầu tư | Manage project workspace, release inventory, update brokers, track permits, publish progress |

## 4. Platform Architecture

### 4.1 Six-Role Operating Model

```
                      ┌─────────────────────────────┐
                      │    One Property / One Deal   │
                      │    Shared Asset & Tx Model   │
                      └──────────┬─────────────────┘
                                 │
          ┌──────────┬───────────┼───────────┬──────────┬──────────┐
          │          │           │           │          │          │
       Owner    Resident    Broker    Operator  Investor  Developer
     ──────────────────────────────────────────────────────────────
     Sell      Discover    Source    Leasing   Opps Scan  Releases
     Rent Dir  Inspect     Pool      Rent Roll Portfolio  Permits
     Outsource Apply       Qualify   Maint     Diligence  Brokers
     Oversight Sign        Negotiate Reporting Close-out  Progress
     Approvals Pay         Close     SLA Queues Watchlist  Docs
     Finance   Service     Commission Vendors  Risk Flags  Handoff
```

### 4.2 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Flutter (latest stable) |
| State Management | flutter_bloc (primary), provider (legacy) |
| Navigation | go_router |
| DI | get_it + injectable |
| Network | dio with interceptors (logging, auth) |
| Local Database | drift (SQLite) |
| Local Storage | shared_preferences, flutter_secure_storage |
| Serialization | json_annotation, freezed_annotation |
| Maps | Flutter Map with Leaflet |
| Charts | fl_chart |
| Backend | RESTful API (Axum — `abn.apiserver.rust.axum`) |
| Auth | JWT authentication |
| Sync | Offline-first repository SSOT with dirty queues |
| Architecture | Feature-First Clean Architecture + SSOT pattern |

### 4.3 App Architecture

```
lib/
├── config/              # Configuration files and constants
├── core/                # Shared infrastructure
│   ├── config/         # Environment and global config
│   ├── database/       # Local database setup (Drift)
│   ├── di/             # Dependency Injection
│   ├── network/        # API client + interceptors
│   ├── repositories/   # Repository pattern + SsotStore<T>
│   ├── router/         # GoRouter configuration
│   ├── tenant/         # Workspace/tenant context
│   └── themes/         # Material 3 theming
├── features/
│   ├── auth/           # Authentication
│   ├── property/       # Property management
│   ├── finance/        # Financial tracking
│   ├── maintenance/    # Maintenance requests
│   ├── contracts/      # Contract management
│   ├── crm/            # Customer relationship
│   ├── home/           # Role-aware dashboards
│   ├── public/         # Public marketplace
│   ├── owner/          # Owner strategy & oversight
│   ├── operator/       # Operator leasing & maintenance
│   ├── investor/       # Investor portfolio & diligence
│   ├── developer/      # Developer releases & updates
│   ├── agent/          # Broker workflows
│   └── role/           # Role management & config
├── services/            # Global services
├── sync/                # Data sync infrastructure
└── main.dart            # App entry point
```

### 4.4 SSOT Architecture

The app implements a **Single Source of Truth (SSOT)** architecture:
1. Repository is the **only** source of data
2. All UI components subscribe to repository streams
3. All mutations flow through repositories
4. Each entity type has one repository singleton
5. Entity IDs passed between screens, not entire objects
6. Persistence and sync are support layers under the repository

## 5. Key Feature Modules

### 5.1 Owner Module
- **Strategy selection:** Sell, Direct Rent, or Outsource per property
- **Delegated oversight:** Approvals queue, handoff artifacts
- **Finance pulse:** Income/expense tracking, payment reconciliation
- **Compliance inbox:** Document review, regulatory compliance
- **Report packs:** Owner-facing performance reports

### 5.2 Resident Module
- **Discovery:** Public marketplace, search/filter, saved homes
- **Inspections:** Viewing requests, scheduling, access rules
- **Payments:** Rent collection, auto-pay, receipt history
- **Service requests:** Maintenance reporting, status tracking
- **Household management:** Move-in, household members, access

### 5.3 Broker Module
- **Owner sourcing:** Lead capture, listing agreement
- **Private pool:** Shareable/public/private listing visibility
- **Lead qualification:** Budget, urgency, legal fit scoring
- **Viewing coordination:** Scheduling, access rules, feedback
- **Negotiation:** Offer/term tracking, multi-party negotiation board
- **Commission tracking:** Calculated, pending, collected states
- **Co-brokering:** Internal sharing, split tracking

### 5.4 Operator Module
- **Leasing queue:** Application review, lease signing
- **Rent roll:** Occupancy view, due/overdue tracking
- **Maintenance dispatch:** Work orders, vendor assignment, SLA
- **Resident roster:** Centralized tenant visibility
- **Owner reporting:** Packaged report generation
- **Exception board:** Delinquency, SLA breaches, escalations

### 5.5 Investor Module
- **Opportunity scanning:** Market dashboard, deal comparison
- **Portfolio tracking:** Holdings, performance, risk flags
- **Developer releases:** Release monitoring, unit comparison
- **Diligence blockers:** Document gaps, compliance review

### 5.6 Developer Module
- **Project workspace:** Inventory management, milestone tracking
- **Broker updates:** Structured communication, release notifications
- **Permit tracking:** Compliance document management
- **Progress publishing:** Public project timeline updates
- **Post-sale handoff:** Owner/resident/operator transition

### 5.7 Public Marketplace
- Property search with advanced filters
- Featured listings, map-based discovery
- Public property details with trust indicators
- Saved properties, watchlists, alerts
- Agent contact and inquiry

### 5.8 Cross-Cutting
- **Finance:** Unified income/expense across all roles, payment tracking, reconciliation
- **Contracts:** Templates, e-sign workflow, signing persistence
- **Maintenance:** Work orders, vendor management, spend approvals
- **Documents:** Vietnam-specific taxonomy (sổ đỏ, sổ hồng, permits)
- **Notifications:** In-app, push, email, Zalo integration
- **Analytics:** Role-specific dashboards, exportable reports

## 6. Vietnam-Native Features

| Feature | Detail |
|---|---|
| **Currency** | VND with local shorthand (triệu, tỷ) |
| **Address** | Province/district/ward/project/block/unit hierarchy |
| **Legal docs** | Sổ đỏ, sổ hồng, permits, notarization, foreign quota |
| **Brokerage** | Private pools, non-exclusive listings, co-broker splits, owner confirmation before showings |
| **Communication** | Zalo, phone, SMS as default rails |
| **Payments** | Bank QR codes, local wallets |
| **Offline-first** | Low-bandwidth optimized, aggressive compression, offline capture |

## 7. Current Status & Issues

| # | Title | State |
|---|---|---|
| 60 | Cho thuê vị trí chớp nhoáng | OPEN |
| 59 | API deployment verification | OPEN |
| 56 | Building management API verification | OPEN |
| 55 | Bán dịch vụ Bảo hiểm cháy nổ | OPEN |
| 54 | Allow videos (TikTok integration) | OPEN |
| 53 | Real World Assets Tokenization | OPEN |
| 52 | Building Management Goals-Pack (18 goals DONE) | OPEN |
| 51 | Quản lý chó mèo và tiêm phòng | OPEN |
| 50 | Phần mềm Ban quản trị tòa nhà | OPEN |
| 45 | Restructure the app (workspace bootstrap fix) | OPEN |
| 40 | 100 improvements | OPEN |

**Development milestones:**
- Phase 1-40+ completed via 176 architecture docs
- Building Management module: 18/18 goals DONE (portfolio dashboard, vendor management, events calendar)
- SSOT architecture fully implemented
- Vietnam market stakeholder blueprint finalized
- 100-prompt execution sequence completed

## 8. Frappe Implementation Notes

- **Current stack** is Flutter + Axum REST API — NOT Frappe
- **Frappe migration candidate** — Real estate management maps well to ERPNext modules:
  - **Property** → Frappe `Asset` + custom DocType
  - **Owner/Resident** → Frappe `Customer` with role-based portals
  - **Broker** → Frappe CRM (`Lead`, `Opportunity`, `Customer`)
  - **Contracts** → Frappe `Contract` DocType
  - **Maintenance** → Frappe `Maintenance Schedule`, `Maintenance Visit`
  - **Finance** → ERPNext `Sales Invoice`, `Payment Entry`, `Journal Entry`
  - **Developer/Investor** → Frappe `Project` with custom fields
- Suggested: Create a custom Frappe app `abn_realestate` with:
  - DocTypes: `Property`, `Property Unit`, `Property Listing`, `Viewing Request`, `Offer`, `Lease Agreement`, `Maintenance Request`, `Building`, `Vendor`
  - Role-based portals: Owner Portal, Resident Portal, Broker Portal, Operator Portal
  - Workflows for: Listing approval, lease signing, maintenance dispatch, commission settlement
  - Integrations: VNeID, Zalo, Vietnam payment gateways

## 9. Documentation Inventory

The repo has extensive documentation (176+ files in `docs/architecture/`):
- **Architecture:** `system-architecture.md`, `ssot_architecture_map.md`, `data-flow.md`
- **Stakeholder Blueprint:** `vietnam_market_stakeholder_blueprint.md` (456 lines)
- **Role Analysis:** `role_day_in_life_analysis.md`
- **User Journeys:** `journey-role-intent-platform.md`
- **Testing:** `release_realism_checklist.md`, `execution_hardening_qa_release_phase38.md`
- **Phase Execution:** 100+ phase docs covering owner, resident, broker, operator, investor, developer workflows

## 10. Infrastructure Dependencies

| Dependency | Repository |
|---|---|
| API Server | `abn.apiserver.rust.axum` |
| Database | `abn.postgresql` |
| Auth | OneID (via Axum API server) |
