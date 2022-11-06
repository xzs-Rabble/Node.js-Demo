const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("1111111");
  next();
  console.log("4444444");
  res.send("hello world");
});

app.use(async (req, res, next) => {
  console.log("2222222");

  //异步
  await delay(1000);
  console.log("3333333");
});

function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

app.listen(5500);
