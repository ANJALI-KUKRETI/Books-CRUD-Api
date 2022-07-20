const mongoose = require("mongoose");
const notEmptyRan = [];
const notEmptyMsg = "Please add at least one category in the categories array";
var notEmpty = function (columns) {
  if (columns.length === 0) {
    notEmptyRan.push(false);
    return false;
  } else {
    notEmptyRan.push(true);
    return true;
  }
};

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A Book name is required"],
    trim: true,
    unique: true,
  },
  author: {
    type: String,
    default: "unknown",
    trim: true,
  },
  pageCount: {
    type: Number,
    required: [true, "A book must have definite no. of pages"],
  },
  description: {
    type: String,
    maxLength: [80, "A description must have less or equal than 40 characters"],
    minLength: [20, "A description must have more or equal than 10 characters"],
  },
  categories: {
    type: [String],
    validate: (v) => Array.isArray(v) && v.length > 0,
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
