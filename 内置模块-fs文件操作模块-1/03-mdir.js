const fs = require("fs");

//如果文件夹下面有内容，则无法删除
fs.rmdir("./avatar", (err) => {
  console.log(err);
  if (err && err.code === "ENOENT") {
    console.log("目录不存在");
  }
});
