// auth.service.ts
// purpose - to handle authentication logic

import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
  // login logic
  res.send('login');
};


export const logout = (req: Request, res: Response) => {
  // logout logic
  res.send('logout');
};

export const register = (req: Request, res: Response) => {
  // register logic
  res.send('register');
};

export const forgotPassword = (req: Request, res: Response) => {
  // forgot password logic
  res.send('forgot password');
};

export const changePassword = (req: Request, res: Response) => {
  // change password logic
  res.send('change password');
};

export const verifyEmail = (req: Request, res: Response) => {
  // verify email logic
  res.send('verify email');
};





