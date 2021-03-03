const mongoose = require("mongoose");

const productShema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter the Product name"],
    maxLength: [100, "cann't enter more than 100 characters"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Please Enter the Price"],
    maxLength: [100, "cann't enter more than 100 characters"],
    default: 0,
  },
  description: {
    type: String,
    required: [true, "Please Enter the Description"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  image: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter the Category"],
    enum: {
      values: [
        "Electronics",
        "camera",
        "laptop",
        "Moblie Phone Accessories",
        "HeadPhone",
        "laptop Accessories",
        "Food",
        "Books",
        "Cloths",
        "sports",
        "outdoor",
        "Home",
      ],
      message: "Please select a correct categoty for Product",
    },
  },
  seller: {
    type: String,
    required: [true, "Please Enter the Seller"],
  },
  stock: {
    type: Number,
    required: [true, "Please Enter the Product stock"],
    default: 0,
  },
  numofreviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productShema);
