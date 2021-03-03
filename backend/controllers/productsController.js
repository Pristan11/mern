const Product = require("../models/product");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");
const APIFeatures = require("../utils/apiFeatures");
exports.getProducts = catchAsyncError(async (req, res, next) => {
  const resPerPage = 4;
  const ProductCount = await Product.countDocuments();
  const apiFeatures = new APIFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resPerPage);
  const products = await apiFeatures.query;
  res.status(200).json({
    success: true,
    count: products.length,
    ProductCount,
    products,
    message: "this route will show the all products in the database",
  });
});

exports.getSignleProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found checked it well", 404));
  }

  res.status(200).json({ success: true, product: product });
});

exports.newProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);
  //if (!product) return res.staus(404).send("cannot create a new product");
  res.status(201).json({
    success: true,
    product,
  });
});

exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found checked it well", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({ success: true, product });
});

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found checked it well", 404));
  }
  await product.remove();
  res.status(200).json({ success: true, message: "Product Deleted" });
});
