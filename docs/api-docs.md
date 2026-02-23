# API Documentation

## Health
### GET /api/health
Returns service status.

Response:
```json
{ "status": "ok" }
```

---

## Auth Endpoints
### POST /api/auth/register-tenant
Registers a new tenant and admin user.

Request:
```json
{ "name": "Tenant A", "subdomain": "tenant-a", "email": "admin@demo.com", "password": "Demo@123" }
```

Response:
```json
{ "message": "Tenant registered successfully" }
```

### POST /api/auth/login
Logs in user and returns JWT.

Request:
```json
{ "email": "admin@demo.com", "password": "Demo@123" }
```

Response:
```json
{ "token": "jwt-token", "user": { "id": 1, "role": "tenant_admin" } }
```

### POST /api/auth/refresh
Refreshes JWT token.

### GET /api/auth/me
Returns current user info.

### POST /api/auth/logout
Logs out user.

---

## Tenants Endpoints
### GET /api/tenants/:id
Fetch tenant details.

### POST /api/tenants
Create tenant (admin only).

### PATCH /api/tenants/:id
Update tenant info.

### DELETE /api/tenants/:id
Delete tenant.

### GET /api/tenants/:id/limits
Get subscription limits.

### GET /api/tenants/:id/audit-logs
Fetch tenant audit logs.

---

## Users Endpoints
### GET /api/users
List all users.

### POST /api/users
Create new user.

### PATCH /api/users/:id
Update user details.

### DELETE /api/users/:id
Deactivate user.

### PATCH /api/users/:id/reactivate
Reactivate user.

---

## Projects Endpoints
### GET /api/projects
List all projects.

### POST /api/projects
Create new project.

### GET /api/projects/:id
Fetch project details.

### PATCH /api/projects/:id
Update project.

### DELETE /api/projects/:id
Delete project.

---

## Tasks Endpoints
### GET /api/projects/:projectId/tasks
List tasks for project.

### POST /api/projects/:projectId/tasks
Create new task.

### PATCH /api/tasks/:id
Update task.

### DELETE /api/tasks/:id
Delete task.

### GET /api/tasks/:id/audit-logs
Fetch task audit logs.

---

