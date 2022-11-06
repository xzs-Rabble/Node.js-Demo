let http = require("http");
let url = require("url");
let moduleRenderHTML = require("./module/renderHTML");
let moduleRenderStatus = require("./module/renderStatus");

//创建服务器
http
  .createServer((req, res) => {
    //接收浏览器传的参数 返回渲染的内容
    // res.write("hello world");

    if (req.url === "/favicon.ico") {
      return;
    }
    //解析后面的键值对,加true可把键值对转化为对象
    let urlObj = url.parse(req.url, true);
    console.log(urlObj);

    res.writeHead(moduleRenderStatus.renderStatus(urlObj), {
      "Content-Type": "text/html",
      //cors头
      // "access-control-allow-origin": "*",
    });
    res.write(moduleRenderHTML.renderHTML(urlObj));

    res.end();
  })
  .listen(5000, () => {
    console.log("server start");
  });
