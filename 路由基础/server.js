const http = require("http");

const Router = {};

//express use
function use(obj) {
  //往Router中加入route
  Object.assign(Router, obj);
}

function start() {
  http
    .createServer((req, res) => {
      //favicon
      const myURL = new URL(req.url, "http://127.0.0.1");

      try {
        Router[myURL.pathname](res);
      } catch (error) {
        Router["/404"](res);
      }
    })
    .listen(5500, () => {
      console.log("server start");
    });
}

exports.start = start;
exports.use = use;
