const fs = require("fs").promises;

fs.readFile("./avatar/a.txt", "utf-8").then((data) => {
  console.log(data);
});
