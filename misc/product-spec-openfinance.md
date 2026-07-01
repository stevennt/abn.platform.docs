# OpenFinance / IDB Corporate Banking — Product Specification

> **Repo:** `abn.platform.openfinance`
> **Status:** Active | **Language:** Dart/Flutter
> **Issues:** 12 | **GitHub:** https://github.com/stevennt/abn.platform.openfinance

---

## 1. Product Identity

**OpenFinance / IDB Corporate Banking** — A Flutter-based corporate banking application, migrated from legacy IDB platform with feature-first architecture. Modernizes corporate banking for requesters and approvers.

## 2. Problem Statement

- Legacy IDB corporate banking app needs modernization
- Corporate banking customers need mobile-first experience for approvals
- Requester → Approver workflow is core to corporate banking operations
- Need mock and live API adapter modes for development/testing
- Multi-flavor builds needed (dev/uat/prod)

## 3. Target Users

- **Corporate Banking Customers:**
  - **Requesters:** Initiate transactions, payments, approvals
  - **Approvers:** Review and approve/reject requests
- **Bank Operations:** Monitoring, compliance, support

## 4. Platform Architecture

### 4.1 Tech Stack

| Layer | Technology |
|---|---|
| Mobile App | Flutter 3.41 / Dart 3.11 |
| State Management | flutter_riverpod |
| Routing | go_router |
| HTTP Client | dio |
| Local Storage | shared_preferences, flutter_secure_storage |
| Architecture | Feature-first (data/domain/presentation layers) |
| Backend | Rust/Axum (existing `abn.apiserver.rust.axum`) |
| Database | PostgreSQL (existing `abn.postgresql`) |
| Auth | OneID via Axum API server |
| Workflow | OneWorkflow via Axum API server |

### 4.2 App Architecture

```
apps/mobile/idb-banking/lib/
├── core/
│   ├── analytics/
│   ├── config/
│   ├── data/
│   ├── errors/
│   ├── flags/
│   ├── formatting/
│   ├── localization/
│   ├── networking/
│   ├── routing/
│   ├── security/
│   ├── storage/
│   ├── telemetry/
│   └── theme/
├── features/     ← 14 feature modules
│   └── [feature]/
│       ├── data/
│       ├── domain/
│       └── presentation/
└── shared/       ← Shared models and widgets
```

### 4.3 Feature Modules

14 feature modules with data/domain/presentation layers. Key banking features:
- Account management
- Fund transfers and payments
- Approval workflows
- Transaction history
- Document management
- Secure storage for credentials
- Multi-flavor build (dev/uat/prod)

### 4.4 Environment Configuration

- `APP_ENV`: `dev` | `uat` | `prod`
- `APP_FLAVOR`: `dev` | `uat` | `prod`
- `APP_ADAPTER_MODE`: `mock` | `live`

### 4.5 Demo Login

- Requester: username `request` (any password)
- Approver: username `approve` (any password)

## 5. Key Features

- 14 banking feature modules with clean architecture
- Flutter Riverpod state management
- go_router navigation
- Mock and live API adapter modes
- Demo login with requester/approver roles
- Multi-flavor build (dev/uat/prod)
- OneID authentication integration
- flutter_secure_storage for credentials
- GitHub Actions CI/CD (analyze + test on push/PR)

## 6. Current Status & Issues

| # | Title | State |
|---|---|---|
| 12 | work.thoughts.tmp.cse-openfinance | OPEN |
| 11 | Add: Lending Cases, Cầm đồ (like F88) | OPEN |
| 10 | Goals-Pack: openfinance-platform status | OPEN |
| 9 | Feature support verification | OPEN |
| 8 | OneID | OPEN |

**Feature scope includes:** Lending cases, pawnbroking (F88-like), OneID auth integration.

## 7. Documentation Inventory (72+ docs)

The repo has extensive documentation:
- **Architecture:** `docs/architecture/system-architecture.md`
- **ADR:** `docs/adr/`
- **Platform Migration:** `docs/platform-migration/` (6 documents)
- **Strategy:** `docs/strategy/`
- **TechcomBank:** Pilot scope, demo script, readiness scorecard, KPI framework, UAT checklist
- **System Expectations:** `docs/system-expectations/`
- **Feature docs:** `docs/features/`
- **Production plans:** `docs/retail-corporate-superapp-production-plan.md`

## 8. Frappe Implementation Notes

- **Current stack** is Flutter + ABN Axum backend — NOT Frappe
- **Frappe migration candidate** — Corporate banking / Lending cases could use ERPNext Finance module
- Lending/payment features map to: `Loan`, `Loan Application`, `Payment Entry`, `Bank Transaction` DocTypes
- Suggested approach: Create a `Corporate Banking` Frappe app with custom DocTypes for lending, approval workflows, and payment tracking
- OneID auth should be adapted to Frappe User authentication
- Existing OneWorkflow could be replaced with Frappe's built-in workflow engine

## 9. Infrastructure Dependencies

| Dependency | Repository |
|---|---|
| API Server | `abn.apiserver.rust.axum` |
| Database | `abn.postgresql` |
| Auth | OneID (via Axum API server) |
| Workflow | OneWorkflow (via Axum API server) |
