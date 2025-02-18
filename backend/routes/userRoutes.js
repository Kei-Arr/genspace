import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";

const userRouter = express.Router();

// LOGIN route using the controller function
userRouter.post("/login", loginUser);

// REGISTER route using the controller function
userRouter.post("/register", registerUser);

export default userRouter;
