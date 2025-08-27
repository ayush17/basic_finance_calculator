// src/server.ts
import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import quoteRoutes from "./routes/quoteRoutes";

dotenv.config();

const app: Application = express();

// ✅ CORS middleware (must come before routes)
app.use(
  cors({
    origin: "http://localhost:3000", // allow React dev server
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Handle preflight requests explicitly
app.options("*", cors());

// Middleware
app.use(express.json());

// Routes
app.use("/api/quotes", quoteRoutes);

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ✅ Server Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
