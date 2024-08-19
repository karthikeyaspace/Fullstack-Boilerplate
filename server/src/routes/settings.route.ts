import { Router } from 'express';
import { getSettings, updateSettings } from '../controllers/settings.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

// Get user settings
router.get('/', authMiddleware, getSettings);

// Update user settings
router.put('/', authMiddleware, updateSettings);

export default router;
