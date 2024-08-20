// auth.controller.ts
// login, register, changePassword, me, all, remove, update

import { Request, Response } from "express";
import * as auth from "../services/auth/auth.service";

const login = async (req: Request, res: Response) => {
  // implement auth.loginservice()
  res.send("login");
};

const register = async (req: Request, res: Response) => {
  res.send("register");
};

const logout = async (req: Request, res: Response) => {
  res.send("logout");
};

const forgotPassword = async (req: Request, res: Response) => {
  res.send("forgot password");
};

const changePassword = async (req: Request, res: Response) => {
  res.send("change password");
};

const verifyEmail = async (req: Request, res: Response) => {
  res.send("verify email");
};

export { login, register, logout, forgotPassword, changePassword, verifyEmail };
