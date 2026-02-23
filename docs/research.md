# Multi-Tenancy Analysis

## Approach 1: Shared Database + Shared Schema
(Explain, pros/cons)

## Approach 2: Shared Database + Separate Schema
(Explain, pros/cons)

## Approach 3: Separate Database per Tenant
(Explain, pros/cons)

## Comparison Table
| Approach | Pros | Cons | Best For |
|----------|------|------|----------|
| Shared DB + Shared Schema | Low cost, simple ops | Weak isolation, noisy neighbor | Early-stage SaaS |
| Shared DB + Separate Schema | Better isolation | Complex migrations | Mid-stage SaaS |
| Separate DB per Tenant | Strongest isolation | High cost, ops heavy | Enterprise tenants |

## Chosen Approach
(Justify your choice)

---

# Technology Stack Justification
(Backend, Frontend, Database, Auth, Deployment — ≥500 words)

---

# Security Considerations
(Data isolation, RBAC, hashing, API security, secrets — ≥400 words)
