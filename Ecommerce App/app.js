import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import authRouter from './routes/authRoute.js';
import categoryRouter from './routes/categoryRoute.js';

import AppError from './helpers/AppError.js';
import errorMiddleware from './middlewares/errorController.js';

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());
// Logging Setup
const MODE = process.env.DEV_MODE;
if (MODE === 'development') {
  app.use(morgan('dev'));
}

// ROUTES
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/category', categoryRouter);

// UNHANDLED routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 400));
});

app.use(errorMiddleware);

export default app;
