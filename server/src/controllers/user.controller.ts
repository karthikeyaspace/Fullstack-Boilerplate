import { Request, Response } from "express";

const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Get user with id: ${id}`);
};

const createUser = async (req: Request, res: Response) => {
  res.send("Create user");
};

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.send("Update user");
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.send("Delete user");
};

export { getUser, createUser, updateUser, deleteUser };
