const Koa = require("koa");

const app = new Koa();

//ctx === content上下文
//ctx包含response、request
app.use((ctx, next) => {
  // ctx.response.body = "<b>hello world</b>";
  //   ctx.response.body = { name: "rabble" };
  ctx.body = "<b>hello world</b>";
});

app.listen(5500);
