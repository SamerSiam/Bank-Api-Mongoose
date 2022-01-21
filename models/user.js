const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model(
  "User",

  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    cash: {
      type: Number,
      default: 0,
    },

    credit: {
      type: Number,
      default: 0,
    },
  }
);

module.exports = User;
