const Koa = require("koa");
const app = new Koa();
const static = require("koa-static");
const path = require("path");
const router = require("./routes");
const bodyParser = require("koa-bodyparser");
const views = require("koa-views");
const session = require("koa-session-minimal");

//统一加前缀
// router.prefix("/api");

//再注册应用级组件
// console.log(router);
app.use(bodyParser()); //获取前端传来的post参数
app.use(static(path.join(__dirname, "public"))); //获取静态资源

//配置 模板引擎
app.use(views(path.join(__dirname, "views"), { extension: "ejs" }));

//session配置
app.use(
  session({
    key: "rabbleSessionId",
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);

//session拦截
app.use(async (ctx, next) => {
  if (ctx.url.includes("login")) {
    await next();
    return;
  }
  if (ctx.session.user) {
    ctx.session.date = Date.now();
    await next();
  } else {
    ctx.redirect("/login");
  }
});

app.use(router);
app.listen(5500);
