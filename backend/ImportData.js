import express from "express";
import User from "./models/userModel.js";
import users from "./data/userData.js";
import asyncHandler from "express-async-handler";

const ImportData = express.Router();

ImportData.post(
  "/users",
  asyncHandler(async (req, res) => {
    await User.deleteMany({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

export default ImportData;
