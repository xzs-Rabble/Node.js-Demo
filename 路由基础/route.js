const fs = require("fs");

const route = {
  "/login": (res) => {
    render(res, 200, "./static/login.html");
  },
  "/home": (res) => {
    render(res, 200, "./static/home.html");
  },
  "/404": (res) => {
    render(res, 404, "./static/404.html");
  },
  "/favicon.ico": (res) => {
    render(res, 200, "./static/favicon.ico", "image/x-icon");
  },
};

function render(res, state, path, type = "") {
  res.writeHead(state, {
    "Content-Type": `${type ? type : "text/html"};charset=utf8`,
  });
  res.write(fs.readFileSync(path), "utf-8");
  res.end();
}

module.exports = route;
