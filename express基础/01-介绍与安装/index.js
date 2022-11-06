const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({
    name: "rabble",
    age: 25,
  });
});

app.get("/login", (req, res) => {
  res.write("login");
  res.end();
});

const func1 = (req, res, next) => {
  //验证用户token过期，cookie过期
  console.log("验证token");
  const isValid = true;
  if (isValid) {
    res.rabble = "这是func1计算的结果";
    next();
  } else {
    //返回数据
    res.send("error");
  }
};
app.use(func1);

const func2 = (req, res) => {
  //查询数据库
  //返回内容
  console.log(res.rabble);
  res.send({ list: [1, 2, 3] });
};

app.get("/home", [func2]);

app.get("/list", (req, res) => {
  res.send("list");
});

// 匹配acd和abcd
/* app.get("/ab?cd", (req, res) => {
    res.send("ab?cd");
    res.end();
}); */

// 匹配ab/*****
/* app.get("/ab/:id", (req, res) => {
  res.send("/ab/:id");
  res.end();
}); */

// 匹配abcd、abbcd、abbbcd等
/* app.get("/ab+cd", (req, res) => {
  res.send("/ab+cd");
  res.end();
}); */

// 匹配abcd、abxcd、abRABDOMcd、ab123cd等
/* app.get("/ab*cd", (req, res) => {
  res.send("/ab*cd");
  res.end();
}); */

// 匹配/abe 和 /abcde
/* app.get("/ab(cd)?e", (req, res) => {
  res.send("/ab(cd)?e");
  res.end();
}); */

//匹配任意路径中包含a的路径
/* app.get(/a/, (req, res) => {
  res.send("/a/");
  res.end();
});
 */

//匹配以fly结尾的路径
/* app.get(/.*fly$/, (req, res) => {
  res.send("/.*fly$/");
  res.end();
}); */

app.listen(5500, () => {
  console.log("server start");
});
