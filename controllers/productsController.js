const Product = require("../models/productsModel");
const HttpError = require("../util/HttpError");

exports.getAllProducts = (req, res, next) => {
  const temp = new Product(1, "hamza");
  temp.addProduct();
  console.log(temp);
  res.json({ message: "ok" });
};

exports.getSingleProducts = (req, res, next) => {};

exports.addProduct = (req, res, next) => {
  //ectracting data from body
  const { name, price } = req.body;

  //creating the new product
  const newProduct = new Product(name, price);
  newProduct
    .addProduct()
    .then((result) => {
      console.log(result);
      res.status(201).json({ message: "successfully created new product" });
    })
    .catch((error) => {
      console.log("error when try to create new product", error);
      throw new HttpError(
        "colud not create new product, Please try again",
        500
      );
    });
};

exports.updateProduct = (req, res, next) => {};
exports.deleteProduct = (req, res, next) => {};
