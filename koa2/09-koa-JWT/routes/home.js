const Router = require("koa-router");
const router = new Router();
//增加
router.get("/", async (ctx, next) => {
  //获取cookie
  console.log(ctx.cookies.get("name"));

  //设置cookie
  ctx.cookies.set("location", "dalian");
  await ctx.render("home", { username: "rabble" }); //自动找views下面的home
});

module.exports = router;
