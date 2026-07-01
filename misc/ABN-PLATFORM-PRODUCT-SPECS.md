# ABN Platform Product Specifications

> Generated 2026-07-01 — Inventory of all `abn.platform.*` repos.
> Purpose: Document product specifications for Frappe implementation planning.

---

## Table of Contents

1. [Platform Ecosystem Overview](#1-platform-ecosystem-overview)
2. [Repos by Category](#2-repos-by-category)
   - [Core / Infrastructure](#21-core--infrastructure)
   - [Business & ERP](#22-business--erp)
   - [Commerce & Retail](#23-commerce--retail)
   - [Industry Verticals](#24-industry-verticals)
   - [Media & Content](#25-media--content)
   - [Misc / Scaffolds](#26-misc--scaffolds)
3. [Product Specs by Repo](#3-product-specs-by-repo)
4. [Frappe Implementation Roadmap](#4-frappe-implementation-roadmap)

---

## 1. Platform Ecosystem Overview

The ABN platform ecosystem comprises **28 repos** organized as follows:

| Category | Count | Repos |
|---|---|---|
| Core / Infrastructure | 3 | `runtime`, `computefleet`, `supabase` |
| Internal ERP (Frappe) | 4 | `erp.base`, `erp.base.vietnam-compliance`, `erp.press`, `erp.t-van` |
| Commerce & Retail | 3 | `ecommerce`, `openfashion`, `ads` |
| Industry Verticals | 7 | `greenos`, `openair`, `openrepair`, `transportation`, `travel`, `healthcare.careme`, `wisdomcloud` |
| Media & Content | 2 | `abnasia.org`, `copyright` |
| Finance & Legal | 3 | `openfinance`, `openinvest`, `openprocurement` |
| Horizontal Platform | 4 | `base`, `bos`, `openair`, `riskradar` |
| Translation | 2 | `catlingo`, `catlingo.box` |

**Shared infrastructure:**
- **Auth:** OneID (via `abn.apiserver.rust.axum`)
- **API Server:** Axum Rust (`abn.apiserver.rust.axum`)
- **Database:** PostgreSQL (`abn.postgresql`)
- **Workflow:** OneWorkflow
- **Payments:** OnePay

---

## 2. Repos by Category

### 2.1 Core / Infrastructure

#### `abn.platform.runtime` — ABNRuntime
- **Status:** Active | **Language:** Rust
- **Description:** Self-evolving, capability-based platform that bridges AI planning to deterministic execution.
- **Key Architecture:**
  - Single `/execute` entry point
  - Capability Registry with promotion pipeline: AI → Workflow → WASM → Native Rust
  - WASM hot-reload (wasmtime)
  - JSON sequential workflows + Cano FSM for complex branching
  - Entity Registry with pluggable Storage Adapters
- **Built-in capabilities:** expense_approval, customer_scoring, invoice_validation, fraud_detection
- **Frappe relevance:** None — custom Rust/WASM runtime

#### `abn.platform.computefleet` — ComputeFleet
- **Status:** Early | **Language:** Shell/HCL
- **Description:** HashiCorp Nomad cluster management for distributed compute orchestration across VPS nodes.
- **Key features:** Nomad cluster formation, multi-driver scheduling (Docker, exec, raw_exec), auto-detection
- **Frappe relevance:** None — infrastructure only

#### `abn.platform.supabase` — Supabase Fork
- **Status:** Active | **Language:** TypeScript
- **Description:** Upstream Supabase fork. Open-source Firebase alternative with hosted Postgres, auth, APIs, realtime, storage, AI/vector tools.
- **Frappe relevance:** None directly, but used as infrastructure by ABN platform repos

---

### 2.2 Business & ERP

#### `abn.platform.erp.base` — ERPNext Base (Vietnam Deployment)
- **Status:** Active | **Language:** Python/Frappe
- **URL:** erp.abnasia.org, fr.abnasia.org
- **Description:** Multi-site ERPNext deployment for ABN organizations. Primary sites: SaoY Pharma Group (frontend) and ABN Asia (abnasia).
- **Key Features:**
  - Multi-site Frappe bench (frontend + abnasia sites)
  - Custom Frappe apps: GreenOS API, CEOReports
  - GreenOS agricultural dashboard (farmers, procurement, processing, sales, compliance, KPI)
  - Docker Compose deployment with MariaDB + Redis
- **Stack:** Frappe, ERPNext v16, Python, MariaDB, Redis, Docker
- **Frappe relevance:** Primary Frappe/ERPNext deployment

#### `abn.platform.erp.base.vietnam-compliance` — Vietnam Compliance
- **Status:** Scaffold | **Language:** Python/Frappe
- **Description:** Fork of India Compliance for ERPNext, targeting Vietnam e-invoice compliance (Decree 123/2020/NĐ-CP).
- **Key Features:**
  - E-Invoice & E-Waybill integration
  - Purchase reconciliation
  - GSTIN verification
  - Tax liability reporting
- **Frappe relevance:** Core Frappe/ERPNext app — compliance engine

#### `abn.platform.erp.press` — Frappe Press (Cloud Hosting)
- **Status:** Active | **Language:** Python/Frappe
- **Description:** Self-serve cloud hosting platform for Frappe stack. Based on Frappe Cloud (Frappe Press).
- **Key Features:**
  - Multi-tenant site management
  - Dashboard for apps, servers, sites, billing, backups, updates
  - Granular RBAC permissions
  - Automated billing with subscriptions and wallet credits
  - Marketplace for app listing
  - Agent for remote server management
- **Frappe relevance:** Core Frappe product — cloud hosting platform

#### `abn.platform.erp.t-van` — T-VAN E-Invoice Platform
- **Status:** Early | **Language:** Rust/Axum
- **Description:** Multi-tenant e-invoice issuing platform for Vietnam under Decree 123/2020/NĐ-CP.
- **Key Features:**
  - Public REST API for 3rd-party accounting software
  - Company registration with MST, GDT credentials, digital certificates
  - E-invoice lifecycle (submit, status, cancel, adjust, replace)
  - Digital signing with VNPT/Viettel/BKAV CA
  - Submission queue with automatic retry
  - Mandatory GDT reporting
- **Architecture Decision:** PostgREST-first for CRUD, Axum for business logic only
- **Frappe relevance:** Shares Vietnam Compliance Engine with Frappe-based erp.base

---

### 2.3 Commerce & Retail

#### `abn.platform.ecommerce` — ABN Retail Platform
- **Status:** Active | **Language:** Flutter/Dart + TS
- **Description:** Multi-application retail ecosystem — marketplace, shop chain, delivery, supplier operations.
- **Key Features:**
  - Ecommerce marketplace (ShopNoiKhu / Shein-clone)
  - Shop manager app, warehouse ops, driver logistics
  - Supplier portal
  - Next.js admin platform
  - PowerSync for local-first SQLite ↔ PostgreSQL sync
- **Stack:** Flutter (6 mobile apps), Next.js (admin), Rust/Axum, PostgreSQL, PowerSync
- **Frappe relevance:** None — on ABN Axum stack

#### `abn.platform.openfashion` — OpenFashion
- **Status:** Active | **Language:** TypeScript + Dart
- **Description:** Light-asset digital fashion network — multi-tenant SaaS for brand management, design, supply chain, commerce.
- **Key Features:**
  - Next.js admin + storefront web app
  - Flutter commerce mobile app
  - Multi-tenant SaaS architecture
  - Design collaboration and supply chain features
- **Frappe relevance:** None — on ABN Axum stack

#### `abn.platform.ads` — OpenAds
- **Status:** Early | **Language:** JavaScript
- **Description:** Unified multi-channel advertising network. Advertisers create campaigns, publishers monetize inventory across web, mobile, TV, digital signage.
- **Key Features:**
  - Multi-channel ad serving (web, mobile, smart TV, digital signage, kiosks)
  - Advertiser/Publisher/Agency/Admin/Screen Network consoles
  - Ad decision engine, creative management, tracking engine
  - Billing engine and publisher payout engine
  - Fraud detection, moderation, consent management
  - Flutter display player for Android tablets/boxes
- **Stack:** Next.js, Flutter, Rust/Axum, PostgreSQL, Redis
- **Frappe relevance:** None — standalone ads platform

---

### 2.4 Industry Verticals

#### `abn.platform.greenos` — GreenOS / AGRIN
- **Status:** Active (219 issues — most active repo) | **Language:** Dart/Flutter + TS
- **Description:** Export-readiness and trust operating system for agricultural supply chains. Capture field/procurement/processing/compliance/evidence/shipment records and project them safely to multiple audiences.
- **Key Features:**
  - Public traceability (guest passport, authenticity, warranty)
  - Workspace types: Farm, Agent Buyer, Factory, Trade, Agri Company, Verifier, Buyer
  - Farm module (lots, crop planning, activities, approvals, pest reports, sales)
  - Agri Company desks (field network, procurement, assurance, commercial ops, supply chain)
  - Traceability with QR codes, recalls, claims
  - Warranty management, customer CRM, SCM
  - Export readiness orchestration (certificates, dossiers, proof packs)
- **Stack:** Flutter (apps/mobile/agrin/), Rust/Axum backend, PostgreSQL
- **Frappe relevance:** Has a Frappe custom app (greenos_app) on the abnasia ERPNext site — serves API endpoints for agriculture data

#### `abn.platform.transportation` — ABN Transportation
- **Status:** Scaffold | **Language:** TypeScript + Dart
- **Description:** Transportation ecosystem — ride hailing, cargo trucking, shipping.
- **Key Features (planned):**
  - Ride hailing, cargo trucking, shipping
  - Company and retail user management
  - Driver and fleet management
  - Dispatch, payments, and tracking
- **Frappe relevance:** None — planning to use ABN Axum stack

#### `abn.platform.travel` — OpenTravel / GoGo
- **Status:** Active | **Language:** Dart + TS
- **Description:** Travel ecosystem — trip planning, booking, local rides, and platform administration.
- **Key Features:**
  - GoGo travel companion app (Flutter)
  - OpenTravel Platform Admin (Next.js)
  - Multi-tenant travel platform
- **Frappe relevance:** None — on ABN Axum stack

#### `abn.platform.openair` — OpenAir
- **Status:** Early | **Language:** TypeScript
- **Description:** Low Altitude Economy (LAE/Drone) Operational Platform.
- **Key Features (planned):**
  - Full-stack monorepo with Flutter mobile + TS backend
  - Drone operations management
- **Frappe relevance:** None — on ABN Axum stack

#### `abn.platform.openrepair` — OpenRepair
- **Status:** Scaffold | **Language:** TypeScript
- **Description:** Auto repair services platform.
- **Key Features:** One Next.js web app, standard monorepo layout
- **Frappe relevance:** None — on ABN Axum stack

#### `abn.platform.healthcare.careme` — CareMe
- **Status:** Scaffold (design-only) | **Language:** None yet
- **Description:** CarePlan platform — patients get personalized, clinician-reviewed care-plan options.
- **Key Features (from design docs):**
  - Symptom intake to structured care-plan options
  - Multi-option comparison (cost, timeline, travel, quality)
  - Clinician-reviewed care plan recommendations
  - Active care plan with goals, appointments, documents, budget
  - Cross-border treatment coordination
- **Frappe relevance:** None — planned for ABN Axum stack

#### `abn.platform.wisdomcloud` — Wisdom Cloud
- **Status:** Empty scaffold | **Language:** None yet
- **Description:** "Tận dụng trí lực của những người đã về hưu" — Harnessing retired people's collective wisdom.
- **Frappe relevance:** None — empty scaffold

#### `abn.platform.riskradar` — RiskRadar
- **Status:** Empty scaffold | **Language:** None yet
- **Description:** Detect anything that could harm you, your family, your friends and your company.
- **Frappe relevance:** None — empty scaffold

---

### 2.5 Media & Content

#### `abn.platform.abnasia.org` — ABN Website
- **Status:** Active | **Language:** TypeScript
- **Description:** Main website for abnasia.org. Next.js/Turborepo monorepo.
- **Key Features:**
  - Monorepo with docs, apps, backend, database, packages, integrations
  - Multi-platform: Flutter mobile, Next.js web, Godot games, admin panels
  - Cross-app integration and E2E tests
- **Frappe relevance:** None — website/app monorepo

#### `abn.platform.copyright` — ABN Copyright Platform
- **Status:** Active | **Language:** PLpgSQL + TS
- **Description:** Trusted infrastructure for legal use, reporting, enforcement, settlement of copyrighted materials.
- **Key Features:**
  - Work Registry and Rights Registry
  - License Requests, Approvals, Pricing, Contracts, Payments
  - Infringement Reporting, Evidence Collection, Takedown Notices
  - Settlement, Dispute Resolution, Retroactive Licensing
  - Creator Marketplace with storefronts, auctions, buy-now
  - Audio/Text/Image/Video matching intelligence
- **Stack:** Rust/Axum backend, PostgreSQL, PostgREST, Flutter + Next.js frontends
- **Frappe relevance:** None — on ABN Axum stack

---

### 2.6 Finance & Legal

#### `abn.platform.openfinance` — OpenFinance / IDB Corporate Banking
- **Status:** Active | **Language:** Dart/Flutter
- **Description:** Corporate banking app migration from legacy IDB to Flutter with feature-first architecture.
- **Key Features:**
  - 14 feature modules (data/domain/presentation layers)
  - Flutter Riverpod state management, go_router navigation
  - Mock and live API adapter modes
  - Multi-flavor build (dev/uat/prod)
  - OneID authentication
- **Frappe relevance:** None — mobile banking on ABN Axum stack

#### `abn.platform.openinvest` — OpenInvest
- **Status:** Empty scaffold | **Language:** None yet
- **Description:** Investment Opportunities Network.
- **Frappe relevance:** None — empty scaffold

#### `abn.platform.openprocurement` — Open Procurement
- **Status:** Scaffold | **Language:** None yet
- **Description:** Procurement platform adapted from dauthau.asia.
- **Frappe relevance:** None — empty scaffold on ABN Axum stack

---

### 2.7 Translation

#### `abn.platform.catlingo` — CatLingo Document Translation
- **Status:** Active | **Language:** Python
- **Description:** LLM-powered document translation service. Translate Office documents preserving structure.
- **Key Features:**
  - LibreOffice headless integration for Office documents
  - Native translation for txt/html/md
  - Placeholder protection for variables, URLs, HTML tags
  - Batch translation with SQLite caching
  - Bilingual render mode
  - Multi-provider LLM support
- **Frappe relevance:** None — standalone Python service

#### `abn.platform.catlingo.box` — CatLingo Box
- **Status:** Active | **Language:** Python
- **Description:** Email-driven document translation pipeline.
- **Key Features:**
  - IMAP poller scans inbox for translation requests
  - SMTP delivery of translated documents
  - Axum + PostgreSQL control plane
  - Billing/credits system
- **Frappe relevance:** None — standalone email pipeline

---

### 2.8 Horizontal Platforms

#### `abn.platform.base` — ABN Workspace Platform Base
- **Status:** Active | **Language:** TypeScript
- **Description:** Notion-inspired multi-tenant workspace platform. Block-based page composition with 49 block types, 7 templates.
- **Key Features:**
  - 7 workspace types (company, department, team, project, community, social group, chapter)
  - Block-based pages with 49 block types
  - Public sites with custom domain binding
  - Installable workspace apps with inheritance
  - Role-based access (Owner, Admin, Editor, Viewer, Super Admin)
  - OneID auth (Google, Magic Mail, Dev fallbacks)
- **Stack:** Next.js 16, React 19, Tailwind CSS 3, Prisma 6, PostgreSQL, NextAuth v5
- **Frappe relevance:** None — custom Next.js platform

#### `abn.platform.bos` — Business Operating System
- **Status:** Early | **Language:** TypeScript
- **URL:** bos.abnasia.org
- **Description:** Business Operating System — structured around 43 products with a capability tree.
- **Key Features:**
  - 43 products with capability tree navigation
  - Leaf-node forms/actions (21,510+ nodes)
  - Full-stack monorepo
- **Frappe relevance:** None — on ABN Axum stack

---

## 3. Product Specs by Repo

### Quick Reference Table

| Repo | Product | Status | Lang | #Issues | Frappe? | Backend |
|---|---|---|---|---|---|---|
| abnasia.org | ABN Website | Active | TS | 43 | No | Axum |
| ads | OpenAds | Early | JS | 5 | No | Axum |
| base | Workspace Base | Active | TS | 26 | No | Next.js/Prisma |
| bos | Business OS | Early | TS | 3 | No | Axum |
| catlingo | CatLingo Translate | Active | Python | 5 | No | Python |
| catlingo.box | CatLingo Box | Active | Python | 22 | No | Python |
| computefleet | ComputeFleet | Early | Shell | 0 | No | Nomad |
| copyright | Copyright Platform | Active | PLpgSQL | 6 | No | Axum |
| ecommerce | Retail Platform | Active | Dart | 101 | No | Axum |
| erp.base | ERPNext Base | Active | Python | 12 | **YES** | Frappe |
| erp.base.vietnam-compliance | VN Compliance | Scaffold | Python | 3 | **YES** | Frappe |
| erp.press | Frappe Press | Active | Python | 0 | **YES** | Frappe |
| erp.t-van | T-VAN E-Invoice | Early | Rust | 2 | Partial | Axum |
| greenos | GreenOS/AGRIN | Active | Dart | 219 | **Partial** | Axum + Frappe |
| healthcare.careme | CareMe | Scaffold | None | 6 | No | Axum (planned) |
| openair | OpenAir | Early | TS | 3 | No | Axum |
| openfashion | OpenFashion | Active | TS | 8 | No | Axum |
| openfinance | IDB Banking | Active | Dart | 12 | No | Axum |
| openinvest | OpenInvest | Empty | None | 5 | No | Axum (planned) |
| openprocurement | Open Procurement | Scaffold | TS | 4 | No | Axum |
| openrepair | OpenRepair | Scaffold | TS | 1 | No | Axum |
| riskradar | RiskRadar | Empty | None | 4 | No | Axum (planned) |
| runtime | ABNRuntime | Active | Rust | 13 | No | Rust |
| supabase | Supabase Fork | Active | TS | 0 | No | Mixed |
| transportation | Transportation | Scaffold | TS | 6 | No | Axum |
| travel | GoGo Travel | Active | Dart | 24 | No | Axum |
| wisdomcloud | Wisdom Cloud | Empty | None | 2 | No | Axum (planned) |

---

## 4. Frappe Implementation Roadmap

Based on the inventory above, here is the Frappe-relevant implementation plan:

### Phase 1: Existing Frappe Deployments (already on Frappe)

| Priority | Repo | Action |
|---|---|---|
| P0 | `erp.base` | Maintain multi-site ERPNext. Extend custom apps (GreenOS API, CEOReports) |
| P0 | `erp.base.vietnam-compliance` | Convert from India Compliance fork to true Vietnam e-invoice engine (Nghị định 123) |
| P0 | `erp.press` | Deploy Frappe Press for self-hosted cloud — manage servers, sites, billing |
| P1 | `erp.t-van` | Integrate Vietnam Compliance Engine (Frappe) as XML generator for the T-VAN Axum API |

### Phase 2: Frappe-Candidate Platforms (Axum-based, suitable for Frappe migration)

| Priority | Repo | Rationale |
|---|---|---|
| P1 | `greenos` | Already has a Frappe custom app (greenos_app). Migrate more backend logic to Frappe |
| P1 | `copyright` | Rights/Licensing/Contracts/Creator Marketplace maps naturally to Frappe DocTypes + workflows |
| P1 | `transportation` | Fleet/Driver/Dispatch/Payments map to Frappe ERPNext logistics modules |
| P2 | `openfinance` | Corporate banking / Lending cases — could use Frappe ERPNext Finance module as base |
| P2 | `healthcare.careme` | Care plans / Patient management — Frappe Healthcare module exists |
| P2 | `openprocurement` | Procurement workflow — ERPNext Buying module ready-made |
| P2 | `openrepair` | Repair/service management — could use ERPNext Maintenance/Service modules |
| P2 | `travel` | Travel bookings / tours — Frappe Events/Bookings possible |

### Phase 3: Greenfield Frappe Apps

| Priority | App | Description |
|---|---|---|
| P3 | `openinvest` | Investment deal flow / CRM — Frappe CRM + custom Deal DocType |
| P3 | `riskradar` | Risk/threat monitoring — custom Frappe app with incident tracking |
| P3 | `wisdomcloud` | Retired experts marketplace — Frappe Marketplace + Community modules |
| P3 | `openair` | Drone/LAE operations — specialized Frappe app with GIS/spatial data |

### Phase 4: Remains on Axum (no Frappe migration)

| Repo | Reason |
|---|---|
| `runtime` | Rust/WASM runtime — entirely different paradigm |
| `computefleet` | Infrastructure-only (Nomad) |
| `supabase` | Upstream fork — must track Supabase |
| `base` | Next.js/Prisma — real-time collaboration platform |
| `catlingo` / `catlingo.box` | Standalone Python LLM translation |
| `ads` | Real-time ad serving / bidding |
| `ecommerce` | Heavy offline-first mobile (PowerSync) |
| `openfashion` | Real-time fashion network |
| `abnasia.org` | Main website — CMS/static |

---

*End of document. Generated from live repo inspection + GitHub issue data.*
