# OpenAir — Product Specification

> **Repo:** `abn.platform.openair`
> **Status:** Early (scaffold, no apps placed yet) | **Language:** TypeScript
> **Issues:** 3 | **GitHub:** https://github.com/stevennt/abn.platform.openair

---

## 1. Product Identity

**OpenAir** — Low Altitude Economy (LAE) Operational Platform. A platform for managing drone operations, airspace coordination, and low-altitude economy services.

**Also known as:** LAE — Low Altitude Economy platform.

## 2. Problem Statement

- Low altitude economy (drones, UAVs) is emerging but lacks operational platforms
- Drone operators need: flight planning, airspace coordination, fleet management
- Regulators need: airspace monitoring, compliance, incident tracking
- Service providers need: booking, dispatch, tracking for drone-based services

## 3. Target Users

- **Drone Operators:** Flight planning, fleet management, mission execution
- **Service Providers:** Drone-based delivery, surveying, inspection services
- **Regulators:** Airspace monitoring, flight approval, compliance enforcement
- **Platform Admins:** Operations monitoring, compliance, analytics

## 4. Platform Architecture

### 4.1 Tech Stack (Planned)

| Layer | Technology |
|---|---|
| API Server | Rust/Axum (existing `abn.apiserver.rust.axum`) |
| Database | PostgreSQL (existing `abn.postgresql`) |
| Auth | OneID via Axum API server |
| Mobile | Flutter — planned |
| Web | Next.js — planned |
| Admin | Next.js admin dashboards — planned |
| Workflow | OneWorkflow via Axum API server |

### 4.2 Repository Structure

```
abn.platform.openair/
├── apps/           ← Application surfaces (mobile, web, admin, game)
├── docs/
│   ├── architecture/
│   ├── features/
│   ├── platform-migration/
│   ├── goals-packs/
│   └── tmp/
├── backend/        ← Orientation (code in abn.apiserver.rust.axum)
├── database/       ← Orientation (schema in abn.postgresql)
├── packages/       ← Future shared Flutter/Dart packages
├── integrations/   ← Future integration configs
├── tests/          ← Future cross-app tests
└── tools/          ← Future dev tooling scripts
```

## 5. Key Features (Planned)

- **Flight Operations:** Mission planning, flight logging, real-time tracking
- **Fleet Management:** Drone registry, maintenance tracking, pilot management
- **Airspace Coordination:** Geofencing, airspace deconfliction, flight approval
- **Service Marketplace:** Drone service booking, dispatch, fulfillment
- **Compliance:** Regulatory compliance, incident reporting, audit trails
- **Analytics:** Flight statistics, utilization reports, performance metrics

## 6. Current Status & Issues

| # | Title | State |
|---|---|---|
| 3 | Add this usecase / service | OPEN |
| 2 | work.thoughts.tmp.openair-goals-execution | OPEN |
| 1 | LAE — Name this platform OpenAir | OPEN |

**Current state:** Empty platform scaffold. No apps placed yet. Standard ABN monorepo layout with orientation folders pointing to ecosystem repos.

## 7. Frappe Implementation Notes

- **Current status:** Empty scaffold — no implementation yet
- **Frappe migration candidate** — A specialized Frappe app for LAE/Drone operations would need custom development
- Suggested DocTypes: `Drone`, `Pilot`, `Flight Mission`, `Flight Log`, `Airspace Zone`, `Flight Approval`, `Maintenance Record`
- Could leverage Frappe's ERPNext for: asset management (drones), employee management (pilots), project management (missions)
- GIS/spatial data integration needed — Frappe supports geolocation fields
- Custom Frappe app `openair` with drone operations-specific features

## 8. Infrastructure Dependencies

| Dependency | Repository |
|---|---|
| API Server | `abn.apiserver.rust.axum` |
| Database | `abn.postgresql` |
