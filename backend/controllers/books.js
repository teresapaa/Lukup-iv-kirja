const router = require('express').Router()
const Book = require('../models/book')

router.get('/', async (request, response) => {
  const books = await Book.find({})

  response.json(books)
})

router.get('/:id', async (request, response) => {
  const book = await Book.findById(request.params.id)

  if (book) {
    response.json(book)
  } else {
    response.status(404).end()
  }
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

router.delete('/:id', async (request, response) => {
  await Book.findByIdAndDelete(request.params.id)
  response.status(204).end()
})

module.exports = router
