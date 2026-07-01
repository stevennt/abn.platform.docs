# ABN Transportation Platform — Product Specification

> **Repo:** `abn.platform.transportation`
> **Status:** Scaffold (backend deployed, apps planned) | **Language:** TypeScript + Dart
> **Issues:** 6 | **GitHub:** https://github.com/stevennt/abn.platform.transportation

---

## 1. Product Identity

**ABN Transportation Platform** — a unified transportation operating system covering ride hailing, cargo trucking, shipping, companies, retail users, company users, drivers, fleets, dispatch, payments, and tracking.

**URL:** `https://axum.abnasia.org` (backend API deployed)

## 2. Problem Statement

- Disconnected transportation services across cargo, shipping, and ride hailing
- No unified core for shared concepts (transport jobs, dispatch, payments, tracking)
- Companies need: fleet management, driver management, dispatch console, tracking
- Retail users need: ride hailing, parcel shipping, cargo booking
- Existing ABN ecosystem (Axum, PostgreSQL, OneID) not yet leveraged for transportation

## 3. Target Users

- **Companies:** Need cargo trucking, fleet management, driver dispatch
- **Retail Users:** Need ride hailing, parcel shipping
- **Drivers:** Mobile app for job acceptance, navigation, tracking
- **Fleet Owners:** Vehicle management, driver management, analytics
- **Dispatchers:** Dispatch console for manual assignment and oversight
- **Platform Admins:** Operations monitoring, compliance, payments

## 4. Platform Architecture

### 4.1 Shared Core

One shared `Transport Job` core with specialized service modes:

```
transport_jobs (shared core)
├── Cargo trucking — goods moved by truck, company-first
├── Shipping/parcel — parcels through handoff/delivery states
└── Ride hailing — passenger movement pickup → dropoff
```

### 4.2 Tech Stack

| Layer | Technology |
|---|---|
| API Server | Rust/Axum (existing `abn.apiserver.rust.axum`) |
| Database | PostgreSQL (existing `abn.postgresql`) |
| Auth | OneID via Axum API server |
| Payments | OnePay (via Axum API server) |
| Frontend | Flutter (mobile) + Next.js (web) — planned |
| Workflow | OneWorkflow (via Axum API server) |

### 4.3 Data Model

**Shared Core — `transport_jobs`:**
- id, tenant_id, service_mode (`cargo`|`shipping`|`ride`)
- requester_type, requester_id, company_id
- pickup_location_id, dropoff_location_id, scheduled_at
- status, assigned_driver_id, assigned_vehicle_id
- price_estimate, final_price, payment_status
- created_at, updated_at

**`transport_job_events`:** job_id, event_type, status_from, status_to, actor_type, actor_id, location_id, metadata_json

**Domain Extensions:**
- **Cargo:** weight, volume, load requirements, loading/unloading windows
- **Shipping:** tracking code, label, hubs, parcel records, delivery attempts
- **Ride:** passenger count, ride class, fare estimate, driver ETA, ratings
- **Fleet:** vehicles, drivers, fleet ownership, documents, availability
- **Dispatch:** assignment records, manual overrides, dispatch audit reasons
- **Tracking:** location pings, ETA snapshots, public tracking timeline
- **Payment:** invoice records, payment status, settlement linkage

## 5. Planned App Surfaces

```
abn.platform.transportation/
├── apps/
│   ├── web-admin/          — Admin dashboard
│   ├── web-company-portal/ — Company portals
│   ├── mobile-customer/    — Retail customer app (Flutter)
│   ├── mobile-driver/      — Driver app (Flutter)
│   ├── mobile-fleet-owner/ — Fleet owner app (Flutter)
│   ├── ops-dispatch-console/ — Dispatch console
│   └── public-tracking-page/ — Public tracking
├── packages/
│   ├── types/
│   ├── api-client/
│   ├── ui/
│   ├── validators/
│   ├── maps/
│   ├── pricing-engine/
│   └── domain-models/
└── docs/features/transportation-platform-structure/
```

## 6. Key Features (MVP + Planned)

### MVP 1: Cargo + Dispatch + Tracking
- Transport job creation (cargo mode)
- Company user management
- Driver and vehicle assignment
- Status tracking and dispatch audit
- Pricing estimates and invoice records

### Post-MVP Modules
- **Shipping/Parcel:** Tracking codes, hubs, delivery attempts
- **Ride Hailing:** Passenger app, fare estimation, driver ETA, ratings
- **Fleet Management:** Vehicle docs, driver availability, fleet analytics
- **Automated Dispatch:** Matching engine, ETA optimization
- **Pricing Engine:** Dynamic pricing, distance/time calculation
- **Payment Integration:** OnePay, invoice settlement

## 7. Current Status & Issues

| # | Title | State |
|---|---|---|
| 6 | Production verification report | OPEN |
| 5 | YOLO session — stale binary fix | OPEN |
| 4 | API deployed verification | OPEN |
| 3 | Goals-Pack: transportation-platform status | OPEN |
| 2 | VSL-inspired features | OPEN |
| 1 | Structure (original MVP) | OPEN |

**Production status:**
- 25 `transport_*` tables in production DB
- 11 sqlx migrations applied
- All routes live and verified (`/ping` 200, `/jobs` 200, `/tickets` 200)
- 28/30 goals DONE (99% pack progress)
- 2 remaining PARTIAL: SMS/OTP integration (Twilio env vars), Document Signing/eKYC (provider contract)

## 8. Frappe Implementation Notes

- **Current backend** is Rust/Axum — NOT Frappe
- **Frappe migration candidate** because Fleet/Driver/Dispatch/Payments map naturally to ERPNext modules
- Suggested DocTypes: `Transport Job`, `Vehicle`, `Driver`, `Fleet`, `Dispatch Log`, `Tracking Event`, `Transport Invoice`
- Could leverage ERPNext's existing: `Vehicle`, `Driver`, `Delivery Note`, `Shipping Rule`, `Sales Invoice`
- Idea: Create a `Transport Management` Frappe app extending ERPNext Logistics
- ABN OneWorkflow could be used for dispatch orchestration

## 9. Architecture Constraints

- **No separate backend or DB** — must reuse existing ABN Axum API server and PostgreSQL
- **No separate identity** — OneID through Axum
- **No separate payment** — OnePay through Axum
- **Backend code** goes in `~/Workspace/abn.apiserver.rust.axum`
- **Migrations** go in the existing Axum migration workflow
- **This repo** owns: product docs, app shells, shared client packages, prompts
