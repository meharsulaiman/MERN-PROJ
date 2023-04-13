import jwt from 'jsonwebtoken';

import catchAsync from '../helpers/catchasync.js';
import AppError from '../helpers/AppError.js';
import User from '../models/userModel.js';

const requireSignIn = catchAsync(async (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access', 401)
    );
  }
  const decode = jwt.verify(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decode._id);
  if (!currentUser) {
    return next(
      new AppError('The user belonging to this token is no longer exist.', 401)
    );
  }
  req.user = currentUser;
  next();
});

const isAdmin = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (user.role !== 1) {
    next(new AppError('Unautherized Access', 401));
  } else {
    next();
  }
});
export { requireSignIn, isAdmin };
