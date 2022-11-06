const Router = require("koa-router");
const userRouter = require("./user");
const listRouter = require("./list");
const homeRouter = require("./home");
const router = new Router();

//先注册路由级组件
console.log(Router());
router.use("/user", userRouter.routes());
router.use("/list", listRouter.routes());
router.use("/home", homeRouter.routes());
// router.redirect("/", "home");

module.exports = router;
