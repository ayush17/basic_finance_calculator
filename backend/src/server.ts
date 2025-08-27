// src/server.ts
import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import quoteRoutes from "./routes/quoteRoutes"; // ✅ correct file + default import

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/quotes", quoteRoutes);

// DB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/financecalc")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
