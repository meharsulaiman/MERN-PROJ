// GLOBAL ERROR handlers
const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || false;

  res.status(err.statusCode).json({
    success: err.status,
    message: err.message,
  });
  next();
};

export default errorMiddleware;
