const { model, Schema } = require('mongoose')

const Saved = new Schema({

  title: String,
  authors: String,
  description: String,
  image: String,
  link: String,
  apiID: String
})

module.exports = model('Saved', Saved)
