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
git clone https://github.com/your-username/multi-tenant-saas.git
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

