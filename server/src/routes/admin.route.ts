import express from 'express';
import expressAsyncHandler from 'express-async-handler';

const admin = express.Router();

admin.get('/', expressAsyncHandler((req, res) => {
  res.send('Admin route');
}));

export default admin;

// cgpt

import { Router } from 'express';
import { getAdmins, createAdmin, updateAdmin, deleteAdmin } from '../controllers/admin.controller';

const router = Router();

// Get all admins
router.get('/', getAdmins);

// Create a new admin
router.post('/', createAdmin);

// Update an existing admin
router.put('/:id', updateAdmin);

// Delete an admin
router.delete('/:id', deleteAdmin);

export default router;
