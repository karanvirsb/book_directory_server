const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const imageSchema = mongoose.Schema({
    // function: {
    //     arguments: String,
    //     body: String,
    // },
    url: String,
    type: String,
});

const bookSchema = new mongoose.Schema({
    bid: String,
    image: imageSchema,
    title: String,
    author: [String],
    date_info: String,
    publisher: String,
    language: String,
    pages: { type: String, minLength: 1 },
    description: String,
    category: String,
});

bookSchema.plugin(mongoosePaginate);

const Book = mongoose.model("Books", bookSchema, "Books");

// bookSchema.findByTitle = function (name) {
//     return this.where({ title: new RegExp(name, "i") });
// };

module.exports = Book;
