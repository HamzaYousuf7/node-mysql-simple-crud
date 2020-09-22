const express = require("express");

//local import
const productController = require("../controllers/productsController");

const router = express.Router();

//Handling route
router.get("/", productController.getAllProducts);
router.get("/:product_id", productController.getSingleProducts);
router.post("/", productController.addProduct);
router.put("/:product_id", productController.updateProduct);
router.delete("/:product_id", productController.deleteProduct);

module.exports = router;
