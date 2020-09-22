const express = require("express");
const bodyParser = require("body-parser");

//local imports
const productsRoute = require("./routes/productsRoute");

//App Start
const app = express();

app.use(bodyParser.json());

//routing handling
app.use("/api/products", productsRoute);

//Error handling
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.statusCode || 500);
  res.json({ message: error.message || "An Unknow errro occur on the server" });
});

app.listen(5000, () => {
  console.log("SERVER IS RUNNING ON PORT 5000");
});
