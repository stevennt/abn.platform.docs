# CareMe — Product Specification

> **Repo:** `abn.platform.healthcare.careme`
> **Status:** Scaffold (design-only) | **Language:** Not yet implemented
> **Issues:** 6 | **GitHub:** https://github.com/stevennt/abn.platform.healthcare.careme

---

## 1. Product Identity

**CareMe** — a personalised medical care journey platform that helps patients move from symptoms and health concerns to structured, clinician-reviewed care-plan options.

**Vision:** *CareMe turns symptoms, medical records, location, budget, and provider availability into clinician-reviewed care-plan options — from local clinic visits to international hospital treatment journeys.*

**Long-term vision:** Become a **CarePlan Operating System** for local and cross-border healthcare journeys.

**Vietnamese positioning:** *CareMe biến triệu chứng, hồ sơ y tế, vị trí, ngân sách và mạng lưới bệnh viện/phòng khám thành các phương án chăm sóc cá nhân hoá được bác sĩ xem xét — từ khám trong nước đến điều trị quốc tế.*

## 2. Problem Statement

### Patient Problems
- Don't know which doctor/hospital to visit
- Unclear whether symptoms are urgent
- Don't know which tests should be done first
- Can't estimate full journey cost
- No structured way to compare care options
- Overseas treatment coordination is fragmented

### Provider Problems
- Poorly prepared patients with missing records
- Fragmented referrals and weak continuity
- Manual coordination for international patients
- No structured care-plan execution layer

## 3. Core Product Principles

1. **Patient-centred, not hospital-centred** — Plan designed around patient's condition, location, budget, preferences
2. **Clinician-reviewed, not AI-autonomous** — Licensed clinicians approve medical decisions
3. **Options, not single answers** — Multiple care pathways: local, specialist, premium domestic, overseas, hybrid, home-care
4. **Full journey cost, not just medical fee** — Travel, lodging, companion, visa, translation, recovery included
5. **Continuity of care** — Follow-up, monitoring, rehab, medications, local doctor handover
6. **FHIR-compatible architecture** — Maps to CarePlan, PlanDefinition, ActivityDefinition, ServiceRequest, etc.
7. **Safety and audit first** — Every clinical recommendation and patient consent auditable

## 4. Target Users

| User | Needs |
|---|---|
| **Patient** | Understand what to do next, compare options, estimate budget, track appointments |
| **Family / Caregiver** | Understand plan, track tasks, communicate with coordinator |
| **Doctor / Medical Advisor** | Review patient request, approve/edit care plans, monitor progress |
| **Clinic / Hospital** | Publish services, receive referrals, issue quotations, update status |
| **Care Coordinator** | Compare providers, coordinate appointments, manage visa/travel logistics |
| **Lab / Imaging / Pharmacy / Rehab** | Receive orders, return results, update task completion |
| **Platform Admin** | Manage protocols, provider quality, compliance, audit |

## 5. Patient Journey

```
1. Patient enters symptoms or care concern
2. Patient adds location, budget, preferences, documents
3. System performs structured symptom intake + red-flag screening
4. System generates possible care categories (not diagnosis)
5. System proposes care-plan options
6. Patient compares options
7. Doctor/medical advisor reviews selected option
8. Provider confirms suitability and availability
9. Final care plan approved
10. Appointments, tests, treatment, logistics coordinated
11. Patient executes the plan
12. Results update the care plan
13. Follow-up continues locally, remotely, or internationally
```

## 6. Core Product Modules

### 6.1 Symptom Intake & Triage
- Structured symptom collection (main concern, duration, severity, red flags)
- Urgency classification: Routine → Soon → Urgent → Emergency Warning
- Red-flag detection and emergency instructions

### 6.2 Patient Health Profile
- Demographics, conditions, allergies, medications, procedures
- Lab/imaging history, document repository
- Insurance/payment context, travel readiness
- External identities: National ID (CCCD), VNeID, BHYT

### 6.3 Care Request Module
- Request types: symptom concern, known diagnosis, second opinion, surgery planning, oncology, chronic care, rehab, post-discharge, overseas evaluation, health checkup
- Multi-stage status: draft → submitted → options_generated → clinician_review → accepted → closed

