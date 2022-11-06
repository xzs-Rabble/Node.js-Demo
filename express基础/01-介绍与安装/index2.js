const express = require("express");
const app = express();
const IndexRouter = require("./touter2/IndexRouter");

//应用级别
app.use(function (req, res, next) {
  console.log("验证token");
  next();
});

//应用级别
app.use("/", IndexRouter);

app.listen(5500, () => {
  console.log("server start");
});
