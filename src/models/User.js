const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // New Feature: User gets a UPI ID on signup
    upiId: {
      type: String,
      unique: true,
    },
    // New Feature: MPIN for transactions
    mpin: {
      type: String, // Stored as a hash
    },
    balance: {
      type: Number,
      default: 1000, 
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;