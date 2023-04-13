import express from 'express';
import {
  registerController,
  loginController,
  forgotPasswordController,
} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/forgot-password', forgotPasswordController);

router.get('/user-auth', requireSignIn, (req, res, next) => {
  res.status(200).json({
    success: true,
  });
});

router.get('/admin-auth', requireSignIn, isAdmin, (req, res, next) => {
  res.status(200).json({
    success: true,
  });
});

export default router;
