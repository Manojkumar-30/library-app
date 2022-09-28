const mongoose = require('mongoose');
const url ="mongodb+srv://manojkumar:manoj123@cluster0.qcrnj2y.mongodb.net/librayapp"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const booksSchema = mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  description: String,
  rating: String,
  image: String,
});

const booksData = mongoose.model("booksDetails", booksSchema);

module.exports = booksData;
