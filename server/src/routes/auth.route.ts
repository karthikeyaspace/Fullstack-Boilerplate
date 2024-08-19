// login, register

import { Router } from 'express';
import { login, register, logout } from '../controllers/auth.controller';

const router = Router();

// Register a new user
router.post('/register', register);

// Log in a user
router.post('/login', login);

// Log out a user
router.post('/logout', logout);

export default router;
