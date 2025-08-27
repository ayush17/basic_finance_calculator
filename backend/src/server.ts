console.log("🚀 Starting server.ts...");

import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import quoteRoutes from "./routes/quoteRoutes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
dotenv.config();

const app: Application = express();
console.log("✅ Express app created");

// Middleware
app.use(cors());
app.use(express.json());
console.log("✅ Middleware applied");

app.use("/api/quotes", quoteRoutes);
console.log("✅ Quote routes mounted");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// DB connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
