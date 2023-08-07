const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/app-product", (req, res, next) => {
  console.log("In another middleware");
  res.send(
    `<form action="/product" method="POST"><input type="text" name="title"/><button>Add product</button></form>`
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello from Express</h1>");
});

app.listen(5500);
