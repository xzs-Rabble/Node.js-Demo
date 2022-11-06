const fs = require("fs");
const zlib = require("zlib");

const gzip = zlib.createGzip();

const http = require("http");

http
  .createServer((req, res) => {
    //res可写流
    const readStream = fs.createReadStream("./index.js");
    res.writeHead(200, {
      "Content-Type": "application/json;charset=UTF-8",
      "Content-Encoding": "gzip",
    });
    readStream.pipe(gzip).pipe(res);
  })
  .listen(5500, () => {
    console.log("sever start");
  });
