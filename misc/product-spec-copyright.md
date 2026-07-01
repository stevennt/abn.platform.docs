# ABN Copyright Platform — Product Specification

> **Repo:** `abn.platform.copyright`
> **Status:** Active | **Language:** PLpgSQL / TypeScript
> **Issues:** 6 | **GitHub:** https://github.com/stevennt/abn.platform.copyright

---

## 1. Product Identity

**ABN Copyright Platform** — a trusted infrastructure for legal use, reporting, enforcement, and settlement of copyrighted materials. A Copyright Licensing + Copyright Protection + Copyright Dispute Resolution + Creator Marketplace Platform.

**Positioning:** *"We help creators monetize their rights, help users fix mistakes, and help the market use copyrighted materials legally."*

## 2. Problem Statement

- Creators lack a trusted platform to register, track, and monetize their copyrighted works
- Users often use copyrighted materials without permission (events, YouTube, ads, publications)
- No unified infrastructure exists for: permission-before-use + infringement resolution
- Creator marketplace needs rights verification before allowing commercial listings

## 3. Target Users

- **Creators:** Artists, singers, painters, writers, photographers, labels, publishers, agents, estates
- **Licensees:** Event organizers, content creators, businesses, publishers, advertisers
- **Rights Owners:** Composers, authors, publishers, labels with verified ownership
- **Marketplace Participants:** Buyers, bidders, license-seekers
- **Platform Admins:** Moderation, compliance, dispute resolution teams
- **Legal Teams:** Handling disputes, takedowns, settlements

## 4. Platform Architecture

### 4.1 Five-Side Structure

```
Copyright Platform
├── Licensing Side
│   ├── Work Registry — Catalog of copyrighted works (songs, texts, images, videos, artwork)
│   ├── Rights Registry — Ownership records, rights holders, agent authorizations
│   ├── License Requests — Users request permission to use a work
│   ├── Approvals — Rights owners review and approve/deny requests
│   ├── Pricing — License fee determination, royalty calculations
│   ├── Contracts — Legal agreements, terms, and conditions
│   └── Payments — Fee collection, royalty distribution, settlements
│
├── Protection Side
│   ├── Infringement Reporting — Rights owners & public report unauthorized use
│   ├── Evidence Collection — Upload screenshots, links, recordings, documentation
│   ├── License Scope Checking — Check if a valid license already exists
│   ├── Takedown Notices — Generation and tracking of takedown requests
│   ├── Settlement — Negotiated resolution between parties
│   ├── Retroactive Licensing — Converting unauthorized use into paid license
│   └── Dispute Resolution — Counter-notices, admin review, case escalation
│
├── Trust Side
│   ├── Identity Verification — KYC, identity proofing for ownership claims
│   ├── Rights Verification — Proving ownership or authorized representation
│   ├── Agent Authorization — Artist grants authority to manager/label/publisher
│   ├── Audit Logs — Immutable record of all platform actions
│   └── Compliance Review — Admin review of cases, license terms
│
├── Intelligence Side
│   ├── Audio Matching — Fingerprint/detect copyrighted audio
│   ├── Text Matching — Detect copied lyrics, articles, books
│   ├── Image Matching — Detect unauthorized use of photographs/artwork
│   ├── Video Matching — Detect unauthorized use of video clips
│   ├── Risk Scoring — Assess likelihood of infringement, case severity
│   └── Pricing Suggestions — AI-assisted license fee recommendations
│
└── Marketplace & Publishing Side
    ├── Creator Profiles — Public storefronts for verified creators
    ├── Work Publishing — Draft → Review → Published → Archived workflow
    ├── Marketplace Listings — Fixed-price, buy-now, auction, make-offer, license-only
    ├── Bidding — Opening price, reserve price, bid step, bid window, anti-sniping
    ├── Buy Now — Immediate purchase that closes eligible listings
    ├── Offers & Counteroffers — Outside auction flow
    ├── Orders — Linked to buyer, listing, payment, license, fulfillment
    ├── Fulfillment — Digital download, physical delivery, usage license, transfer
    └── Moderation — Rights review, listing suspension, dispute link, abuse prevention
```

### 4.2 Tech Stack

| Layer | Technology |
|---|---|
| API Server | Rust/Axum (modules in `abn.apiserver.rust.axum`) |
| API Layer | PostgREST (direct DB to REST for simple CRUD) |
| Database | PostgreSQL 16 via PgBouncer (shared `abnasia_db`) |
| Auth | OneID / JWT via existing ABN auth middleware |
| Caching | Redis (existing ABN Redis) |
| Frontend | Next.js (web) + Flutter (mobile) |
| CI/CD | GitHub Actions |

