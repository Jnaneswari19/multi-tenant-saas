# Multi-Tenant SaaS Platform

A demo SaaS platform with **Postgres database**, **Express backend**, and **React frontend**, all orchestrated with Docker Compose.

## 🚀 Features
- Multi-tenant architecture (tenants, users, projects, tasks, audit logs, sessions)
- Seeded demo data for quick testing
- REST API endpoints exposed via Express
- React frontend consuming backend API
- Docker Compose for reproducible setup

## 🛠️ Setup

### Prerequisites
- Docker & Docker Compose installed

### Run the stack
```bash
docker compose up -d --build
```

### Services
- **Backend API** → http://localhost:3000/api  
- **Frontend UI** → http://localhost:3001  
- **Database** → Postgres 15 on port 5432

### Test API
```bash
curl http://localhost:3000/api/tenants
curl http://localhost:3000/api/users
curl http://localhost:3000/api/projects
```

### Demo Data
- Tenant: `Demo Company`
- User: `admin@demo.com` (role: admin)
- Project: `Demo Project`
- Task: `Initial Setup`
- Session: `demo-session-token`

## 📂 Project Structure
```
multi-tenant-saas-platform/
├── backend/        # Express API
├── frontend/       # React app
├── database/       # Migrations & seeds
├── docker-compose.yml
└── README.md
```

## 📸 Screenshots

### Backend API
The backend responds correctly to curl requests:

**Tenants API**
![Tenants API](docs/screenshots/backend-tenants.png)

**Users API**
![Users API](docs/screenshots/backend-users.png)

### Frontend UI
The React frontend connects to the backend API and displays demo data:

![Frontend Demo](docs/screenshots/frontend-ui.png)

