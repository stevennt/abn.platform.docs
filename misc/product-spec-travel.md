# OpenTravel / GoGo — Product Specification

> **Repo:** `abn.platform.travel`
> **Status:** Active | **Language:** Dart (Flutter) + TypeScript
> **Issues:** 24 | **GitHub:** https://github.com/stevennt/abn.platform.travel

---

## 1. Product Identity

**OpenTravel / GoGo** — ABN travel ecosystem consisting of two applications:
- **GoGo:** Travel companion app (Flutter) for trip planning, booking, and local rides
- **OpenTravel Platform Admin:** Administration web app (Next.js) for platform operators and tenant admins

## 2. Problem Statement

- Travelers need a companion app for trip planning, booking, and local transportation
- Platform operators need admin tools for managing multi-tenant travel services
- Tourism industry lacks integrated planning → booking → local rides flow
- Travel content management needs platform-level administration

## 3. Target Users

- **Travelers (GoGo app):** Plan trips, book services, find local rides
- **Platform Operators:** Manage tenants, services, content, users
- **Tenant Admins:** Manage their travel service offerings

## 4. Platform Architecture

### 4.1 Tech Stack

| Layer | Technology |
|---|---|
| Mobile App | Flutter 3.x (GoGo) — `apps/mobile/gogo/` |
| Web Admin | Next.js (OpenTravel Admin) — `apps/web/admin/` |
| Backend | Rust/Axum (existing `abn.apiserver.rust.axum`) |
| Database | PostgreSQL (existing `abn.postgresql`) |
| Auth | OneID via Axum API server |
| State (Flutter) | BLoC |
| DI (Flutter) | get_it + injectable |
| Routing (Flutter) | go_router |
| Local DB (Flutter) | drift + sqlite3 |

### 4.2 App Architecture (GoGo)

Clean architecture with data/domain/presentation layers:
- `lib/features/` — Feature modules organized by domain
- `lib/shared/` — Shared code (widgets, utilities, models)
- BLoC state management
- `go_router` for navigation
- `drift` + `sqlite3` for local database

### 4.3 Repository Structure

```
abn.platform.travel/
├── apps/
│   ├── mobile/
│   │   └── gogo/          ← GoGo Flutter app
│   └── web/
│       └── admin/         ← OpenTravel Platform Admin (Next.js)
├── docs/
│   ├── architecture/
│   ├── features/
│   ├── platform-migration/
│   ├── goals-packs/
│   ├── ssot_architecture_guide.md
│   └── ssot_rules.md
```

## 5. Key Features

### GoGo (Travel Companion)
- Trip planning and itinerary management
- Travel booking integration
- Local ride hailing
- Provincial travel maps (Làm bản đồ du lịch từng tỉnh)
- Tour discovery and booking
- Multi-platform: Android, iOS, macOS, Web, Windows, Linux

### OpenTravel Platform Admin
- Multi-tenant travel platform administration
- Tenant management
- Content and service management
- User management and permissions
- Analytics and reporting

## 6. Current Status & Issues

| # | Title | State |
|---|---|---|
| 24 | Làm bản đồ du lịch từng tỉnh (Provincial travel maps) | OPEN |
| 23 | Add these capabilities | OPEN |
| 22 | twopeasabroad.com integration | OPEN |
| 21 | Add các tour núi thỏ (mountain tours) | OPEN |
| 20 | work.thoughts.tmp.apd-travel-migrations-0529 | OPEN |

**Development status:** Active development with 24 issues. Active Flutter and Next.js apps deployed. Multiple feature requests around travel maps, tour management, and external integrations.

## 7. Frappe Implementation Notes

- **Current stack** is Flutter + ABN Axum backend — NOT Frappe
- **Frappe migration candidate** — Travel bookings/tours could use Frappe Events/Bookings
- Existing Frappe concepts that could help: `Event`, `Event Booking`, `Tour`, `Travel Request`, `Expense Claim`
- Ideas for Frappe implementation:
  - **Travel Agency Management** — custom Frappe app with DocTypes for `Tour Package`, `Booking`, `Itinerary`, `Travel Guide`
  - **Tour Operations** — ERPNext for accounting, customer management, invoicing
  - **Multi-tenant** — Frappe's existing multi-tenant architecture (workspaces, roles)
- Suggested DocTypes: `Tour Package`, `Booking`, `Itinerary`, `Destination`, `Travel Guide`, `Travel Service`, `Supplier`

## 8. Infrastructure Dependencies

| Dependency | Repository |
|---|---|
| API Server | `abn.apiserver.rust.axum` |
| Database | `abn.postgresql` |
| Auth | OneID (via Axum API server) |

## 9. Known Migration Gaps

| Gap | Severity | Notes |
|---|---|---|
| IDE module path | Low | `.idea/` config references old project layout |
| External build script | Info | References `/Users/thanhson/Workspace/ABNScripts-1/` |
| No CI/CD configured | Info | No GitHub Actions in this repo |
| No workspace tooling | Info | No melos or pub workspace |
