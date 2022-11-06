const fs = require("fs");

try {
  fs.mkdirSync("./avatar");
} catch (error) {
  console.log("1111", error);
}
