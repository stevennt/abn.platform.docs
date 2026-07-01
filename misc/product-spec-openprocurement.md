# Open Procurement Platform — Product Specification

> **Repo:** `abn.platform.openprocurement`
> **Status:** Scaffold (greenfield, no apps placed yet) | **Language:** TypeScript
> **Issues:** 4 | **GitHub:** https://github.com/stevennt/abn.platform.openprocurement

---

## 1. Product Identity

**Open Procurement Platform** — an ABN platform repository for procurement-related applications. Inspired by `dauthau.asia`, aiming to provide procurement for everyone and every company.

**URL:** Planned—no live deployment yet

## 2. Problem Statement

- Procurement processes are fragmented across companies
- Small/medium businesses lack affordable procurement platforms
- Need for transparent, auditable procurement workflows
- Existing `dauthau.asia` provides reference model for procurement

## 3. Target Users

- **Companies:** Need to manage procurement, tenders, supplier relationships
- **Procurement Teams:** RFQ/RFP management, vendor evaluation, contract awards
- **Suppliers:** Bid on tenders, manage proposals, track contract status
- **Platform Admins:** Oversee procurement processes, compliance, audit

## 4. Platform Architecture

### 4.1 Tech Stack (Planned)

| Layer | Technology |
|---|---|
| API Server | Rust/Axum (existing `abn.apiserver.rust.axum`) |
| Database | PostgreSQL (existing `abn.postgresql`) |
| Auth | OneID via Axum API server |
| Workflow | OneWorkflow via Axum API server |
| Frontend | Flutter (mobile) + Next.js (web) — planned |
| Admin | Next.js admin dashboards — planned |

### 4.2 Repository Structure

```
abn.platform.openprocurement/
├── apps/
│   ├── mobile/     ← Future Flutter mobile apps
│   ├── web/        ← Future Next.js web apps
│   └── admin/      ← Future admin dashboards
├── backend/         ← Orientation (code in abn.apiserver.rust.axum)
├── database/        ← Orientation (schema in abn.postgresql)
├── docs/
│   ├── architecture/
│   ├── features/
│   ├── platform-migration/
│   └── goals-packs/
├── integrations/
├── packages/
│   ├── flutter/
│   └── dart/
├── tests/
└── tools/
```

## 5. Key Features (Planned)

- **Procurement Workflows:** RFQ, RFP, tender management
- **Supplier Management:** Onboarding, qualification, performance tracking
- **Bid Management:** Proposal submission, evaluation, scoring
- **Contract Management:** Award, tracking, renewals
- **Purchase Orders:** Creation, approval, fulfillment tracking
- **Procurement Analytics:** Spend analysis, supplier performance
- **Compliance & Audit:** Audit trails, document management, regulatory compliance

## 6. Current Status & Issues

| # | Title | State |
|---|---|---|
| 4 | work.thoughts.tmp.apd-openprocure-production-verify | OPEN |
| 3 | Take from dauthau.asia | CLOSED |
| 2 | work.thoughts.tmp.openprocure-continue | CLOSED |
| 1 | Procurement Platform for everyone and every company | CLOSED |

**Current state:** Greenfield platform scaffold. No apps placed yet. Backend and database are orientation folders pointing to ABN ecosystem repos. Standard ABN monorepo layout.

## 7. Frappe Implementation Notes

- **Current status:** Scaffold only — no backend yet
- **Frappe migration candidate** — ERPNext Buying module is a natural starting point
- Existing ERPNext procurement DocTypes: `Supplier`, `Request for Quotation`, `Supplier Quotation`, `Purchase Order`, `Purchase Receipt`, `Purchase Invoice`
- Suggested approach: Create a custom `Procurement Management` Frappe app that extends ERPNext Buying
- Could add: tender management, bid evaluation scoring, contract lifecycle management
- Custom DocType ideas: `Tender`, `Bid`, `Bid Evaluation`, `Procurement Contract`, `Supplier Performance`
- Frappe's workflow engine handles approval routing naturally

## 8. Infrastructure Dependencies

| Dependency | Repository |
|---|---|
| API Server | `abn.apiserver.rust.axum` |
| Database | `abn.postgresql` |
| Auth | OneID (via Axum API server) |
| Workflow | OneWorkflow (via Axum API server) |
