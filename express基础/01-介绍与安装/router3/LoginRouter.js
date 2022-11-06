const express = require("express");
const router = express.Router();

//路由级别-响应前端的get请求
router.get("/", (req, res) => {
  // console.log(req.query);
  // res.send("<b>dwa</b>");   //send片段 & json
  //res.json([1,2,3])  //json

  //渲染模板返回给前端
  res.render("login", { error: "" }); //找到views文件夹下面的login.ejs
});

//路由级别-响应前端的post请求
router.post("/", (req, res) => {
  console.log(req.body); //必须配置中间件
  const { username, password } = req.body;
  if (username === "rabble" && password === "123456") {
    console.log("登录成功");
    //重定向home页面
    res.redirect("/home");
  } else {
    console.log("登录失败");
    res.render("login", { error: "用户名密码错误" });
  }
});
module.exports = router;
