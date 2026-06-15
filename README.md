# Skillarc - Online Course Marketplace 🎓

A full-stack multi-vendor online course marketplace built with the MERN stack, where instructors can create and sell courses and students can browse and enroll.

🔗 **Live Demo:** [https://skillarc-ruby.vercel.app](https://skillarc-ruby.vercel.app)
💻 **GitHub:** [https://github.com/varnika1237/skillarc](https://github.com/varnika1237/skillarc)

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- React Router DOM
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

**Authentication**
- JWT (JSON Web Tokens)
- bcryptjs

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 JWT Authentication | Secure login & register with token-based auth |
| 👥 Role-Based Access | 3 roles — Admin, Instructor, Student |
| 📚 Course Listings | Browse courses with categories, ratings & pricing |
| 👨‍🎓 Student Dashboard | Track enrolled courses and learning progress |
| 👨‍🏫 Instructor Dashboard | Manage courses and track revenue & students |
| 📱 Responsive Design | Works on all screen sizes |

---

## 👥 User Roles
Admin       → Manages the entire platform

Instructor  → Creates and sells courses

Student     → Browses and enrolls in courses
---

## 🏗️ Project Structure
Skillarc/

├── skillarc-backend/

│   ├── controllers/

│   │   └── authController.js

│   ├── middleware/

│   │   └── authMiddleware.js

│   ├── models/

│   │   └── User.js

│   ├── routes/

│   │   └── authRoutes.js

│   ├── .env

│   └── server.js

│

└── skillarc-frontend/

└── src/

├── pages/

│   ├── Home.js

│   ├── Login.js

│   ├── Register.js

│   ├── Courses.js

│   ├── StudentDashboard.js

│   └── InstructorDashboard.js

└── App.js
---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18.x
- MongoDB Atlas account

### Backend Setup
```bash
cd skillarc-backend
npm install
npm run dev
```

### Frontend Setup
```bash
cd skillarc-frontend
npm install
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file in `skillarc-backend`:
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
---

## 🔌 API Routes

| Route | Method | Description |
|---|---|---|
| /api/auth/register | POST | Register a new user |
| /api/auth/login | POST | Login and get JWT token |

---

## 👩‍💻 Developer

Built by **Varnika** as a portfolio project.

---

