const { authRouter } = require('./auth-router')
const { booksRouter } = require('./books-router')
const { commentRouter } = require('./comments-router')
const { usersRouter } = require('./users-router')
const router = require('express').Router()


router.use("/auth" , authRouter)
router.use("/user" , usersRouter)
router.use("/book" , booksRouter)
router.use("/comment" , commentRouter)

module.exports = router
