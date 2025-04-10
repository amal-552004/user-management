# User Management - Fullstack Application

A complete fullstack user management system using:
- **Backend**: Node.js, Express, MySQL
- **Frontend**: React
- **Dockerized**: For easy deployment
- **CI/CD**: via GitHub Actions

## 📁 Project Structure

```
user-management/
├── backend/             # Express API with MySQL
│   ├── Dockerfile
│   ├── server.js
│   └── ...
├── frontend/            # React frontend
│   ├── Dockerfile
│   └── ...
├── docker-compose.yml   # Docker orchestration
└── .github/workflows/   # GitHub Actions config
```

---

## 🚀 Getting Started

### Prerequisites
- Docker & Docker Compose
- Node.js & npm (for local dev)
- MySQL

### Local Setup

#### Backend
```bash
cd backend
npm install
npm start
```

#### Frontend
```bash
cd frontend
npm install
npm start
```

### Docker Setup
```bash
docker-compose up --build
```
This will:
- Start MySQL database
- Start the Express API
- Start the React frontend on port 3000

---

## 🧪 Testing

### Run tests locally:
```bash
cd backend
npm test
```

### Code coverage:
```bash
npm run coverage
```

Coverage is reported via NYC. HTML report is available under `coverage/` folder.

---

## ⚙️ GitHub Actions - CI/CD

Workflow is defined in `.github/workflows/ci.yml`. On push to `main`:
1. Code is checked out
2. Node.js is set up
3. Dependencies installed
4. Tests executed
5. Docker image built
6. Docker image pushed to Docker Hub

### Required Secrets:
- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`

Configure these in your GitHub repo settings > Secrets.

---

## 🛠 API Documentation

Base URL: `http://localhost:5000`

### GET /users
- Returns all users
- **Response**: `200 OK`

### POST /users
- Creates a new user
- **Body**:
```json
{
  "name": "chaaibi amal",
  "email": "amal@example.com"
}
```
- **Response**: `201 Created`

### PUT /users/:id
- Updates an existing user
- **Body**:
```json
{
  "name": "chaaibi amal",
  "email": "amaal@example.com"
}
```
- **Response**: `200 OK`

### DELETE /users/:id
- Deletes a user
- **Response**: `200 OK`

---

## 📄 License
MIT

## 👤 Author
CHAAIBI AMAL