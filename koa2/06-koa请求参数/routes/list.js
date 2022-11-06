const Router = require("koa-router");
const router = new Router();
//增加
router.post("/", (ctx, next) => {
  ctx.body = {
    ok: 1,
    info: "add list success",
  };
});

//获取
router.get("/", (ctx, next) => {
  ctx.body = ["1111", "2222", "3333"];
});

router.put("/:id", (ctx, next) => {
  console.log(ctx.params);
  ctx.body = {
    ok: 1,
    info: "put list success",
  };
});

router.delete("/:id", (ctx, next) => {
  ctx.body = {
    ok: 1,
    info: "del list success",
  };
});

module.exports = router;
