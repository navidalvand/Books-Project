const { tokenValidator } = require("../functions/token-functions");
const { UserModel } = require("../models/users-model");

const autoLogin = async (req, res, next) => {
  try {
    const authorization = req?.headers?.authorization;
    if (!authorization) {
      throw { status: 401, message: "please login into your account" };
    } else {
      let token = authorization.split(" ")?.[1]
      if (!token) {
        throw { status: 401, message: "please login into your account" };
      } else {
        const result = tokenValidator(token);
        const user = await UserModel.findOne({ username: result });
        if (!user) throw { status: 400, message: "user not found" };
        req.user = user;
      }
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  autoLogin,
};
