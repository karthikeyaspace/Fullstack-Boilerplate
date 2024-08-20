// login, register

import { Router } from "express";
import {
  login,
  register,
  logout,
  forgotPassword,
} from "../controllers/auth.controller";
import expressAsyncHandler from "express-async-handler";

const auth = Router();

// Register a new user
auth.post("/register", expressAsyncHandler(register));

// Log in a user
auth.post("/login", expressAsyncHandler(login));

// Log out a user
auth.post("/logout", expressAsyncHandler(logout));

auth.post("/forgot-password", expressAsyncHandler(forgotPassword));

auth.post("/change-password", expressAsyncHandler(forgotPassword));

auth.post("/verify-email", expressAsyncHandler(forgotPassword));

export default auth;
