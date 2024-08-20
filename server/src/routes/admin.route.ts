import express from "express";
import expressAsyncHandler from "express-async-handler";
import {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/admin.controller";

const admin = express.Router();

admin.get(
  "/",
  expressAsyncHandler((req, res) => {
    res.send("Admin route");
  })
);

admin.get("user/:id", expressAsyncHandler(getUser));

admin.get("/users", expressAsyncHandler(getUsers));

admin.get("delete-user/:id", expressAsyncHandler(deleteUser));

admin.post("update-user/:id", expressAsyncHandler(updateUser));

admin.get("add-user", expressAsyncHandler(createUser));

export default admin;
