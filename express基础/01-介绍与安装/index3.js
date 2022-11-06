const express = require("express");
const app = express();
const HomeRouter = require("./router3/HomeRouter");
const LoginRouter = require("./router3/LoginRouter");

//配置模板引擎
app.set("views", "./views");
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile); //支持直接渲染html文件

// 配置静态资源
app.use(express.static("public"));
app.use(express.static("static"));

//配置解析post参数的-不用下载第三方，内置
app.use(express.urlencoded({ extended: false })); //post参数
app.use(express.json()); //post参数-{name:"",age:100}

//应用级别
app.use(function (req, res, next) {
  console.log("验证token");
  next();
});

//应用级别
app.use("/home", HomeRouter);
app.use("/login", LoginRouter);

app.use((req, res) => {
  res.status(404).send("丢了");
});

app.listen(5500, () => {
  console.log("server start");
});
