const fs = require("fs");

//边读边写，简单理解就是复制
const readStream = fs.createReadStream("./1.txt");

const writeStream = fs.createWriteStream("./2.txt");

readStream.pipe(writeStream);