### 4.3 System Topology

```
Client Applications (Web / Mobile / API)
        │
  API Gateway / Auth (Axum / PostgREST)
        │
  ┌─────┼─────┬─────┬─────┐
  │     │     │     │     │
Licens Protect Trust Intell Common
        │
  PostgreSQL (abnasia_db)
```

### 4.4 Module Organization (Axum)

```
src/modules/copyright/
├── licensing/   — works.rs, rights.rs, requests.rs, quotes.rs
├── protection/  — cases.rs (infringement + admin + resolution)
├── trust/       — users.rs, organizations.rs, audit.rs
├── marketplace/ — profiles.rs, listings.rs, bids.rs, orders.rs
├── models/      — Shared DTOs
├── services/    — Business logic (DB queries)
└── routes.rs    — Single pub fn copyright_routes() -> Router<AppState>
```

Mounted at `/api/v1/copyright/` in the main Axum server.

### 4.5 Database Schemas

Namespaced within shared `abnasia_db`:
- `catalog.works`
- `rights.rights_claims`, `rights.ownership_splits`, `rights.agent_authorizations`
- `licensing.license_requests`, `licensing.quotes`, `licensing.certificates`
- `protection.infringement_cases`, `protection.evidence`
- `finance.payments`, `finance.invoices`, `finance.royalty_splits`, `finance.payouts`
- `marketplace.creator_profiles`, `marketplace.collections`, `marketplace.listings`, `marketplace.bids`, `marketplace.orders`
- `audit.audit_log`
- `identity.verification`

## 5. Key Features

### 5.1 Licensing
- Work registration and rights claims with ownership splits
- License request → quote → approval → contract → payment flow
- Royalty calculation and automated payout distribution
- Retroactive licensing for unauthorized use

### 5.2 Protection
- Infringement case creation (rights owner or public)
- Evidence upload and license scope checking
- Resolution options: warning, retroactive license, settlement, takedown, dismiss
- Counter-notice and admin escalation

### 5.3 Marketplace
- Creator storefronts with verified rights claims
- Multiple listing types: fixed price, auction, buy-now, offer, license-only
- Bidding engine with reserve price, bid steps, and anti-sniping
- Order fulfillment: digital download, physical delivery, license transfer

## 6. Application Surfaces

| App | Type | Path |
|---|---|---|
| copyright | Flutter mobile | `apps/mobile/copyright/` |
| main-web | Next.js web | `apps/web/main-web/` |

## 7. Current Status & Issues

| # | Title | State |
|---|---|---|
| 6 | Add usecase: content id | OPEN |
| 5 | Media companies manage contracts, licences | OPEN |
| 4 | Goals-Pack: copyright-mvp status | OPEN |
| 3 | Add creator marketplace and publishing | OPEN |
| 2 | Add usecase: online ticket / event booking | OPEN |
| 1 | Requirements (original spec) | OPEN |

**Development milestones:**
- MVP completed: 60/60 goals DONE (Licensing, Protection, Finance, Intelligence, Web, Mobile)
- Marketplace expansion: 9 goals DONE (Profiles, Publishing, Listings, Bidding, Buy-Now, Offers, Fulfillment, Moderation)
- Ticketing/Events: 17 goals DONE
- 27 API route groups deployed, 14 DB migrations across 7 schemas

## 8. Frappe Implementation Notes

- **Current backend** is Rust/Axum — NOT Frappe
- **Frappe migration candidate** because Rights/Licensing/Contracts/Creator Marketplace maps naturally to Frappe DocTypes + workflows
- Suggested DocTypes: `Work`, `RightsClaim`, `LicenseRequest`, `LicenseContract`, `InfringementCase`, `Evidence`, `CreatorProfile`, `MarketplaceListing`, `Bid`, `Order`
- Could leverage ERPNext's existing `Sales Invoice`, `Payment Entry`, and `Customer` doctypes
- ABN OneID auth should be adapted for Frappe's User authentication

## 9. Infrastructure Dependencies

| Dependency | Repository |
|---|---|
| API Server | `abn.apiserver.rust.axum` |
| Database | `abn.postgresql` |
| Auth | OneID (via Axum API server) |
| Payments | OnePay (via Axum API server) |
| Workflows | OneWorkflow (via Axum API server) |
| Caching | Redis (existing ABN Redis) |
