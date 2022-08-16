const { commentController } = require('../controllers/comments-controller')

const router = require('express').Router()


router.post("/add" , commentController.addComment)




module.exports = {
    commentRouter : router
}
