# Architecture Document

## 1. System Architecture Diagram
![System Architecture](images/system-architecture.png)

## 2. Database ERD
![Database ERD](images/database-erd.png)

## 3. API Architecture

### Auth
- POST /api/auth/register-tenant (public)
- POST /api/auth/login (public)
- GET /api/auth/me (JWT required)
- POST /api/auth/logout (JWT required)

### Tenants
- GET /api/tenants/:id (auth required)
- PUT /api/tenants/:id (tenant_admin/super_admin)
- GET /api/tenants (super_admin only)

### Users
- POST /api/tenants/:id/users (tenant_admin)
- GET /api/tenants/:id/users (auth required)
- PUT /api/users/:id (tenant_admin/self)
- DELETE /api/users/:id (tenant_admin)

### Projects
- POST /api/projects (auth required)
- GET /api/projects (auth required)
- PUT /api/projects/:id (tenant_admin/creator)
- DELETE /api/projects/:id (tenant_admin/creator)

### Tasks
- POST /api/projects/:id/tasks (auth required)
- GET /api/projects/:id/tasks (auth required)
- PATCH /api/tasks/:id/status (auth required)
- PUT /api/tasks/:id (auth required)
