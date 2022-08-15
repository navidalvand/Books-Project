const router = require('express').Router()
const { authController } = require('../controllers/auth-controller')
const { registerValidation, loginValidation } = require('../validators/auth-validator')

router.post("/register" , registerValidation() , authController.register)
router.post("/login" , loginValidation() , authController.login)


module.exports = {
    authRouter : router
}
