import { Request, Response } from "express";

// does not directly interact with the database

const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.send("Get user");
};

const getUsers = async (req: Request, res: Response) => {
  res.send("Get users");
};

const createUser = async (req: Request, res: Response) => {
  res.send("Create user");
};

const updateUser = async (req: Request, res: Response) => {
  res.send("Update user");
};

const deleteUser = async (req: Request, res: Response) => {
  res.send("Delete user");
};

export { getUser, getUsers, createUser, updateUser, deleteUser };
