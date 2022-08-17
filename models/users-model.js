const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: String,
    username: {
      type: String,
      require: true,
    },
    password: String,
    token: String,
    author: { type: Boolean, default: false },
    role : {
      type : String,
      enum : ["admin" , "user"],
      default : "user",
      require : true
    }
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = { UserModel };
