import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();

// ✅ Load environment variables
dotenv.config({ path: "./config/config.env" });

// ✅ Middleware to parse JSON and URL-encoded data (MUST BE BEFORE ROUTES)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Database Connection (Ensure it runs before defining routes)
dbConnection()
  .then(() => console.log("✅ Database connected successfully!"))
  .catch((error) => {
    console.error("❌ Database connection failed:", error);
    process.exit(1); // Exit process on DB connection failure
  });

// ✅ CORS Configuration
const allowedOrigin = process.env.FRONTEND_URL || "http://localhost:5173";
console.log(`🌐 Allowed Frontend URL: ${allowedOrigin}`);

app.use(
  cors({
    origin: allowedOrigin,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ✅ API Routes
app.use("/api/v1/reservation", reservationRouter);

// ✅ Error handling middleware
app.use(errorMiddleware);

export default app;
