const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "Hamza",
  database: "crud_operation",
  password: "cFK2tZS&",
});

module.exports = pool.promise();
