# 📊 Finance Calculator

A full-stack Finance Calculator app built with **React + Tailwind (frontend)** and **Express + TypeScript + MongoDB (backend)**.

- 💻 **Frontend** → lets users enter finance details (cost, profit, selling price, term, rate, tax rate, out of pocket).
- 📐 **Formulas** → calculates taxes, base loan, interest, monthly payments, etc.
- 💾 **Backend** → stores saved quotes in MongoDB.
- 📋 **Features**
  - Live form with “Apply” button to calculate results
  - Result panel showing loan details
  - Save quotes to database
  - View or delete saved quotes

---

## 🚀 Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Axios
- **Backend**: Node.js, Express, TypeScript, Mongoose
- **Database**: MongoDB (local instance)

---

## 📂 Project Structure

basic_finance_calculator/
┣ frontend/ # React + Tailwind
┃ ┣ src/
┃ ┃ ┣ components/
┃ ┃ ┃ ┣ FinanceQuote.tsx
┃ ┃ ┃ ┣ FinanceResult.tsx
┃ ┃ ┃ ┗ SavedQuotes.tsx
┃ ┃ ┗ App.tsx
┣ backend/ # Express + Mongo + TS
┃ ┣ src/
┃ ┃ ┣ models/
┃ ┃ ┃ ┗ Quote.ts
┃ ┃ ┣ routes/
┃ ┃ ┃ ┗ quoteRoutes.ts
┃ ┃ ┗ server.ts
┃ ┣ tsconfig.json
┃ ┗ package.json
┗ README.md

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repo

```bash
git clone https://github.com/<your-username>/basic_finance_calculator.git
cd basic_finance_calculator
```

cd backend
npm install

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` in `backend/`:

Start backend:

```bash
npm run dev

```
