const { commentController } = require('../controllers/comments-controller')
const { autoLogin } = require('../middlewares/auto-login')

const router = require('express').Router()


router.post("/add/:id" , autoLogin , commentController.addComment)
router.patch("/accept/:id" , autoLogin , commentController.acceptComments)
router.post("/replay" , autoLogin , commentController.replayComment)





module.exports = {
    commentRouter : router
}
