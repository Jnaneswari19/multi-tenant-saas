# Product Requirements Document (PRD)

## User Personas

### Super Admin
- **Role:** System‑level administrator
- **Responsibilities:** Manage all tenants, oversee system health
- **Goals:** Ensure uptime, compliance, and smooth operations
- **Pain Points:** Complexity of multi‑tenant oversight, balancing resources across tenants

### Tenant Admin
- **Role:** Organization administrator
- **Responsibilities:** Manage users, projects, and subscription plan
- **Goals:** Efficient team management, maximize productivity
- **Pain Points:** Subscription limits, onboarding new users

### End User
- **Role:** Team member
- **Responsibilities:** Work on assigned tasks within projects
- **Goals:** Complete tasks efficiently, collaborate with teammates
- **Pain Points:** Limited permissions, dependency on admins for access

---

## Functional Requirements

### Auth
- FR‑001: The system shall allow tenant registration with unique subdomain.  
- FR‑002: The system shall allow user login with JWT.  
- FR‑003: The system shall allow logout.  

### Tenant
- FR‑004: The system shall allow tenant admins to update tenant details.  
- FR‑005: The system shall allow super admins to list all tenants.  

### User
- FR‑006: The system shall allow tenant admins to add users.  
- FR‑007: The system shall allow listing users per tenant.  
- FR‑008: The system shall allow updating user details.  
- FR‑009: The system shall allow deleting users.  

### Project
- FR‑010: The system shall allow creating projects.  
- FR‑011: The system shall allow listing projects.  
- FR‑012: The system shall allow updating projects.  
- FR‑013: The system shall allow deleting projects.  

### Task
- FR‑014: The system shall allow creating tasks.  
- FR‑015: The system shall allow updating task status.  

---

## Non‑Functional Requirements

- NFR‑001: API response time < 200ms for 90% of requests.  
- NFR‑002: All passwords must be hashed using bcrypt.  
- NFR‑003: Support minimum 100 concurrent users.  
- NFR‑004: Ensure 99% uptime target.  
- NFR‑005: Provide mobile responsive design for all frontend pages.  
