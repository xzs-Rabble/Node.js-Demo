let http = require("http");
let https = require("https");
let url = require("url");

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
        httpGet((data) => {
          res.end(data);
        });
        break;

      default:
        res.end("404");
    }
  })
  .listen(5500);

function httpGet(cd) {
  let data = "";
  https.get(
    `https://pcw-api.iqiyi.com/strategy/pcw/data/indexCsr2Data`,
    (res) => {
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        console.log(data);
        cd(data);
        //   ressponse.end(data)
      });
    }
  );
}
