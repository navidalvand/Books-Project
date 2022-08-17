const { commentController } = require('../controllers/comments-controller')

const router = require('express').Router()


router.post("/add/:id" , commentController.addComment)
router.patch("/accept/:id" , commentController.acceptComments)
router.patch("/reject/:id" , commentController.rejectComments)
router.post("/replay" , commentController.replayComment)
router.get("/book/all/:id" , commentController.bookComments)
router.get("/all" , commentController.allComments)
router.get("/user" , commentController.myComments)



module.exports = {
    commentRouter : router
}
