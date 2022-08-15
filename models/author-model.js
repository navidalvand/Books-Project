const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema(
  {
    author_userID: mongoose.SchemaTypes.ObjectId,
    name: String,
    username: { type: String, require: true },
    type: { type: String, enum: ["expert", "amatur"] , default : "amatur"},
  },
  {
    timestamps: true,
  }
);

const AuthorModel = mongoose.model("author", AuthorSchema);

module.exports = { AuthorModel };
