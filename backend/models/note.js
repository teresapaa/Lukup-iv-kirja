const mongoose = require('mongoose')

const schema = mongoose.Schema({
  content: String,
  date: {
    type: String,
    default: Date.now,
  },
})

schema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Note', schema)
