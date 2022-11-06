let http = require("http");
let url = require("url");

http
  .createServer((req, res) => {
    let urlObj = url.parse(req.url, true);
    // console.log(urlObj.query.callback);
    res.writeHead(200, {
      "Content-Type": "application/json;charset=utf-8",
      //cors头
      "access-control-allow-origin": "*",
    });

    switch (urlObj.pathname) {
      case "/api/aaa":
        res.end(
          `${JSON.stringify({
            name: "zhangsan",
            age: 23,
          })}`
        );
        break;
      default:
        res.end("404");
    }
  })
  .listen(5000);
