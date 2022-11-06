const fs = require("fs");

fs.readdir("./avatar", (err, data) => {
  console.log(err);
  if (!err) {
    console.log(data);
  }
});
