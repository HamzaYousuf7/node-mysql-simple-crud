const HttpError = require("../util/HttpError");
const DB = require("../util/connectToDB");

module.exports = class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  addProduct() {
    if (this.name && this.price) {
      return DB.execute("INSERT INTO products(name,price) VALUES(?,?)", [
        this.name,
        this.price,
      ]);
    } else {
      throw new HttpError(
        "filed are not valid, Please check your data and try again",
        422
      );
    }
  }

  static getAllProducts() {
    return DB.execute("SELECT * FROM products");
  }

  static getSingleProduct(product_id) {
    return DB.execute(`SELECT * FROM products WHERE product_id=${product_id}`);
  }

  static updateProduct(product_id, name, price) {
    return DB.execute(
      "UPDATE products SET name=?, price=? WHERE product_id=?",
      [name, price, product_id]
    );
  }

  static deleteProduct(product_id) {
    return DB.execute(`DELETE FROM products WHERE product_id=${product_id}`);
  }
};
