const mongoose = require('../connection')

const Schema = mongoose.Schema

const riderSchema = new Schema({
  rider: {
    type: String,
    minLength: 2,
    maxLength: 17,
    unique: true,
    sparse: true,
    required: true
  },
  number: {
    type: Number,
    min: 1,
    max: 99,
    unique: true,
    sparse: true,
    required: true
  },
  country: {
    type: String,
    minLength: 2,
    maxLength: 17,
    required: true
  },
  mechanic: {
    type: String,
    minLength: 2,
    maxLength: 17,
    required: true
  }
})

const Rider = mongoose.model('Rider', riderSchema)

module.exports = Rider
