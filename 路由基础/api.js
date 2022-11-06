const apiRouter = {
  "/api/login": (res) => {
    render(res, 200, `{ok:1}`);
  },
};

function render(res, state, data, type = "") {
  res.writeHead(state, {
    "Content-Type": `${type ? type : "application/json"};charset=utf8`,
  });
  res.write(data);
  res.end();
}

module.exports = apiRouter;
