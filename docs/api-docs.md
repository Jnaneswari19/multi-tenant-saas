
# API Documentation

All APIs return a consistent format:
```json
{
  "success": true,
  "message": "Description of result",
  "data": { ... }
}
```

---

## 🔐 Authentication Endpoints

### 1. Register Tenant
**POST** `/api/auth/register-tenant`

**Request:**
```json
{
  "tenantName": "Demo Company",
  "subdomain": "demo",
  "adminEmail": "admin@demo.com",
  "adminPassword": "Demo@123",
  "adminFullName": "Demo Admin"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Tenant registered successfully",
  "data": {
    "tenantId": "uuid",
    "subdomain": "demo",
    "adminUser": { "id": "uuid", "email": "admin@demo.com" },
    "role": "tenant_admin"
  }
}
```

**Error (409):**
```json
{ "success": false, "message": "Subdomain or email already exists" }
```

---

### 2. Login
**POST** `/api/auth/login`

**Request:**
```json
{ "email": "admin@demo.com", "password": "Demo@123", "tenantSubdomain": "demo" }
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "user": { "id": "uuid", "role": "tenant_admin" },
    "token": "jwt-token",
    "expiresIn": 86400
  }
}
```

**Error (401):**
```json
{ "success": false, "message": "Invalid credentials" }
```

---

### 3. Get Current User
**GET** `/api/auth/me`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "email": "admin@demo.com",
    "role": "tenant_admin",
    "tenant": { "id": "uuid", "name": "Demo Company" }
  }
}
```

**Error (404):**
```json
{ "success": false, "message": "User not found" }
```

---

### 4. Logout
**POST** `/api/auth/logout`

**Response (200):**
```json
{ "success": true, "message": "Logged out successfully" }
```

---

## 🏢 Tenant Management

### 5. Get Tenant Details
**GET** `/api/tenants/:id`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Demo Company",
    "subdomain": "demo",
    "status": "active",
    "subscriptionPlan": "pro",
    "maxUsers": 25,
    "maxProjects": 15,
    "stats": { "totalUsers": 5, "totalProjects": 2, "totalTasks": 10 }
  }
}
```

**Error (403):**
```json
{ "success": false, "message": "Unauthorized access" }
```

---

### 6. Update Tenant
**PUT** `/api/tenants/:id`

**Request:**
```json
{ "name": "Updated Company Name" }
```

**Response (200):**
```json
{ "success": true, "message": "Tenant updated successfully" }
```

**Error (403):**
```json
{ "success": false, "message": "Tenant admin cannot update subscription plan" }
```

---

### 7. List All Tenants
**GET** `/api/tenants` (super_admin only)

**Response (200):**
```json
{
  "success": true,
  "data": {
    "tenants": [
      { "id": "uuid", "name": "Demo Company", "status": "active", "subscriptionPlan": "pro" }
    ],
    "pagination": { "currentPage": 1, "totalPages": 5 }
  }
}
```

**Error (403):**
```json
{ "success": false, "message": "Only super_admin can list all tenants" }
```

---

## 👥 User Management

### 8. Add User
**POST** `/api/tenants/:id/users`

**Request:**
```json
{ "email": "newuser@demo.com", "password": "NewUser@123", "fullName": "New User", "role": "user" }
```

**Response (201):**
```json
{ "success": true, "message": "User created successfully", "data": { "id": "uuid", "email": "newuser@demo.com" } }
```

**Error (409):**
```json
{ "success": false, "message": "Email already exists in this tenant" }
```

---

### 9. List Users
**GET** `/api/tenants/:id/users`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "users": [
      { "id": "uuid", "email": "admin@demo.com", "role": "tenant_admin" },
      { "id": "uuid", "email": "user1@demo.com", "role": "user" }
    ]
  }
}
```

**Error (403):**
```json
{ "success": false, "message": "Unauthorized to view users of another tenant" }
```

---

### 10. Update User
**PUT** `/api/users/:id`

**Request:**
```json
{ "fullName": "Updated User Name", "isActive": true }
```

**Response (200):**
```json
{ "success": true, "message": "User updated successfully" }
```

**Error (403):**
```json
{ "success": false, "message": "You cannot update another tenant's user" }
```

---

### 11. Delete User
**DELETE** `/api/users/:id`

**Response (200):**
```json
{ "success": true, "message": "User deleted successfully" }
```

**Error (403):**
```json
{ "success": false, "message": "Tenant admin cannot delete themselves" }
```

---

## 📂 Project Management

### 12. Create Project
**POST** `/api/projects`

**Request:**
```json
{ "name": "Website Redesign", "description": "Complete redesign of company site" }
```

**Response (201):**
```json
{ "success": true, "data": { "id": "uuid", "name": "Website Redesign", "status": "active" } }
```

**Error (403):**
```json
{ "success": false, "message": "Project limit reached for current subscription plan" }
```

---

### 13. List Projects
**GET** `/api/projects`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "projects": [
      { "id": "uuid", "name": "Website Redesign", "status": "active", "taskCount": 5 }
    ]
  }
}
```

**Error (404):**
```json
{ "success": false, "message": "No projects found for this tenant" }
```

---

### 14. Update Project
**PUT** `/api/projects/:id`

**Request:**
```json
{ "status": "archived" }
```

**Response (200):**
```json
{ "success": true, "message": "Project updated successfully" }
```

**Error (403):**
```json
{ "success": false, "message": "Only tenant_admin or project creator can update project" }
```

---

### 15. Delete Project
**DELETE** `/api/projects/:id`

**Response (200):**
```json
{ "success": true, "message": "Project deleted successfully" }
```

**Error (404):**
```json
{ "success": false, "message": "Project not found" }
```

---

## ✅ Task Management

### 16. Create Task
**POST** `/api/projects/:id/tasks`

**Request:**
```json
{ "title": "Design homepage mockup", "priority": "high", "dueDate": "2024-07-15" }
```

**Response (201):**
```json
{ "success": true, "data": { "id": "uuid", "title": "Design homepage mockup", "status": "todo" } }
```

**Error (400):**
```json
{ "success": false, "message": "Assigned user does not belong to this tenant" }
```

---

### 17. List Tasks
**GET** `/api/projects/:id/tasks`

**Response (200):**
```json
{
  "success": true,
  "data": {
    "tasks": [
      { "id": "uuid", "title": "Design homepage mockup", "status": "todo" },
      { "id": "uuid", "title": "Implement login page", "status": "in_progress" }
    ]
  }
