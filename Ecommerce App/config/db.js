import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(colors.white.bgMagenta(`database connection established`));
  } catch (error) {
    console.log(
      colors.white.bgBlue(`Error connecting to MongoDB: ${error.message}`)
    );
  }
};

export default connectDB;
