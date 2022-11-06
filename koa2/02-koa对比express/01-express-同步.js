const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("1111111");
  next();
});

app.use((req, res, next) => {
  console.log("2222222");
  console.log("3333333");
  res.send("hello world");
});

app.listen(5500);
