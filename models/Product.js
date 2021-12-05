const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Must enter a title"],
      unique: true,
      trim: true, // will remove any whitespace at beginning and end of string.
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
    },
    size: {
      type: Array,
    },
    color: {
      type: Array,
    },
    price: {
      type: Number,
      required: true,
    },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// create a model out of the schema:
module.exports = mongoose.model("Product", ProductSchema);
