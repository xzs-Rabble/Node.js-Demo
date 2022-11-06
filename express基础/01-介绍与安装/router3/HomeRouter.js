const express = require("express");
const router = express.Router();

//路由级别
router.get("/", (req, res) => {
  let list = ["111", "222", "333"];
  let myhtml = "<b>我是加粗</b>";

  res.render("home", { list: list, myhtml: myhtml });
});

module.exports = router;
