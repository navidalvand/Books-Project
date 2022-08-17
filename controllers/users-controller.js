const { AuthorModel } = require("../models/author-model");
const { UserModel } = require("../models/users-model");

class UserController {
  async getAllUsers(req, res, next) {
    try {
      console.log(req.body);
      const users = await UserModel.find();
      res.status(200).json({
        ststus: 200,
        message: "all users",
        users,
      });
    } catch (err) {
      next(err);
    }
  }

  async changeAccount(req, res, next) {
    try {
      const user = req.user;
      if (user.author == false) {
        const author = await UserModel.updateOne(
          { _id: user._id },
          { author: true }
        );
        const createAuthor = await AuthorModel.create({
          name: user.name,
          username: user.username,
          author_userID: user._id,
        });

        res.status(200).json({
          ststus: 200,
          message: "you'r author now",
        });
      } else {
        const author = await UserModel.updateOne(
          { _id: user._id },
          { author: false }
        );

        const deleteAuthor = await AuthorModel.deleteOne({
          author_userID: user._id,
        });

        res.status(200).json({
          ststus: 200,
          message: "you'r user now",
        });
      }
    } catch (err) {
      next(err);
    }
  }

  async getUserProfile(req, res, next) {
    try {
      const userID = req.params.id;
      const user = await UserModel.findById(userID);
      if (!user) throw { status: 404, message: "user with this ID not found" };
      res.status(200).json({
        status: 200,
        message: "user profile",
        user,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = {
  userController: new UserController(),
};
