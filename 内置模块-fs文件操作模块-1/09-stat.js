const fs = require("fs");

fs.stat("./avatar", (err, data) => {
  console.log(data);
  //是否是文件
  console.log(data.isFile());
  //是否是目录
  console.log(data.isDirectory());
});
