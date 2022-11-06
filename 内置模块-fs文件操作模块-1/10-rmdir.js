const fs = require("fs");

fs.readdir("./avatar", (err, data) => {
  //   console.log(data);
  //异步删除，不会阻塞下面代码的执行
  data.forEach((item) => {
    fs.unlink(`./avatar/${item}`, (err) => {});
  });

  fs.rmdir("./avatar", (err) => {});
});
