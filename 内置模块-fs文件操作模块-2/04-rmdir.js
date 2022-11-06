const fs = require("fs").promises;

fs.readdir("./avatar").then(async (data) => {
  /* let arr = [];
  data.forEach((item) => {
    arr.push(fs.unlink(`./avatar/${item}`));
  }); */

  //如何等待for循环里面的异步都执行完再执行下面代码
  //Promise.add([])
  await Promise.all(data.map((item) => fs.unlink(`./avatar/${item}`)));
  await fs.rmdir("./avatar");
});
