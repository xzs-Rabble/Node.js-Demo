const fs = require("fs");

fs.readdir("./avatar", (err, data) => {
  //   console.log(data);
  //同步删除
  data.forEach((item) => {
    fs.unlinkSync(`./avatar/${item}`);
  });

  fs.rmdir("./avatar", (err) => {});
});
