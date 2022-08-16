const { BookModel } = require("../models/books-model");
const { CommentModel } = require("../models/comments-model");

class CommentController {
  async addComment(req, res, next) {
    try {
      const user = req.user;
      const { text } = req.body;
      const bookID = req.params.id;
      if (!text) throw { status: 400, message: "text is empty" };
      const findBook = await BookModel.findById(bookID);
      if (!findBook)
        throw { status: 404, message: `book with ${bookID} ID not found` };
      const addedComment = await CommentModel.create({
        user: user._id,
        book: bookID,
        text,
      });
      if (!addedComment) throw { status: 500, message: "faild to ad comment" };
      res.status(200).json({
        status: 200,
        message: "comment added",
        addedComment,
      });
    } catch (err) {
      next(err);
    }
  }

  async replayComment(req, res, next) {
    try {
      const user = req.user;
      const { replaydTo, bookID } = req.query;
      const { text } = req.body;
      if (!text) throw { status: 400, message: "text is empty" };
      if (!replaydTo || !bookID)
        throw { status: 400, message: "replaydTo OR book is empty" };
      const findBook = await BookModel.findById(bookID);
      if (!findBook)
        throw { status: 404, message: `book with ${bookID} ID not found` };
      const findComment = await CommentModel.findOne({
        _id: replaydTo,
        book: bookID,
        status: "accepted",
      });
      if (!findComment)
        throw {
          status: 404,
          message: `comment with ${replaydTo} ID not found`,
        };
      const addReplay = await CommentModel.create({
        text,
        user: user._id,
        replaydTo,
        book: bookID,
      });
      res.status(200).json({
        status: 200,
        message: "replay added",
        addReplay,
      });
    } catch (err) {
      next(err);
    }
  }

  async allComments(req, res, next) {
    try {
        const allComments = await CommentModel.find({status : "accepted"})
        res.status(200).json({
            status : 200,
            message : "all comments",
            allComments
        })
    } catch (err) {
      next(err);
    }
  }

  async acceptComments(req, res, next) {
    try {
      const commentID = req.params.id;
      const findComment = await CommentModel.findById(commentID);
      if (!findComment)
        throw {
          status: 404,
          message: `comment with ${commentID} ID not found`,
        };
      if (findComment.status == "accepted")
        throw { status: 400, message: "this comment already accepted" };
      const acceptedComment = await CommentModel.updateOne(
        { _id: commentID },
        { status: "accepted" }
      );
      res.status(200).json({
        status: 200,
        message: "comment accepted",
        acceptStatus: acceptedComment,
      });
    } catch (err) {
      next(err);
    }
  }

  async rejectComments(req, res, next) {
    try {
        const commentID = req.params.id
        const findComment = await CommentModel.findById(commentID)
        if(!findComment) throw {status : 404 , message : `comment with ${commentID} ID not found`}
        if(findComment.status == "accepted") throw {status : 400 , message : "this comment already accepted"}
        const rejectedComment = await CommentModel.deleteOne({_id : commentID})
        res.status(200).json({
            status : 200,
            message : "comment rejected",
            rejectedComment
        })
    } catch (err) {
      next(err);
    }
  }

  async myComments(req, res, next) {
    try {
        const user = req.user
        const findComments = await CommentModel.find({user : user._id})
        res.status(200).json({
            status : 200,
            message : "your comments",
            comments : findComments
        })
    } catch (err) {
      next(err);
    }
  }

  async bookComments(req, res, next) {
    try {
      const bookID = req.params.id;
      const findBook = await BookModel.findById(bookID);
      if (!findBook)
        throw { status: 404, message: `book with ${bookID} ID not found` };
      const comments = await CommentModel.find({
        book: bookID,
        status: "accepted",
      });
      res.status(200).json({
        status: 200,
        message: "all comments",
        comments,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = {
  commentController: new CommentController(),
};
