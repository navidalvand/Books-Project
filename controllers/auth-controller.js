const { validationResult } = require("express-validator");
const { hashPassord, checkHash } = require("../functions/hash-password");
const {
  tokenGenerator,
} = require("../functions/token-functions");
const { AuthorModel } = require("../models/author-model");
const { UserModel } = require("../models/users-model");

class AuthController {
  async register(req, res, next) {
    try {
      const { name, username, password, confirm_password, author, role } =
        req.body;
      const result = validationResult(req);
      if (result.errors.length > 0) {
        res.status(400).json({
          status: 400,
          data: null,
          errors: result,
        });
      } else {
        const existUser = await UserModel.findOne({ username });
        if (!existUser) {
          if (password == confirm_password) {
            const hashedPassword = hashPassord(password);
            const token = tokenGenerator(username);
            const registeredAccount = await UserModel.create({
              name,
              username,
              password: hashedPassword,
              token,
              author,
              role
            });

            if (author == true) {
              AuthorModel.create({
                author_userID: registeredAccount._id,
                username,
                name,
                role
              });
            }
            res.send(registeredAccount);
          } else {
            throw {
              status: 400,
              message: "password and confirm password is not same",
            };
          }
        } else {
          res.status(400).json({
            status: 400,
            success: false,
            message: "username already exist",
          });
        }
      }
    } catch (err) {
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const result = validationResult(req);
      if (result.errors.length > 0) {
        res.status(400).json({
          status: 400,
          data: null,
          errors: result,
        });
      } else {
        const existUser = await UserModel.findOne({ username });
        if (!existUser) {
          res.status(400).json({
            status: 400,
            success: false,
            message: "plase register your account",
          });
        } else {
          const compareResult = checkHash(password, existUser.password);
          console.log(compareResult);
          if (!compareResult)
            throw { status: 400, message: "username or password is wrong" };

          const token = tokenGenerator(username);
          const updateToken = await UserModel.updateOne(
            {
              username,
            },
            token
          );
          if (updateToken.modifiedCount == 0)
            throw { status: 404, message: "user not found" };
          const account = await UserModel.findOne({ username });
          res.status(200).json({
            status: 200,
            messaga: "login",
            account,
          });
        }
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = {
  authController: new AuthController(),
};
