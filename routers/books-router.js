const { booksController } = require('../controllers/books-controller')
const { autoLogin } = require('../middlewares/auto-login')

const router = require('express').Router()


router.post("/create" , autoLogin , booksController.createBook)
router.get("/all" , booksController.getAllBooks)
router.patch("/update/:id", autoLogin , booksController.updateBook)
router.delete("/delete/:id", autoLogin , booksController.deleteBook)
router.get("/user" , autoLogin , booksController.getAllBooksByAuthor)
router.get("/:id" , booksController.getBookById)
module.exports = {
    booksRouter : router
}
