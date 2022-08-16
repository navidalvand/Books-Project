const { AuthorModel } = require("../models/author-model");
const { BookModel } = require("../models/books-model");

class BooksController {
  async createBook(req, res, next) {
    try {
      const user = req.user;
      if (!user.author)
        throw { status: 400, message: "please switch to author account first" };
      const { name, pageCount } = req.body;
      if (!name || !pageCount)
        throw { status: 400, message: "name and page count is required" };
      const checkExistBook = await BookModel.findOne({ name });
      if (checkExistBook)
        throw { status: 400, message: `book with ${name} already existed` };
      const createdBook = await BookModel.create({
        name,
        pageCount,
        bookAuthor: user._id,
      });
      const allUserBook = await BookModel.find({ bookAuthor: user._id });
      if (allUserBook.length >= 10)
        await AuthorModel.updateOne(
          { author_userID: user._id },
          { type: "expert" }
        );
      res.status(201).json({
        status: 201,
        message: "book created",
        createdBook,
      });
    } catch (err) {
      next(err);
    }
  }

  async getAllBooks(req, res, next) {
    try {
      const books = await BookModel.find();

      res.status(200).json({
        status: 200,
        message: "all books",
        books,
      });
    } catch (err) {
      next(err);
    }
  }

  async updateBook(req, res, next) {
    try {
      const bookID = req.params.id;
      const user = req.user;
      const { name, pageCount } = req.body;
      if (!name && !pageCount)
        throw { status: 400, message: "please update at least one field" };
      const findBook = await BookModel.findOne({
        bookAuthor: user._id,
        _id: bookID,
      });
      if (!findBook)
        throw { status: 404, message: `book with ${bookID} ID not found` };
      const updatedBook = await BookModel.updateOne(
        { _id: bookID },
        { name, pageCount }
      );
      res.status(200).json({
        status: 200,
        message: "Book Updated",
      });
    } catch (err) {
      next(err);
    }
  }

  async deleteBook(req, res, next) {
    try {
      const user = req.user;
      const bookID = req.params.id;
      const findBook = await BookModel.findOne({
        bookAuthor: user._id,
        _id: bookID,
      });
      if (!findBook)
        throw { status: 404, message: `book with ${bookID} ID not found` };
      const deletedBook = await BookModel.deleteOne({ _id: bookID });
      const allUserBook = await BookModel.find({ bookAuthor: user._id });
      if (allUserBook.length < 10)
        await AuthorModel.updateOne(
          { author_userID: user._id },
          { type: "amatur" }
        );
      res.status(200).json({
        status: 200,
        message: "book deleted",
      });
    } catch (err) {
      next(err);
    }
  }

  async getBookById(req, res, next) {
    const bookID = req.params.id;
    const findBook = await BookModel.findById(bookID);
    if (!findBook)
      throw { status: 404, message: `book with ${bookID} ID not found` };
    res.status(200).json({
      status: 200,
      book: findBook,
    });
  }

  async getAllBooksByAuthor(req, res, next) {
    try {
      const user = req.user;
      if (!user.author)
        throw { status: 400, message: "please switch to author aacount first" };
      const findBooks = await BookModel.find({ bookAuthor: user._id });
      if (!findBooks) throw { status: 404, message: "you dont have book" };
      res.status(200).json({
        status: 200,
        message: "all books",
        books: findBooks,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = {
  booksController: new BooksController(),
};
