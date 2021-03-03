const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  getSignleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productsController");

router.route("/products").get(getProducts);
router.route("/products/admin/new").post(newProduct);
router.route("/products/:id").get(getSignleProduct);
router.route("/products/admin/:id").put(updateProduct);
router.route("/products/admin/:id").delete(deleteProduct);
module.exports = router;
