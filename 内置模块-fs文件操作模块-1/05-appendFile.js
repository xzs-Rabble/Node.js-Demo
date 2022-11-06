const fs = require("fs");

//如果没有文件，则创建文件
//如果有文件，则会在原文件后面追加内容
fs.appendFile("./avatar/a.txt", "\nhello world", (err) => {
  console.log(err);
  /* if (err && err.code === "ENOENT") {
    console.log("目录不存在");
  } */
});
