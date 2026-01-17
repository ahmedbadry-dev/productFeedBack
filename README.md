# 🗣️ ProductFeedBack

A modern **Product Feedback Board** built with **React + Vite** — inspired by real product teams where users can add feedback, upvote, comment, and track progress on a roadmap.

## 🔗 Links

- **Live Demo:** https://ahmedbadry-dev.github.io/productFeedBack/
- **Repository:** https://github.com/ahmedbadry-dev/productFeedBack

---

## 📸 Screenshots

### 🏠 Feedback Board (Main View)

This is the main screen of **ProductFeedBack** where users can browse feedback requests, filter by category, sort by upvotes, and open any feedback item.

![Feedback Board](./screenshots/feedback-board.png)

---

### ➕ Create New Feedback (Modal)

A modal form to create a new feedback request by adding a title, selecting category & status, and writing details.

![Create Feedback](./screenshots/create-feedback.png)

---

### ✏️ Edit / 🗑️ Delete Feedback (Modal)

Edit an existing feedback request or delete it completely using a clean modal flow.

![Edit Feedback](./screenshots/edit-feedback.png)

---

### 💬 Feedback Details + Comments

The details page shows the selected feedback info, existing comments, and allows users to add a new comment with a character limit.

![Feedback Details](./screenshots/feedback-details.png)

---

### 🗺️ Roadmap View

A roadmap board that organizes feedback by status: **Planned**, **In-Progress**, and **Live**.

![Roadmap](./screenshots/roadmap.png)

---

---

## 📌 What is this project?

**ProductFeedBack** simulates a real feedback system for a product:

- Users can browse feedback requests.
- Sort feedback by **Most Upvotes**.
- Filter by **categories** like UI / UX / Bug / Feature / Enhancement.
- Open a feedback item to view details and comments.
- Track feedback status using a **Roadmap** (Planned / In-Progress / Live).
- Create, edit, and delete feedback using clean modal UX.

---

## ✨ Key Features (Based on the UI)

- ✅ **Feedback Board**
  - Category filtering (All, UI, UX, Enhancement, Bug, Feature)
  - Sort (e.g. **Most Upvotes**)
  - Upvote counter + comments count per feedback card
- ✅ **Create Feedback**
  - Title, Category, Status, Details
  - Modal form UI (Create New Feedback)
- ✅ **Edit / Delete Feedback**
  - Edit modal (Edit Feedback)
  - Delete action
  - Save changes / cancel flow
- ✅ **Feedback Details**
  - Full feedback view (title, description, category badge)
  - Comments list
  - Add new comment with **character limit**
- ✅ **Roadmap**
  - Board view split by status:
    - Planned
    - In-Progress
    - Live

---

## 🛠️ Tech Stack

- **React** (Functional Components + Hooks)
- **Vite** (Fast dev server & build)
- **JavaScript (ES6+)**
- **CSS** (UI layout & styling)
- **GitHub Pages** (Deployment)

---

## 📂 Project Structure

```bash
productFeedBack/

├─ public/
├─ src/
│ ├─ components/
│ ├─ pages/
│ ├─ assets/
│ ├─ styles/
│ └─ main.jsx
├─ index.html
├─ vite.config.js
├─ package.json
└─ README.md
```

---

## 🚧 Future Improvements

- 🔗 Connect to real backend API
- 💾 Persist data with database
- 🔐 Authentication (login/signup)
- 🧪 Tests (React Testing Library / Jest)
- 🌙 Dark mode
- 🧠 Better UX: toasts, optimistic updates, empty states

## 👨‍💻 Author

- Ahmed Badry — Front-End Developer (React)

## ⚙️ Run Locally (Copy/Paste)

```bash
git clone https://github.com/ahmedbadry-dev/productFeedBack.git
cd productFeedBack
npm install
npm run dev

```
