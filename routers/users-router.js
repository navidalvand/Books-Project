const { userController } = require('../controllers/users-controller')

const router = require('express').Router()

router.get("/all" , userController.getAllUsers)
router.patch("/change-account" , userController.changeAccount)
router.get("/profile/:id" , userController.getUserProfile)


module.exports = {
    usersRouter : router
}
