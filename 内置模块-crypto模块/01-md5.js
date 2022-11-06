const crypto = require("crypto");

const hash = crypto.createHash("md5");
// const hash = crypto.createHash("md5", "rabble");

hash.update("hello world");
// hash.update("ahahahahaha");

console.log(hash.digest("hex"));
