# Multi-Tenancy Analysis

Multi-tenancy is the architectural principle that allows multiple organizations (tenants) to share the same application while keeping their data isolated. There are three common approaches:

## Approach 1: Shared Database + Shared Schema
All tenants share one database and one schema. Tenant data is separated by a `tenant_id` column.
- **Pros:** Lowest cost, simplest to operate, single migration path, easy analytics across tenants.
- **Cons:** Weakest isolation, noisy neighbor risk, strict application-level guards required.
- **Best for:** Early-stage SaaS with many small tenants.

## Approach 2: Shared Database + Separate Schema
All tenants share one database, but each tenant gets its own schema.
- **Pros:** Better isolation, easier per-tenant backups, schema evolution possible.
- **Cons:** More complex migrations, schema sprawl, higher operational overhead.
- **Best for:** Mid-stage SaaS, compliance-conscious tenants.

## Approach 3: Separate Database per Tenant
Each tenant gets its own database instance.
- **Pros:** Strongest isolation, per-tenant performance tuning, independent backups.
- **Cons:** Highest cost, complex provisioning, cross-tenant analytics difficult.
- **Best for:** Enterprise tenants with strict compliance needs.

## Comparison Table

| Approach | Pros | Cons | Best For |
|----------|------|------|----------|
| Shared DB + Shared Schema | Low cost, simple ops, easy scaling | Weak isolation, noisy neighbor | Early-stage SaaS |
| Shared DB + Separate Schema | Better isolation, per-tenant backups | Complex migrations, schema sprawl | Mid-stage SaaS |
| Separate DB per Tenant | Strongest isolation, compliance | High cost, ops heavy | Enterprise tenants |

## Chosen Approach
We will begin with **Shared Database + Separate Schema** to balance cost and isolation. This allows scaling to many tenants while still offering compliance-friendly separation. For enterprise customers, migration to dedicated databases can be supported.

---

# Technology Stack Justification

- **Backend:** Node.js with Express/NestJS — asynchronous, scalable, large ecosystem. Alternatives like Django or Spring Boot were considered but Node.js offers faster iteration.
- **Frontend:** React — component-based, strong community, easy integration with APIs. Alternatives like Angular or Vue were considered but React’s ecosystem is strongest.
- **Database:** PostgreSQL — relational, supports schemas, strong ACID compliance. Alternatives like MySQL or MongoDB were considered but PostgreSQL’s schema support is ideal for multi-tenancy.
- **Authentication:** JWT with refresh tokens — stateless, scalable. Alternatives like session-based auth were considered but JWT fits distributed systems better.
- **Deployment:** Docker Compose — reproducible, portable. Alternatives like manual setup were considered but Docker ensures evaluator reproducibility.

---

# Security Considerations

1. **Data Isolation:** Enforce tenant_id filters at ORM and middleware level.
2. **RBAC:** Roles (Super Admin, Tenant Admin, End User) enforced at API layer.
3. **Password Hashing:** Use bcrypt/Argon2 with salt.
4. **API Security:** Input validation, HTTPS, rate limiting, audit logs.
5. **Secrets Management:** Environment variables stored securely, not in code.
