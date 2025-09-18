# Expense Tracker

A full-stack Expense Tracker app built with React (frontend) and Express/MongoDB (backend). Track your daily expenses, view summaries, and manage your spending with a clean UI.

## Features

- Add, view, and delete expenses
- Summary cards for total, average, monthly, and category stats
- Responsive design with Tailwind CSS
- RESTful API backend with MongoDB
- Environment variable support for configuration

## Project Structure

```
backend/
  controllers/
  models/
  routes/
  seed/
  .env
  package.json
  server.js
  testConnection.cjs

frontend/
  public/
  src/
    components/
    pages/
    services/
    App.jsx
    main.jsx
    router.jsx
    index.css
  .env
  package.json
  index.html
  tailwind.config.js
  postcss.config.js
  vite.config.mjs

.gitignore
```

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB instance (local or cloud)

### Backend Setup

1. Install dependencies:
   ```sh
   cd backend
   npm install
   ```
2. Create a `.env` file in `backend/`:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```
3. Start the backend server:
   ```sh
   npm run dev
   ```
   The server runs on `http://localhost:5000`.

### Frontend Setup

1. Install dependencies:
   ```sh
   cd frontend
   npm install
   ```
2. Create a `.env` file in `frontend/`:
   ```
   VITE_API_URL=http://localhost:5000
   ```
3. Start the frontend dev server:
   ```sh
   npm run dev
   ```
   The app runs on `http://localhost:5173`.

## Scripts

- **Backend**
  - `npm run dev` — Start backend with nodemon
  - `npm run seed` — Run seed script
- **Frontend**
  - `npm run dev` — Start frontend dev server
  - `npm run build` — Build frontend for production

## API Endpoints

- `GET /api/expenses` — List all expenses
- `POST /api/expenses` — Add a new expense
- `DELETE /api/expenses/:id` — Delete an expense

## Customization

- Edit categories in [`ExpenseForm`](frontend/src/components/ExpenseForm.jsx)
- Update summary logic in [`SummaryCards`](frontend/src/components/SummaryCards.jsx)

## License

MIT

---

Made with ❤️ using React, Express, and MongoDB.
