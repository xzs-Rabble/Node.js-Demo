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
        httpPost((data) => {
          res.end(data);
        });
        break;

      default:
        res.end("404");
    }
  })
  .listen(5500);

function httpPost(cb) {
  let data = "";
  let options = {
    hostname: "m.xiaomiyoupin.com",
    port: "443",
    path: "/mtop/market/search/placeHolder",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let req = https.request(options, (res) => {
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      cb(data);
    });
  });

  req.write(JSON.stringify([{}, { baseParam: { ypClient: 1 } }]));
  req.end();
}
