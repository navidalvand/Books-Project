const { autoLogin } = require("../middlewares/auto-login");
const { authRouter } = require("./auth-router");
const { booksRouter } = require("./books-router");
const { commentRouter } = require("./comments-router");
const { usersRouter } = require("./users-router");
const router = require("express").Router();

router.use("/auth", authRouter);
router.use("/user", autoLogin, usersRouter);
router.use("/book" , autoLogin , booksRouter);
router.use("/comment", autoLogin, commentRouter);

module.exports = router;
