const router = require('express').Router()
const Book = require('../models/book')

router.get('/', async (request, response) => {
  const books = await Book.find({})

  response.json(books)
})

router.post('/', async (request, response) => {
  const { title, author, genre, grade, notes } = request.body
  const book = new Book({
    title,
    author,
    genre,
    grade,
    notes,
  })
  const createdBook = book.save()
  response.status(201).json(createdBook)
})

module.exports = router
