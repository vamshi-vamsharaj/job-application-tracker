# 🚀 ApplyFlow

ApplyFlow is a full-stack Kanban-style job application tracker that helps users organize, manage, and track their job search journey in a structured and visual way.

Built with **Next.js (App Router), TypeScript, MongoDB, and shadcn/ui**, ApplyFlow enables seamless job tracking from “Wish List” to “Offer” using a dynamic drag-and-drop interface.

---

## 🌐 Live Demo

🔗 https://applyflow-iota.vercel.app

---

## ✨ Features

### 🔐 Authentication
- Secure session-based authentication
- Protected dashboard routes

### 📋 Kanban Board
- Predefined workflow columns:
  - Wish List
  - Applied
  - Interviewing
  - Offer
  - Rejected
- Drag & drop job cards between columns
- Reorder jobs within columns

### 📝 Job Management (Full CRUD)
- Add new job applications
- Edit job details
- Delete applications
- Move jobs between columns
- Automatic order recalculation

### ⚡ Optimistic UI Updates
- Instant UI updates during drag
- Server-side persistence
- Revalidation after updates

### 🌱 Database Seeding
- Prebuilt seed script
- Generates demo board & sample jobs
- Useful for development and testing

### 🎨 Modern UI
- Built with shadcn/ui
- TailwindCSS styling
- Lucide icons
- Responsive design

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| UI | shadcn/ui + TailwindCSS |
| Drag & Drop | dnd-kit |
| Backend | Next.js Server Actions |
| Database | MongoDB + Mongoose |
| Deployment | Vercel |
| Tooling | ESLint, Prettier |

---

## 🧠 Architecture Highlights

- Modular folder structure
- Custom `useBoard` hook for state management
- Optimistic drag-and-drop with database persistence
- Server-side validation for all mutations
- Column synchronization on move/delete
- Revalidation using `revalidatePath`
- Dedicated seed script for database initialization

---

## 📁 Project Structure

```

├─ app/
│   ├─ dashboard/
│   └─ api/
├─ components/
│   ├─ kanban-board.tsx
│   ├─ job-application-card.tsx
│   └─ ui/
├─ lib/
│   ├─ auth/
│   ├─ db.ts
│   ├─ models/
│   ├─ actions/
│   └─ hooks/
├─ scripts/seed.ts
├─ next.config.ts
├─ package.json
└─ README.md

````

---

## 🧪 Local Development

### 1️⃣ Clone Repository

```bash
git clone https://github.com/vamshi-vamsharaj/applyflow.git
cd applyflow
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create `.env.local`:

```
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret
SEED_USER_ID=your_user_id_for_seed
```

### 4️⃣ Run Development Server

```bash
npm run dev
```

Visit 👉 [http://localhost:3000](http://localhost:3000)

---

## 🌱 Seed Database (Optional)

Populate demo data:

```bash
npm run seed
```

Ensure `SEED_USER_ID` is defined.

---

## 📦 Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run start` | Run production build     |
| `npm run seed`  | Seed demo data           |

---

## 📌 How Drag & Drop Works

* Client-side optimistic updates
* Order spacing strategy (multiples of 100)
* Column synchronization via `$pull` and `$push`
* Server persistence through `updateJobApplication`
* Automatic revalidation of dashboard

---

## 🚀 Future Improvements

* Real-time updates (WebSockets)
* Multi-board support
* Advanced filtering & search
* Role-based access
* Analytics dashboard

---

## 👨‍💻 Author

**Vamshi Vamsharaj**
Full-Stack Web Developer

📧 Email: vamshivamsharaj123@gmail.com

---

## 📜 License

This project is licensed under the MIT License.

---

## ⭐ If You Like This Project

Give it a star ⭐ on GitHub!

