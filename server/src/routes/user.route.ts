import { Router } from 'express';
import { getUser, createUser, updateUser, deleteUser } from '../controllers/user.controller';
import expressAsyncHandler from 'express-async-handler';

const user = Router();

// Get all users
user.get('/:id', expressAsyncHandler(getUser));

// Create a new user
user.post('/', expressAsyncHandler(createUser));

// Update an existing user
user.put('/:id', expressAsyncHandler(updateUser));

// Delete a user
user.delete('/:id', expressAsyncHandler(deleteUser));

export default user;
