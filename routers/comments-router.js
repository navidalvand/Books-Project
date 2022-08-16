const { commentController } = require('../controllers/comments-controller')
const { autoLogin } = require('../middlewares/auto-login')

const router = require('express').Router()


router.post("/add/:id" , autoLogin , commentController.addComment)
router.post("/replay/:id" , autoLogin , commentController.replayComment)





module.exports = {
    commentRouter : router
}
