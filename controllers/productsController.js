const Product = require("../models/productsModel");
const HttpError = require("../util/HttpError");

exports.getAllProducts = (req, res, next) => {
  Product.getAllProducts()
    .then((result) => {
      console.log(result[0]);
      res.status(200).json({
        message: "successfully fetch all products",
        products: result[0],
      });
    })
    .catch((error) => {
      console.log("error when try to get all products", error);
      throw new HttpError("colud not fetch all product,Please try again", 500);
    });
};

exports.getSingleProducts = (req, res, next) => {
  const product_id = req.params.product_id;
  Product.getSingleProduct(product_id)
    .then((result) => {
      //what are we getting console.log("result =>", result[0]);
      const singleProduct = result[0]; // if found
      if (singleProduct.length > 0) {
        const temp = result[0][0];
        res.status(200).json({
          message: "successfully fetch a single product",
          product: temp,
        });
      } else {
        res.status(404).json({
          message: "product not found",
        });
      }
    })
    .catch((error) => {
      console.log("error when try to get all products", error);
      throw new HttpError("colud not fetch all product,Please try again", 500);
    });
};

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

exports.updateProduct = (req, res, next) => {
  const product_id = req.params.product_id;
  const { name, price } = req.body;
  console.log("===>", product_id, name, price);
  Product.updateProduct(product_id, name, price)
    .then((result) => {
      console.log(result);
      const isSuccess = result[0].affectedRows;
      if (isSuccess > 0) {
        res.status(200).json({
          message: "successfully update product ",
        });
      } else {
        res.status(404).json({ message: "product not found" });
      }
    })
    .catch((error) => {
      console.log("error when try to update  product", error);
      throw new HttpError("colud not update  product, Please try again", 500);
    });
};

exports.deleteProduct = (req, res, next) => {
  const product_id = req.params.product_id;

  Product.deleteProduct(product_id)
    .then((result) => {
      //DEBUG PERPOSE    console.log("=>",result[0].affectedRows);
      const isSuccess = result[0].affectedRows;
      if (isSuccess > 0) {
        res.status(200).json({
          message: "successfully deleted product ",
        });
      } else {
        res.status(404).json({ message: "product not found" });
      }
    })
    .catch((error) => {
      console.log("error when try to delete  product", error);
      throw new HttpError("colud not delete  product, Please try again", 500);
    });
};
