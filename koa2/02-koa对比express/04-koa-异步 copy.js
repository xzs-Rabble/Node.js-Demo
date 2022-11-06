const Koa = require("koa");

const app = new Koa();

app.use(async (ctx, next) => {
  console.log("1111111");
  let mytoken = await next();
  console.log("4444444", mytoken);
  ctx.body = "hello world";
});

app.use(async (ctx, next) => {
  console.log("2222222");

  //异步
  await delay(1000);
  ctx.token = "rabble";
  console.log("3333333");
  return "rabble";
});

function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

app.listen(5500);
