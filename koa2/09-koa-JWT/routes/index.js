const Router = require("koa-router");
const userRouter = require("./user");
const listRouter = require("./list");
const homeRouter = require("./home");
const loginRouter = require("./login");
const uploadRouter = require("./upload");
const router = new Router();

//先注册路由级组件
// console.log(router);
router.use("/user", userRouter.routes());
router.use("/list", listRouter.routes());
router.use("/home", homeRouter.routes());
router.use("/login", loginRouter.routes());
router.use("/upload", uploadRouter.routes());
// router.redirect("/", "home");

module.exports = router;
