const Koa = require("koa");
const Router = require("koa-Router");

const app = new Koa();
const router = new Router();

//增加
router.post("/list", (ctx, next) => {
  ctx.body = {
    ok: 1,
    info: "add list success",
  };
});

//获取
router.get("/list", (ctx, next) => {
  ctx.body = ["1111", "2222", "3333"];
});

router.put("/list/:id", (ctx, next) => {
  console.log(ctx.params);
  ctx.body = {
    ok: 1,
    info: "put list success",
  };
});

router.delete("/list/:id", (ctx, next) => {
  ctx.body = {
    ok: 1,
    info: "del list success",
  };
});

// console.log(router);
app.use(router);

app.listen(5500);
