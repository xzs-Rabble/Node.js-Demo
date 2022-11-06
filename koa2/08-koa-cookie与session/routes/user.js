const Router = require("koa-router");
const router = new Router();
//增加
router.post("/", (ctx, next) => {
  console.log(ctx.request.body); //获取前端传来的参数
  ctx.body = {
    ok: 1,
    info: "add user success",
  };
});

//获取
router.get("/", (ctx, next) => {
  //获取前端传来的参数
  console.log(ctx.query);
  ctx.body = ["1111", "2222", "3333"];
});

router.put("/:id", (ctx, next) => {
  console.log(ctx.params);
  ctx.body = {
    ok: 1,
    info: "put user success",
  };
});

router.delete("/:id", (ctx, next) => {
  ctx.body = {
    ok: 1,
    info: "del user success",
  };
});

//增加
router.post("/login", (ctx, next) => {
  let { username, password } = ctx.request.body;
  // console.log(ctx.request.body); //获取前端传来的参数
  if (username === "rabble" && password === "123") {
    //设置sessionId
    ctx.session.user = {
      username: "rabble",
    };
    ctx.body = {
      ok: 1,
    };
  } else {
    ctx.body = {
      ok: 0,
    };
  }
});

module.exports = router;
