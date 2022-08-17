const { booksController } = require('../controllers/books-controller')

const router = require('express').Router()


router.post("/create"  , booksController.createBook)
router.get("/all" , booksController.getAllBooks)
router.patch("/update/:id" , booksController.updateBook)
router.delete("/delete/:id" , booksController.deleteBook)
router.get("/user"  , booksController.getAllBooksByAuthor)
router.get("/:id" , booksController.getBookById)

module.exports = {
    booksRouter : router
}
