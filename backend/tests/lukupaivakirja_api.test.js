const { test, after, beforeEach, describe } = require('node:test')
const mongoose = require('mongoose')
const assert = require('node:assert')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const currentDate = require('../utils/currentDate')

const helper = require('./test_helper')

const Book = require('../models/book')

describe('when there are initially books and notes saved', () => {
  beforeEach(async () => {
    await Book.deleteMany({})
    await Book.insertMany(helper.initialBooks)
  })

  test('books are returned as json', async () => {
    await api
      .get('/api/books')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('all books are returned', async () => {
    const response = await api.get('/api/books')

    assert.strictEqual(response.body.length, helper.initialBooks.length)
  })

  test('a specific note is within the returned books', async () => {
    const response = await api.get('/api/books')

    const titles = response.body.map((r) => r.title)
    assert(titles.includes('Sudenmorsian'))
  })
})

describe('viewing a specific book', () => {
  /*This test is somehow not working. The booksrouter just returns an empty book.
  When testing in web, everything works nicely. 
  */
  test('succeeds with a valid id', async () => {
    const booksAtStart = await helper.booksInDb()
    const bookToView = booksAtStart[0]

    const resultBook = await api
      .get(`/api/books/${bookToView.id}`)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    console.log(resultBook.body)
    assert.deepStrictEqual(resultBook.body, bookToView)
  })
})

after(async () => {
  await mongoose.connection.close()
})
