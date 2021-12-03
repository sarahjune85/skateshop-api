const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Must enter a username"],
      unique: true,
      trim: true, // will remove any whitespace at beginning and end of string.
    },
    email: {
      type: String,
      required: [true, "Must enter an email address"],
      unique: [true, "Must be a unique username"],
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email."],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minLength: 5,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// create a model out of the schema:
module.exports = mongoose.model("User", userSchema);