### 6.4 CarePlan Option Engine
- Option types: Local Basic, Local Specialist, Premium Domestic, Telemedicine First, Overseas Second Opinion, Overseas Evaluation, Overseas Treatment, Hybrid, Home-Care, Long-Term Follow-Up

### 6.5 CarePlan Management
- Structured plan: patient, goals, activities, tasks, service requests, appointments, providers, budget, logistics, documents, risks, approvals, follow-up, audit trail
- Lifecycle: Draft → Pending Clinician Review → Pending Patient Decision → Pending Provider Confirmation → Active → On Hold → Completed → Cancelled

### 6.6 Goals Module
- Goal types: diagnostic, clinical, functional, behavioural, quality_of_life, logistics, follow_up
- Target tracking: numeric/boolean/text with due dates

### 6.7 Activities & Tasks Module
- Activity types: consultation, specialist, teleconsultation, lab, imaging, procedure, surgery, medication, nursing, rehab, diet, education, travel, visa, document, payment, follow-up, remote monitoring, home visit

### 6.8 Provider Network
- Provider profiles with specialties and services
- Appointment availability, quotation issuance
- Referral coordination

### 6.9 Logistics & Cross-Border
- Travel planning, visa documents, companions
- Translation services, accommodation
- Post-return follow-up coordination

## 7. In-Scope vs Out-of-Scope

### In Scope
- Symptom intake, red-flag detection, urgency classification
- Medical document upload and organization
- CarePlan option generation with multi-dimension scoring
- Domestic and overseas provider matching
- Budget estimation with full journey costs
- Logistics planning (travel, visa, accommodation)
- Appointment and task tracking
- Clinician review and approval workflow
- Hospital/clinic referral workflow
- FHIR-compatible clinical data model
- Source-attributed clinical data with provenance tracking

### Out of Scope (Early Versions)
- Autonomous diagnosis or prescription
- Emergency dispatch
- Full insurance claim automation
- Replacement of hospital EMR/HIS systems
- City-wide health information exchange (HIE)

## 8. Tech Stack (Planned)

| Layer | Technology |
|---|---|
| Mobile App | Flutter (patient app) — planned |
| Web | Next.js (doctor/provider portals) — planned |
| API Server | Rust/Axum (existing ABN stack) — planned |
| Database | PostgreSQL (existing ABN stack) — planned |
| Auth | OneID via Axum — planned |
| Workflow | OneWorkflow — planned |
| Clinical Model | FHIR-compatible |

## 9. Current Status & Issues

| # | Title | State |
|---|---|---|
| 6 | Decode DNA | OPEN |
| 5 | work.thoughts.tmp.careme-yolo-may28 | OPEN |
| 4 | Add Usecase: Online pharmacy with sub pharmacies | OPEN |
| 3 | Position as: pan-hospitals e-hospital | OPEN |
| 2 | Turn this to a Health Management Platform, like VNTrip to Travel | OPEN |

**Key design artifact:** `docs/design.1.md` — 2124 lines of comprehensive product design covering all modules, data models, user journeys, provider network, and cross-border treatment.

## 10. Frappe Implementation Notes

- **Current status:** Design-only — NOT implemented yet
- **Frappe migration candidate** — Frappe Healthcare module already provides solid foundation
- Existing Frappe Healthcare DocTypes: `Patient`, `Patient Appointment`, `Clinical Procedure`, `Lab Test`, `Healthcare Schedule`, `Inpatient Record`
- Suggested new Frappe DocTypes: `Care Request`, `Care Plan`, `Care Plan Activity`, `Care Plan Goal`, `Care Coordinator`, `Provider Network`
- Could extend Frappe Healthcare with custom `Care Plan Management` module
- Cross-border treatment logistics would need custom Frappe development
- Frappe's built-in workflow engine could handle care plan state transitions

## 11. Key Design Artifacts

The repo contains a comprehensive 2124-line design document (`docs/design.1.md`) with:
- Full product principles and strategic positioning
- Detailed data models for all modules (TypeScript types)
- Provider network design with quality assessment
- Logistics and cross-border treatment module
- FHIR mapping approach
- Complete patient journey with all states and transitions
