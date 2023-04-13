import colors from 'colors';
import dotenv from 'dotenv';

// Configure ENV
dotenv.config();

import connectDB from './config/db.js';
import app from './app.js';

const PORT = process.env.PORT || 8000;
const MODE = process.env.DEV_MODE;
// DATABASE CONFIG
connectDB();

app.listen(PORT, () => {
  console.log(
    colors.white.bgBlue(`Server listening with ${MODE} mode on port ${PORT}`)
  );
});
