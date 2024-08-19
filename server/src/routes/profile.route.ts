import { Router } from 'express';
import { getProfile, updateProfile } from '../controllers/profile.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

// Get user profile
router.get('/', authMiddleware, getProfile);

// Update user profile
router.put('/', authMiddleware, updateProfile);

export default router;
