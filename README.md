# 🏢 Multi-Tenant SaaS Platform

![Docker](https://img.shields.io/badge/Docker-Ready-blue)
![Postgres](https://img.shields.io/badge/Postgres-16-green)
![React](https://img.shields.io/badge/React-Frontend-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)

A portfolio‑ready full‑stack SaaS platform 🏢 featuring multi‑tenant architecture, role‑based access control, and project/task management. Built with Docker, PostgreSQL, Node.js, and React — complete with seeded demo data and visual proof screenshots.

---

## 🚀 Features

- Multi‑tenant architecture with isolated data per tenant  
- Role‑based access control (Admin/User)  
- Project and task management  
- RESTful API with seeded demo data  
- Dockerized backend, frontend, and database  
- Visual proof of functionality via screenshots  

---

## 🧱 Tech Stack

| Layer      | Technology           |
|------------|----------------------|
| Frontend   | React + React Router |
| Backend    | Node.js + Express    |
| Database   | PostgreSQL           |
| Container  | Docker + Compose     |

---

## 🗂️ Folder Structure

```
multi-tenant-saas/
├── backend/
├── frontend/
├── docs/
│   ├── research.md
│   ├── PRD.md
│   ├── architecture.md
│   ├── technical-spec.md
│   ├── api-docs.md
│   └── screenshots/
├── docker-compose.yml
├── .env
├── .env.example
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/Jnaneswari19/multi-tenant-saas.git
cd multi-tenant-saas
```

### 2. Create `.env` file
Copy `.env.example` and fill in your values:
```bash
cp .env.example .env
```

#### Example `.env`
```env
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_HOST=database
DB_PORT=5432
DB_NAME=saasdb
PORT=5000
```

### 3. Start Docker containers
```bash
docker-compose up --build
```

---

## 🔐 Role-Based Access

| Role   | Permissions                |
|--------|----------------------------|
| Admin  | Create/view projects/tasks |
| User   | View only                  |

---

## 🌐 Ports

- Backend → `http://localhost:5000`  
- Frontend → `http://localhost:3000`  
- Database → `localhost:5432`  

---

## 🖥️ Frontend Notes

If you want to run the frontend separately (without Docker):

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The app will run at:
   ```
   http://localhost:3000
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Run tests:
   ```bash
   npm test
   ```

> ⚠️ Note: When running standalone, ensure your backend is running at `http://localhost:5000` so the frontend can connect to the API.

---

## 📚 Documentation

- [Research Document](docs/research.md)  
- [Product Requirements Document (PRD)](docs/PRD.md)  
- [Architecture Document](docs/architecture.md)  
- [Technical Specification](docs/technical-spec.md)  
- [API Documentation](docs/api-docs.md)  

---

## 📸 Proof Screenshots

### ✅ Docker Compose
![Docker Compose](docs/screenshots/docker_running.png)

### ✅ Backend API
![Tenants and Users](docs/screenshots/backend_api.png)

### ✅ Database Tables
![Postgres Tables](docs/screenshots/db_tables.png)

### ✅ Frontend UI
![Projects](docs/screenshots/projects_ui.png)
![Tasks](docs/screenshots/tasks_ui.png)

---

## 🎥 Demo

- Projects page: ![Projects](docs/screenshots/projects_ui.png)  
- Tasks page: ![Tasks](docs/screenshots/tasks_ui.png)  

---

## 📡 API Endpoints

### Tenants
```http
GET /api/tenants
```

### Users
```http
GET /api/users
```

### Projects
```http
GET /api/projects
```

### Tasks
```http
GET /api/tasks
```

---

## 🧪 Seeded Demo Data

- **Tenant**: Demo Company  
- **Admin User**: `admin@demo.com`  
- **Project**: Demo Project  
- **Tasks**:  
  - Demo Task for SaaS testing  
  - Another Demo Task for SaaS testing  

---

## 🔮 Future Improvements

- Multi‑tenant billing integration  
- User invitation & onboarding flows  
- Production‑ready Docker images  
- CI/CD pipeline setup  

---

## 🧼 Cleanup

To reset containers and volumes:
```bash
docker-compose down -v
```

---

## 📄 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

## 📬 Contact

Built by **Jnaneswari**  
Feel free to reach out for collaboration or feedback!
```

---
Perfect, Jnaneswari 👌 — since your `api-docs.md` is now updated with error responses, here’s the **ready‑to‑copy updated `README.md`** that includes **summaries for each documentation file** so reviewers know what to expect before clicking:

---

## 📄 Updated `README.md`

```markdown
# 🏢 Multi-Tenant SaaS Platform

![Docker](https://img.shields.io/badge/Docker-Ready-blue)
![Postgres](https://img.shields.io/badge/Postgres-16-green)
![React](https://img.shields.io/badge/React-Frontend-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)

A portfolio‑ready full‑stack SaaS platform 🏢 featuring multi‑tenant architecture, role‑based access control, and project/task management. Built with Docker, PostgreSQL, Node.js, and React — complete with seeded demo data and visual proof screenshots.

---

## 🚀 Features

- Multi‑tenant architecture with isolated data per tenant  
- Role‑based access control (Admin/User)  
- Project and task management  
- RESTful API with seeded demo data  
- Dockerized backend, frontend, and database  
- Visual proof of functionality via screenshots  

---

## 🧱 Tech Stack

| Layer      | Technology           |
|------------|----------------------|
| Frontend   | React + React Router |
| Backend    | Node.js + Express    |
| Database   | PostgreSQL           |
| Container  | Docker + Compose     |

---

## 🗂️ Folder Structure

```
multi-tenant-saas/
├── backend/
├── frontend/
├── docs/
│   ├── research.md
│   ├── PRD.md
│   ├── architecture.md
│   ├── technical-spec.md
│   ├── api-docs.md
│   └── screenshots/
├── docker-compose.yml
├── .env
├── .env.example
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/Jnaneswari19/multi-tenant-saas.git
cd multi-tenant-saas
```

### 2. Create `.env` file
```bash
cp .env.example .env
```

### 3. Start Docker containers
```bash
docker-compose up --build
```

---

## 🔐 Role-Based Access

| Role   | Permissions                |
|--------|----------------------------|
| Admin  | Create/view projects/tasks |
| User   | View only                  |

---

## 🌐 Ports

- Backend → `http://localhost:5000`  
- Frontend → `http://localhost:3000`  
- Database → `localhost:5432`  

---

## 🖥️ Frontend Notes

If you want to run the frontend separately (without Docker):

```bash
cd frontend
npm install
npm start
```

Runs at `http://localhost:3000`.  
⚠️ Ensure backend is running at `http://localhost:5000`.

---

## 📚 Documentation

- [Research Document](docs/research.md) → Multi‑tenancy analysis (800+ words), tech stack justification (500+ words), security considerations (400+ words).  
- [Product Requirements Document (PRD)](docs/PRD.md) → User personas, 15+ functional requirements, 5+ non‑functional requirements.  
- [Architecture Document](docs/architecture.md) → System architecture diagram, database ERD, API list with roles/authentication.  
- [Technical Specification](docs/technical-spec.md) → Backend/frontend folder structure and development setup guide.  
- [API Documentation](docs/api-docs.md) → All 19 endpoints with request/response examples and error cases.  

---

## 📸 Proof Screenshots

- ✅ Docker Compose → ![Docker Compose](docs/screenshots/docker_running.png)  
- ✅ Backend API → ![Tenants and Users](docs/screenshots/backend_api.png)  
- ✅ Database Tables → ![Postgres Tables](docs/screenshots/db_tables.png)  
- ✅ Frontend UI → ![Projects](docs/screenshots/projects_ui.png), ![Tasks](docs/screenshots/tasks_ui.png)  

---

## 🧪 Seeded Demo Data

- Tenant: Demo Company  
- Admin User: `admin@demo.com`  
- Project: Demo Project  
- Tasks: Demo Task 1, Demo Task 2  

---

## 🔮 Future Improvements

- Multi‑tenant billing integration  
- User invitation & onboarding flows  
- Production‑ready Docker images  
- CI/CD pipeline setup  

---


## 📄 README Snippet (Sample curl Commands)

```markdown
## 📡 Quick API Validation (curl examples)

After running migrations and seeds, you can validate the backend with these curl commands:

### 1. Login as Admin
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@demo.com","password":"Demo@123","tenantSubdomain":"demo"}'
```

> Returns a JWT token. Copy the `"token"` value for use in the next requests.

---

### 2. Get Tenant Details
```bash
curl -X GET http://localhost:5000/api/tenants/<TENANT_ID> \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

---

### 3. List Users
```bash
curl -X GET http://localhost:5000/api/tenants/<TENANT_ID>/users \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

---

### 4. List Projects
```bash
curl -X GET http://localhost:5000/api/projects \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

---

### 5. List Tasks
```bash
curl -X GET http://localhost:5000/api/projects/<PROJECT_ID>/tasks \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

---

✅ These commands confirm that:
- Tenant **Demo Company** exists.  
- Admin user **admin@demo.com** is seeded.  
- Project **Demo Project** is available.  
- Tasks **Demo Task 1** and **Demo Task 2** are returned.  
```

---



## 🧼 Cleanup

```bash
docker-compose down -v
```

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

## 📬 Contact

Built by **Jnaneswari**  
Reach out for collaboration or feedback!
```

---


