const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema(
  {
    user: { type: mongoose.SchemaTypes.ObjectId, require: true },
    book: { type: mongoose.SchemaTypes.ObjectId, require: true },
    text: { type: String, require: true },
    replaydTo: { type: mongoose.SchemaTypes.ObjectId },
    status: {
      type: String,
      enum: ["pending", "accepted"],
      default: "pending",
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const CommentModel = mongoose.model("comment", CommentSchema);

module.exports = {
    CommentModel
}
