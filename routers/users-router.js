const { userController } = require('../controllers/users-controller')
const { autoLogin } = require('../middlewares/auto-login')

const router = require('express').Router()

router.get("/all" , userController.getAllUsers)
router.patch("/change-account" , autoLogin , userController.changeAccount)
router.get("/profile/:id" , userController.getUserProfile)


module.exports = {
    usersRouter : router
}
