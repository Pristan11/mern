const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/errors");
app.use(express.json());

//Import all routes
const products = require("./routes/products");
const auth = require("./routes/auth");
app.get("/", (req, res) =>
  res.status(200).send("mern e-commerce website server is runnig")
);
app.use("/api/v1", products);
app.use("api/v1", auth);
app.use(errorMiddleware);

module.exports = app;
