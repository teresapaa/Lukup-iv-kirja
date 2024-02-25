const Book = require('../models/book')

const initialBooks = [
  {
    title: 'Cruel prince',
    author: 'Holly Jackson',
    genre: 'fantasia',
    grade: 4,
    notes: 'Jännittävä ja hauska.',
  },
  {
    title: 'Sudenmorsian',
    author: 'Aino Kallas',
    genre: 'klassikko',
    grade: 5,
    notes: 'Kirja oli mielenkiintoinen ja kauniisti kirjoitettu.',
  },
]

const booksInDb = async () => {
  const books = await Book.find({})
  return books.map((book) => book.toJSON())
}
module.exports = {
  initialBooks,
  booksInDb,
}
