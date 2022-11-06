const fs = require("fs");

fs.readFile("./avatar/a.txt", "utf-8", (err, data) => {
  if (!err) {
    console.log(data);
  }
});
