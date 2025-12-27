
# Technical Specification

## 1. Project Structure

### Backend
```
backend/
├── src/
│   ├── controllers/        # Handle incoming requests
│   ├── models/             # Database models
│   ├── routes/             # API route definitions
│   ├── middleware/         # Auth, RBAC, error handling
│   ├── utils/              # Helper functions
│   ├── config/             # Environment + DB config
│   ├── migrations/         # Database migration files
│   └── tests/              # Unit/integration tests
```

### Frontend
```
frontend/
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Main pages (Login, Dashboard, etc.)
│   ├── routes/             # Route definitions
│   ├── services/           # API calls
│   └── assets/             # Images, styles
```

---

## 2. Development Setup Guide

### Prerequisites
- Node.js v18+
- PostgreSQL v16
- Docker & Docker Compose

### Environment Variables
- `DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_PORT`, `DB_NAME`
- `PORT` (backend)

### Installation
```bash
npm install
```

### Run Locally
```bash
docker-compose up --build
```

### Run Tests
```bash
npm test
```
```

---


