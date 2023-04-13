import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'name must be required of category'],
    unique: [true, 'name must be unique'],
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

const Category = model('Category', categorySchema);

export default Category;
