import { Router } from 'express';

import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { createCategory } from '../controllers/categoryController.js';

const router = Router();

router.post('/create-category', requireSignIn, isAdmin, createCategory);

export default router;
