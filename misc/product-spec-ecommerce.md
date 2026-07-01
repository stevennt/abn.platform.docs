# ABN Retail Platform — Product Specification

> **Repo:** `abn.platform.ecommerce`
> **Status:** Active | **Language:** Dart (Flutter) + TypeScript
> **Issues:** 101 | **GitHub:** https://github.com/stevennt/abn.platform.ecommerce

---

## 1. Product Identity

**ABN Retail Platform** — multi-application platform powering the ABN retail ecosystem: ecommerce marketplace (ShopNoiKhu / Shein-clone), shop chain management (OpenRetail), delivery logistics, and supplier operations.

## 2. Problem Statement

- Retail ecosystem fragmented across multiple unconnected apps
- Marketplace, shop management, warehouse ops, driver logistics, delivery, and supplier functions need a unified platform
- Need for local-first sync (PowerSync) for offline-capable retail operations
- Migrating from legacy Flutter standalone apps to Medusa backend architecture

## 3. Target Users

| Role | App | Needs |
|---|---|---|
| **Shoppers** | Ecommerce app | Browse, search, purchase, track orders |
| **Shop Managers** | Shop Manager app | Manage inventory, orders, staff, promotions |
| **Warehouse Ops** | Warehouse app | Pick, pack, stock management |
| **Delivery Drivers** | Driver app | Receive delivery jobs, navigate, confirm delivery |
| **Delivery Personnel** | Delivery app | Last-mile delivery management |
| **Suppliers** | Supplier portal | Product listings, order fulfillment, payments |
| **Admins** | Admin web | Platform oversight, analytics, configuration |

## 4. Platform Architecture

### 4.1 Application Inventory

| App | Slug | Type | Framework | Status |
|---|---|---|---|---|
| Ecommerce Marketplace | ecommerce | Mobile | Flutter 3.44 | **Active** |
| Shop Manager | shop-manager | Mobile | Flutter 3.44 | Scaffold |
| Warehouse | warehouse | Mobile | Flutter 3.44 | Scaffold |
| Driver | driver | Mobile | Flutter 3.44 | Scaffold |
| Delivery | delivery | Mobile | Flutter 3.44 | Scaffold |
| Supplier | supplier | Mobile | Flutter 3.44 | Scaffold |
| Admin Platform | admin | Web | Next.js 16.2.6 | **Active** |

### 4.2 Tech Stack

| Layer | Technology |
|---|---|
| Mobile Apps | Flutter 3.44 (6 Flutter apps) |
| Web Admin | Next.js 16 |
| API Server | Rust/Axum (existing `abn.apiserver.rust.axum`) |
| Database | PostgreSQL (existing `abn.postgresql`) |
| Auth | OneID / internal identity system |
| Sync | **PowerSync** (local-first SQLite ↔ PostgreSQL) |
| Backend (future) | Medusa (being evaluated / set up) |

### 4.3 Repository Structure

```
abn.platform.ecommerce/
├── apps/
│   ├── mobile/
│   │   ├── ecommerce/       ← ShopNoiKhu / Shein-clone marketplace
│   │   ├── shop-manager/    ← Shop chain management
│   │   ├── warehouse/       ← Warehouse operations
│   │   ├── driver/          ← Driver logistics
│   │   ├── delivery/        ← Delivery personnel
│   │   └── supplier/        ← Supplier portal
│   └── web/
│       └── admin/           ← Next.js admin & management platform
├── docs/
│   ├── architecture/
│   ├── platform-migration/
│   ├── goals/
│   ├── goals-packs/
│   └── screens/
├── backend/           ← Orientation (code in abn.apiserver.rust.axum)
└── database/          ← Orientation (schema in abn.postgresql)
```

## 5. Key Features

### 5.1 Ecommerce Marketplace (ShopNoiKhu)
- Product browsing, search, filtering
- Shopping cart and checkout
- Order tracking
- User accounts and profiles
- Voucher/promotion discovery ("Tìm voucher quanh đây")
- Revenue structure configuration ("Cơ cấu doanh thu")
- Auto topup use case

### 5.2 Shop Manager (OpenRetail)
- Small shop chain management
- Inventory management
- Order processing
- Staff management
- Sales analytics
- Thanh lý (liquidation) and từ thiện (charity) features

### 5.3 Admin Platform
- Platform oversight dashboard
- User and role management
- Analytics and reporting
- Configuration management

### 5.4 PowerSync (Offline-First)
- Local-first SQLite ↔ PostgreSQL sync
- Offline-capable retail operations
- Conflict resolution

## 6. Current Status & Issues

| # | Title | State | Notes |
|---|---|---|---|
| 101 | work.thoughts.tmp.goals-pack-yolo-run | OPEN | Latest YOLO session |
| 100 | work.thoughts.tmp.medusa-gap-analysis | CLOSED | Medusa migration analysis |
| 99 | work.thoughts.tmp.platform-migration-org | OPEN | Platform migration organization |
| 98 | GOAL: Setup Medusa backend | OPEN | Setting up Medusa as backend |
| 97 | Setup eCommerce Backend: Medusa | OPEN | Medusa evaluation |
| 96 | Cơ cấu doanh thu (Revenue structure) | OPEN | Shop revenue modeling |
| 95 | Techcom+OneMount: beat them | OPEN | Competitive positioning |
| 83 | Goals-Pack: abn-retail-platform status | OPEN | Goals pack tracking |
| 81 | Small shop chain management system | OPEN | OpenRetail features |
| 80 | Thanh lý & từ thiện | OPEN | Liquidation & charity |

**Current focus:** Migrating from Axum backend to **Medusa** for ecommerce-specific features. Medusa provides native ecommerce backend capabilities (products, orders, fulfillment, payments) that reduce custom development.

## 7. Frappe Implementation Notes

- **Current stack** is Flutter + Axum/Medusa — NOT Frappe
- **Frappe migration candidate** — ERPNext's ecommerce features could serve as the backend:
  - Existing ERPNext `Item`, `Item Group`, `Customer`, `Sales Order`, `Delivery Note`, `Sales Invoice` map to marketplace primitives
  - **Ecommerce Marketplace** → ERPNext Website + Ecommerce module
  - **Shop Manager** → ERPNext Point of Sale + Stock Entry
  - **Warehouse** → ERPNext Warehouse + Stock Ledger
  - **Supplier Portal** → ERPNext Supplier + Purchase Order
  - **Admin** → ERPNext Dashboards + Reports
- Suggested approach: Create a custom Frappe app `abn_retail` that extends ERPNext Selling + Stock modules with marketplace-specific features
- PowerSync requirement would need a Frappe REST API layer or WebSocket sync mechanism

## 8. Infrastructure Dependencies

| Dependency | Repository |
|---|---|
| API Server (current) | `abn.apiserver.rust.axum` |
| API Server (future) | Medusa (being evaluated) |
| Database | `abn.postgresql` |
| Auth | OneID (via Axum API server) |
| Sync | PowerSync (local-first SQLite ↔ PostgreSQL) |
