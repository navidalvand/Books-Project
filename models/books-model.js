const mongoose = require("mongoose");

const BookShema = mongoose.Schema({
    name : {type : String , require : true},
    bookAuthor : {type : mongoose.SchemaTypes.ObjectId},
    pageCount : {type : String , require : true}
}, { timestamps: true });

const BookModel = mongoose.model("book" , BookShema)

module.exports = {
    BookModel
}
