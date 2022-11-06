let http = require("http");
let https = require("https");
const { EventEmitter } = require("stream");
let url = require("url");

let event = null;

http
  .createServer((req, res) => {
    let urlobj = url.parse(req.url, true);

    res.writeHead(200, {
      "Content-Type": "application/json;charset=utf-8",
      //cors头
      "access-control-allow-origin": "*",
    });

    switch (urlobj.pathname) {
      case "/api/aaa":
        //客户端 去爱奇艺要数据

        event = new EventEmitter();
        event.on("play", (data) => {
          console.log("2222");
          res.end(data);
        });
        httpGet();
        break;

      default:
        res.end("404");
    }
  })
  .listen(5500);

function httpGet(cd) {
  let data = "";
  https.get(`https://catfront.dianping.com/api/config`, (res) => {
    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log(data);
      //   cd(data);
      event.emit("play", data);
      //   ressponse.end(data)
    });
  });
}
