import express from 'express';

const user = express.Router();

user.get('/', (req, res) => {
  res.send('User route');
});

export default user;

// cgpt

import { Router } from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/user.controller';

const router = Router();

// Get all users
router.get('/', getUsers);

// Create a new user
router.post('/', createUser);

// Update an existing user
router.put('/:id', updateUser);

// Delete a user
router.delete('/:id', deleteUser);

export default router;
