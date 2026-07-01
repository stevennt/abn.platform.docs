# ABN Real Estate (Đất Cát) — Frappe-Native Product Specification

> **Target Backend:** Frappe CRM (rebranded as Real Estate CRM) + ERPNext
> **Positioning:** Vietnam-focused real estate operating system — one shared asset and transaction model expressed through six role-specific workspaces

---

## 1. Product Identity

**ABN Real Estate (Đất Cát)** — a Vietnam-focused real estate operating system built on Frappe. The CRM module (forked from [frappe/crm](https://github.com/frappe/crm)) powers lead-to-deal brokerage workflows. ERPNext powers the back-office: property assets, finance, maintenance, contracts, and project management. Six canonical role workspaces: **Owner, Resident, Broker, Operator, Investor, Developer**.

**Positioning:** *"One property, one transaction history, many role-specific workspaces."*

## 2. Problem Statement

- Vietnamese real estate market lacks an integrated platform covering the full property lifecycle
- Fragmented tools: separate apps for listing, brokerage, property management, finance, and investor relations
- No unified record spans owner intent → broker pipeline → operator management → investor diligence
- Vietnam-specific needs not served by global proptech: private broker pools, informal agreements, VND/address structure, Zalo integration, sổ đỏ/sổ hồng documents

## 3. Target Users

| Role | Vietnamese | Core Job | Frappe Mapping |
|---|---|---|---|
| **Owner** | Chủ nhà | Sell, rent direct, or outsource. Needs oversight, approvals, finance pulse | CRM `Customer` + Portal |
| **Resident** | Cư dân | Discover, inspect, apply, sign, pay, request service | CRM `Contact` + `Customer` |
| **Broker** | Môi giới | Source owners, manage pool, qualify leads, negotiate, close, collect commission | CRM `Lead` → `Opportunity` → `Deal` |
| **Operator** | Quản lý vận hành | Leasing, rent roll, maintenance, resident management, owner reporting | ERPNext `Property Manager` |
| **Investor** | Nhà đầu tư | Scan opportunities, track portfolio, monitor releases, assess risk | ERPNext `Project` + custom |
| **Developer** | Chủ đầu tư | Project workspace, release inventory, permits, progress publishing | ERPNext `Project` + `Task` |

## 4. Platform Architecture

### 4.1 Frappe Module Stack

```
abn_realestate (custom Frappe app)
│
├── crm (fork: rebranded as realestate_crm)
│   ├── Lead          → Broker lead capture, owner sourcing
│   ├── Opportunity   → Deal pipeline, viewing-to-negotiation
│   ├── Deal          → Closed sale/lease with commission split
│   ├── Customer      → Owner, Resident, Buyer profiles
│   ├── Contact       → Household members, co-buyers, tenants
│   ├── Communication → Zalo/SMS/email integration
│   └── CRM Settings  → Role-based assignment rules
│
├── erpnext (back-office)
│   ├── Asset         → Property units, buildings, land parcels
│   ├── Project       → Developer milestones, investor portfolios
│   ├── Task          → Maintenance work orders, compliance items
│   ├── Contract      → Lease agreements, listing agreements
│   ├── Maintenance Schedule / Visit
│   ├── Sales Invoice → Rent collection, commission payouts
│   ├── Payment Entry → Deposits, fees, settlements
│   ├── Journal Entry → Owner payouts, investor distributions
│   └── Buying        → Vendor procurement (maintenance supplies)
│
├── custom modules
│   ├── Property management   → Listing, viewing, offer, tenancy
│   ├── Building management   → Portfolio dashboard, vendors, events
│   └── Vietnam compliance    → Sổ đỏ, sổ hồng, permits, foreign quota
│
└── portals
    ├── Owner Portal     → Strategy board, finance pulse, approvals
    ├── Resident Portal  → Rent pay, service requests, documents
    ├── Broker Portal    → Pipeline, commissions, private pool
    ├── Operator Portal  → Leasing queue, rent roll, maintenance
    └── Public Portal    → Property marketplace, search, agent contact
```

### 4.2 Six-Role Operating Model

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

### 4.3 Data Model — Key DocTypes

| DocType | Source | Purpose |
|---|---|---|
| **Property** | Custom | Core asset: address, legal docs, owner, type, units |
| **Property Unit** | Custom | Individual unit within a property (apartment, floor, lot) |
| **Property Listing** | Custom | For-sale/for-rent listing with visibility (private/pool/public) |
| **Viewing Request** | Custom | Tour scheduling, access rules, feedback |
| **Offer** | Custom | Buyer/tenant offer with negotiation stages |
| **Deal** | CRM | Closed sale, lease, or rental agreement |
| **Commission Split** | Custom | Co-broker splits, tiers, payout tracking |
| **Lead** | CRM | Owner sourcing, buyer inquiry, tenant lead |
| **Opportunity** | CRM | Deal pipeline stage tracking |
| **Customer** | CRM | Owner, resident, buyer, investor profiles |
| **Contact** | CRM | Household members, co-buyers, emergency contacts |
| **Asset** | ERPNext | Property as a financial asset |
| **Project** | ERPNext | Developer projects, investor portfolios |
| **Task** | ERPNext | Maintenance work orders, permit tasks |
| **Contract** | ERPNext | Lease agreements, listing agreements |
| **Maintenance Schedule** | ERPNext | Scheduled maintenance |
| **Sales Invoice** | ERPNext | Rent collection, commission invoicing |
| **Payment Entry** | ERPNext | Deposits, rent payments, payouts |
| **Building** | Custom | Building portfolio with vendor/event management |
| **Vendor** | ERPNext | Maintenance contractors, service providers |

## 5. Key Feature Modules

### 5.1 Owner Module (CRM `Customer` + Portal + ERPNext `Asset`)
- **Strategy selection:** Sell, Direct Rent, or Outsource per property — stored as Property DocType workflow state
- **Delegated oversight:** Approvals queue via Frappe workflow assignment
- **Finance pulse:** ERPNext dashboard showing rent collection, expenses, payouts
- **Compliance inbox:** Document review requests, regulatory deadline alerts
- **Report packs:** Scheduled PDF reports via Frappe Report Builder

### 5.2 Resident Module (CRM `Contact` + `Customer` + Portal)
- **Discovery:** Public marketplace via Website + custom Property Listing Web Template
- **Inspections:** Viewing requests through CRM Communication + custom Viewing DocType
- **Payments:** Rent collection via ERPNext Sales Invoice + Payment Entry
- **Service requests:** Maintenance dispatch through ERPNext Maintenance Visit
- **Household management:** CRM Contact grouping for household members

### 5.3 Broker Module (CRM: `Lead` → `Opportunity` → `Deal`)
- **Owner sourcing:** Lead capture with property details
- **Private pool:** Listing visibility toggle (private/shared/public) on Property Listing
- **Lead qualification:** CRM Opportunity with custom scoring fields (budget, urgency, legal fit)
- **Viewing coordination:** Viewing Request DocType with calendar sync
- **Negotiation:** Offer DocType with multi-stage workflow (offer → counter → accepted → deposit)
- **Commission tracking:** Commission Split DocType linked to Deal, with tier calculation
- **Co-brokering:** Deal-level co-broker assignments with split percentages

### 5.4 Operator Module (ERPNext + Custom)
- **Leasing queue:** Workflow on Deal (lease type) with application review stages
- **Rent roll:** Report showing occupancy, due dates, overdue amounts
- **Maintenance dispatch:** Maintenance Visit + Task with vendor assignment and SLA
- **Resident roster:** Customer/Contact with property unit assignment
- **Owner reporting:** Scheduled report generation via Frappe Email Alert
- **Exception board:** Dashboard showing delinquency, SLA breaches, escalations

### 5.5 Investor Module (ERPNext `Project` + Custom)
- **Opportunity scanning:** Dashboard with market data, deal comparisons
- **Portfolio tracking:** Project with custom fields for holdings, performance, risk flags
- **Developer releases:** Project milestone completion with Task breakdown
- **Diligence blockers:** Custom DocType for document gaps, compliance review items

### 5.6 Developer Module (ERPNext `Project` + `Task`)
- **Project workspace:** Project with milestones, Gantt chart, inventory allocation
- **Broker updates:** Structured communications via CRM Communication + Email Campaign
- **Permit tracking:** Tasks with compliance document uploads and deadlines
- **Progress publishing:** Website + Email Alert for public project timeline
- **Post-sale handoff:** Workflow transitioning project units to Owner/Operator

### 5.7 Public Marketplace (Frappe Website)
- Property search with filters — custom Web Template + JS
- Featured listings, map-based discovery (Leaflet integration)
- Saved properties, watchlists, alerts — via Frappe Notification
- Agent contact and inquiry — CRM Lead creation from public form
- Property details with trust indicators (legal status, verification badges)

### 5.8 Building Management Module (Custom)
- **Portfolio dashboard:** Multi-building metrics with sortable comparisons
- **Vendor management:** ERPNext Vendor with performance tracking, Work Order integration
- **Events calendar:** Event DocType with list/calendar views, RSVP, recurring support

### 5.9 Cross-Cutting
- **Finance:** ERPNext Sales Invoice, Payment Entry, Journal Entry across all roles
- **Contracts:** Frappe Contract DocType with templates and e-sign (via third-party API)
- **Maintenance:** ERPNext Maintenance Schedule + Visit + Task
- **Documents:** Custom Document DocType with Vietnam taxonomy (sổ đỏ, sổ hồng, permits)
- **Notifications:** Frappe Email Alert + custom Zalo/SMS integration
- **Analytics:** Frappe Report Builder + Dashboard per role

## 6. Vietnam-Native Features

| Feature | Implementation |
|---|---|
| **Currency** | VND with local shorthand (triệu, tỷ) in formatters |
| **Address** | Province/district/ward/project/block/unit custom fields on Property |
| **Legal docs** | Custom Document Type with sổ đỏ, sổ hồng, permits, notarization, foreign quota checks |
| **Brokerage** | Private pool visibility, non-exclusive listings, co-broker splits, owner confirmation workflow |
| **Communication** | Zalo API integration, SMS gateway, phone as default communication log |
| **Payments** | Bank QR codes, local wallet payment gateway integration |
| **Language** | Vietnamese as primary, English as secondary — Frappe i18n |

## 7. CRM Module (Forked from frappe/crm — Rebranded as Real Estate CRM)

The CRM module is the **Broker's command center**, rebranded from frappe/crm with real estate-specific customizations:

### Core CRM DocTypes (inherited)
| DocType | Real Estate Usage |
|---|---|
| **Lead** | Owner sourcing leads, buyer inquiries, tenant inquiries |
| **Opportunity** | Deal pipeline: active listing → viewing → offer → negotiation |
| **Deal** | Closed sale, signed lease, rental agreement |
| **Customer** | Property owners, residents, buyers, investors (typed by role) |
| **Contact** | Household members, co-buyers, tenant occupants |
| **Communication** | Zalo, SMS, email, phone call history |
| **Email Template** | Automated broker/owner/resident communications |
| **CRM Settings** | Assignment rules, pipeline stages, role-based visibility |

### Real Estate Extensions
- **Lead → Property** link — attach property of interest to a lead
- **Opportunity stages:** Viewing Scheduled → Offer Received → Negotiating → Legal Review → Deposit Paid
- **Deal types:** Sale, Long-term Lease, Short-term Rental
- **Commission split** on Deal — multi-broker with percentage/amount tiers
- **Private pool** visibility on linked listings

## 8. ERPNext Back-Office Integration

The following ERPNext modules serve each role:

| ERPNext Module | Used By | Purpose |
|---|---|---|
| **Asset** | Owner, Developer | Property as financial asset with depreciation |
| **Selling** | Broker, Operator | Sales Invoice for commission, rent |
| **Buying** | Operator | Vendor purchase orders for maintenance |
| **Project** | Developer, Investor | Project management, milestone tracking |
| **Task** | Operator, Developer | Maintenance tasks, permit tasks |
| **Contract** | Owner, Broker, Resident | Lease agreements, listing agreements |
| **CRM** | Broker | Customer, Contact, Lead, Opportunity, Deal |
| **Accounts** | All | Payment Entry, Journal Entry, GL entries |
| **HR** | Operator | Employee management for building staff |
| **Maintenance** | Operator | Schedule, Visit, Warranty claims |

## 9. Suggested Frappe App Structure

```
apps/
├── frappe (framework)
├── erpnext
├── realestate_crm (forked from frappe/crm)
└── abn_realestate (custom)
    ├── abn_realestate/
    │   ├── doctypes/
    │   │   ├── property/
    │   │   ├── property_unit/
    │   │   ├── property_listing/
    │   │   ├── viewing_request/
    │   │   ├── offer/
    │   │   ├── commission_split/
    │   │   ├── building/
    │   │   ├── vietnam_document/  (sổ đỏ, sổ hồng, permits)
    │   │   ├── building_event/
    │   │   └── building_vendor/
    │   ├── workspaces/  (role-specific desks)
    │   │   ├── owner_workspace/
    │   │   ├── resident_workspace/
    │   │   ├── broker_workspace/
    │   │   ├── operator_workspace/
    │   │   ├── investor_workspace/
    │   │   └── developer_workspace/
    │   ├── reports/
    │   │   ├── rent_roll/
    │   │   ├── owner_pulse/
    │   │   ├── broker_commission/
    │   │   └── portfolio_summary/
    │   ├── notification/ (Zalo, SMS, Email)
    │   └── www/  (public marketplace web pages)
    └── abn_realestate/ hooks, config
```

## 10. Implementation Roadmap

### Phase 1: Foundation (Frappe + CRM)
- Set up Frappe bench with erpnext + realestate_crm
- Create `abn_realestate` app skeleton
- Implement Property, Property Unit, Property Listing DocTypes
- Implement Building, Building Event, Building Vendor DocTypes
- Set up Owner Portal with strategy board
- Set up Public Marketplace web pages

### Phase 2: Broker Workflows (CRM)
- Rebrand CRM Desk → "BROKER"
- Customize Lead → Opportunity → Deal for real estate
- Add Viewing Request, Offer, Commission Split DocTypes
- Implement private pool visibility on listings
- Set up Broker Portal with pipeline dashboard

### Phase 3: Operations (ERPNext)
- Wire ERPNext Maintenance, Project, Asset modules
- Implement rent roll, lease agreement workflows
- Set up Operator Portal with leasing queue
- Set up Resident Portal with rent pay + service requests

### Phase 4: Advanced (Investor + Developer)
- Customize ERPNext Project for developer releases
- Implement investor portfolio tracking dashboard
- Set up Developer Portal with milestone/progress publishing
- Add Vietnam compliance docs, foreign quota checks

### Phase 5: Integration & Polish
- Zalo integration for communications
- Vietnam payment gateways (bank QR, Momo, VNPay)
- e-sign integration for contracts
- Notifications: push, email, SMS, Zalo
- Dashboards and reports per role

## 11. DocType Listing (Complete)

### Custom DocTypes (`abn_realestate`)
- `Property` — name, type, address (province/district/ward), legal_status, owner, geo_location, total_units, area
- `Property Unit` — parent property, unit_number, floor, area, bedrooms, status (vacant/occupied/sold)
- `Property Listing` — property/unit, listing_type (sale/rent), price, visibility (private/shared/public), status (draft/active/sold/leased)
- `Viewing Request` — property, requester, scheduled_at, status, feedback, access_notes
- `Offer` — property/listing, buyer/tenant, amount, terms, status (submitted/countered/accepted/rejected)
- `Commission Split` — deal, broker(s), percentage, amount, status (pending/paid)
- `Building` — name, address, number_of_units, management_company, amenities
- `Building Event` — building, title, date, type, rsvp
- `Building Vendor` — building, vendor (link to ERPNext Vendor), service_type, contract_end
- `Vietnam Document` — property, document_type (sổ đỏ/sổ hồng/GCN/GPXD), document_number, issue_date, expiry_date, file

### CRM DocTypes (realestate_crm — customized)
- `Lead` — +property_link, +source_type (owner_sourcing/buyer_inquiry/tenant_lead)
- `Opportunity` — +property_link, +listing_link, pipeline_stages (custom stages)
- `Deal` — +deal_type (sale/lease/rental), +commission_total, +co_brokers table
- `Customer` — role tags (Owner/Resident/Investor), +VND_credit_limit
- `Contact` — +household_group for resident families

### ERPNext DocTypes (used directly)
- `Asset` — Property as depreciable asset
- `Project` — Developer project, investor portfolio
- `Task` — Maintenance work, permit tasks, project tasks
- `Contract` — Lease agreement, listing agreement
- `Maintenance Schedule` / `Maintenance Visit`
- `Sales Invoice` — Rent, commission
- `Payment Entry` — Deposits, rent payments
- `Journal Entry` — Owner payouts, settlements
- `Vendor` — Contractors, suppliers
