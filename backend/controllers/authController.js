const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");

exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id:
        "https://pixabay.com/photos/tabby-cat-chess-game-strategy-pet-5946499/",
      url:
        "https://pixabay.com/photos/tabby-cat-chess-game-strategy-pet-5946499/",
    },
  });

  res.status(201).json({
    success: true,
    user,
  });
});
