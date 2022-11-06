const Koa = require("koa");
const app = new Koa();
const router = require("./routes");

//统一加前缀
// router.prefix("/api");

//再注册应用级组件
// console.log(router);
app.use(router);

app.listen(5500);
