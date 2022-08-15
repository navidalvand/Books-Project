const { authRouter } = require('./auth-router')
const { booksRouter } = require('./books-router')
const { usersRouter } = require('./users-router')
const router = require('express').Router()


router.use("/auth" , authRouter)
router.use("/user" , usersRouter)
router.use("/book" , booksRouter)

module.exports = router
