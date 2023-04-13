import jwt from 'jsonwebtoken';

import User from '../models/userModel.js';
import { comparePassword, hashPassword } from '../helpers/authHelper.js';
import AppError from '../helpers/AppError.js';
import catchAsync from '../helpers/catchasync.js';

const registerController = catchAsync(async (req, res, next) => {
  const { name, email, password, phone, address, answer } = req.body;

  // Check Existence of user (EMAIL_ADDRESS)
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return next(new AppError('Already Register please login', 200));
  }

  // NOW REGISTER USER
  const hashedPassword = await hashPassword(password);
  const user = await User.create({
    email,
    name,
    phone,
    address,
    password: hashedPassword,
    answer,
  });

  res.status(201).json({
    success: true,
    message: 'user successfully registered',
    user,
  });
});

const loginController = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next(new AppError('Invalid email or password', 404));
  }

  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    return next(new AppError('No user existed! Register please', 200));
  }

  const match = await comparePassword(password, user.password);

  if (!match) {
    return next(new AppError('Invalid email or password', 200));
  }

  const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
  res.status(200).json({
    success: true,
    message: 'login successfully',
    user: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      role: user.role,
    },
    token,
  });
});

const forgotPasswordController = catchAsync(async (req, res, next) => {
  const { email, answer, newPassword } = req.body;
  if (!newPassword) {
    return next(new AppError('Please enter a new password', 400));
  }

  const user = await User.findOne({ email, answer });

  if (!user) {
    return next(new AppError('Please enter correct email or answer', 400));
  }

  const hashed = await hashPassword(newPassword);

  await User.findByIdAndUpdate(user._id, { password: hashed });

  res.status(200).json({
    success: true,
    message: 'Your password has been updated successfully',
  });
});

// const testController = (req, res, next) => {
//   res.status(200).json({
//     message: 'tested routes',
//     user: req.user,
//   });
// };

export { registerController, loginController, forgotPasswordController };
