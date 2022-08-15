const bcrypt = require("bcrypt");

function hashPassord(str) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(str, salt);
}

function checkHash(userPassword, realPassword) {
  return bcrypt.compareSync(userPassword, realPassword);
}

module.exports = {
  hashPassord,
  checkHash,
};
