# Project Structure

## Backend

```
backend/
├── src/
│   ├── controllers/        # Handle request/response, call services
│   ├── services/           # Business logic, plan enforcement, audit
│   ├── models/             # ORM models (Prisma/Sequelize)
│   ├── routes/             # Route definitions per module
│   ├── middleware/         # Auth, RBAC, tenant isolation, validation
│   ├── utils/              # Helpers (logger, rate limiter)
│   └── config/             # Env, DB connections
├── migrations/             # DB migrations
├── tests/                  # Unit/integration tests
└── package.json
```

## Frontend

```
frontend/
├── src/
│   ├── pages/              # Route pages (Login, Dashboard, Projects, Users)
│   ├── components/         # UI components (forms, tables)
│   ├── hooks/              # Auth hooks, data fetching
│   ├── store/              # State management (Redux/Zustand)
│   ├── services/           # API clients
│   ├── layouts/            # Protected route wrappers
│   └── config/             # Env, endpoints
├── public/
├── tests/
└── package.json
```

---

# Development Setup Guide

## Prerequisites
- Node.js v18+
- npm or pnpm
- Docker (latest stable)
- PostgreSQL (via Docker service)

## Environment Variables

### Backend
```
PORT=5000
DATABASE_URL=postgres://user:pass@db:5432/app
JWT_SECRET=your-secret-key
CORS_ORIGIN=http://localhost:3000
```

### Frontend
```
VITE_API_URL=http://localhost:5000
```

## Installation Steps
1. Clone repo: `git clone https://github.com/Jnaneswari19/multi-tenant-saas-project-manager.git`
2. Install backend deps: `cd backend && npm install`
3. Install frontend deps: `cd frontend && npm install`
4. Configure `.env` files.

## Running Locally
- Start services: `docker-compose up -d`
- Backend: http://localhost:5000
- Frontend: http://localhost:3000
- Database: localhost:5432
- Health check: GET `/api/health`

## Running Tests
- Backend: `npm test`
- Frontend: `npm test` (Jest/Vitest)
```

---
