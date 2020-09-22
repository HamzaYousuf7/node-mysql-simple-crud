const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "",
  user: "",
  database: "crud_operation",
  password: "",
});

module.exports = pool.promise();
