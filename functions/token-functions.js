const jwt = require("jsonwebtoken");

function tokenGenerator(payload) {
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_KEY);
  return token;
}

function tokenValidator(token) {
  const result = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
  if (!result) {
    throw { status: 401, message: "please login into your account" };
  } else {
    return result;
  }
}


module.exports = {
    tokenGenerator,
    tokenValidator
}
