# User Personas

## Super Admin
(Role, responsibilities, goals, pain points)

## Tenant Admin
(Role, responsibilities, goals, pain points)

## End User
(Role, responsibilities, goals, pain points)

---

# Functional Requirements

### Auth
- FR-001: The system shall allow tenant registration with unique subdomain.
- FR-002: The system shall issue JWT tokens with 24h expiry.
- FR-003: The system shall provide refresh token rotation.
- FR-004: The system shall enforce RBAC across all endpoints.

### Tenant
- FR-005: The system shall enforce subscription limits per tenant.
- FR-006: The system shall allow updating tenant profile and plan.
- FR-007: The system shall provide audit logs for tenant-level actions.
- FR-008: The system shall isolate data by tenant_id.

### User
- FR-009: The system shall allow Tenant Admins to invite and assign roles.
- FR-010: The system shall prevent duplicate emails per tenant.
- FR-011: The system shall allow deactivation/reactivation of users.

### Project
- FR-012: The system shall allow CRUD operations for projects.
- FR-013: The system shall limit project creation per subscription plan.
- FR-014: The system shall provide a project dashboard.

### Task
- FR-015: The system shall allow CRUD operations for tasks.
- FR-016: The system shall support task assignment and status updates.
- FR-017: The system shall record task changes in audit logs.

---

# Non-Functional Requirements
- NFR-001: API median response time <200ms for 90% of requests.
- NFR-002: All passwords hashed with Argon2/bcrypt.
- NFR-003: Support ≥100 concurrent users per tenant.
- NFR-004: Target 99% uptime for core services.
- NFR-005: Mobile responsive design for all primary pages.
