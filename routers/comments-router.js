const { commentController } = require('../controllers/comments-controller')
const { autoLogin } = require('../middlewares/auto-login')

const router = require('express').Router()


router.post("/add/:id" , autoLogin , commentController.addComment)
router.patch("/accept/:id" , autoLogin , commentController.acceptComments)
router.patch("/reject/:id" , autoLogin , commentController.rejectComments)
router.post("/replay" , autoLogin , commentController.replayComment)
router.get("/book/all/:id" , autoLogin , commentController.bookComments)
router.get("/all" , autoLogin , commentController.allComments)
router.get("/user" , autoLogin , commentController.myComments)



module.exports = {
    commentRouter : router
}
