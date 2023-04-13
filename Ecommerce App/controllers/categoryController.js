import catchasync from '../helpers/catchasync.js';

const createCategory = catchasync(async (req, res, next) => {
  const { name } = req.body;

  res.status(201).json({
    success: true,
    message: 'Category created successfully',
    name,
  });
});

export { createCategory };
