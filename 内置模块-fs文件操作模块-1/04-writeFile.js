const fs = require("fs");

//如果没有文件，则创建文件
//如果有文件，则会覆盖原文件
fs.writeFile("./avatar/a.txt", "hello world", (err) => {
  console.log(err);
  /* if (err && err.code === "ENOENT") {
    console.log("目录不存在");
  } */
});
