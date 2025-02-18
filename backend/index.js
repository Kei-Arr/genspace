import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import connectDatabase from "./config/Mongodb.js";
import { errorHandler, notFound } from "./middleware/Error.js";
import ImportData from "./ImportData.js";

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDatabase();

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Routes
app.use("/api/import", ImportData);
app.use("/api/users", userRouter);

//ERROR HANDLING
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
