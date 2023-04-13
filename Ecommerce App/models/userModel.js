import { Schema, model } from 'mongoose';
import validator from 'validator';

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please tell us your name'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Please provide your email'],
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please enter your password'],
      select: false,
    },
    phone: {
      type: String,
      required: [true, 'Please enter your phone number'],
    },
    address: {
      type: String,
      required: [true, 'Please enter your address'],
    },
    role: {
      type: Number,
      default: 0,
    },
    answer: {
      type: String,
      required: [true, 'Please enter your answer'],
    },
  },
  {
    timestamps: true,
  }
);

const User = model('users', userSchema);

export default User;
