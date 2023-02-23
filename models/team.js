const mongoose = require('../connection')
const Rider = require('./rider')

const Schema = mongoose.Schema

const teamSchema = new Schema({
  team: {
    type: String,
    minLength: 2,
    maxLength: 17,
    unique: true,
    required: true
  },
  manager: {
    type: String,
    minLength: 2,
    maxLength: 17,
    unique: true,
    required: true
  },
  manufacturer: {
    type: String,
    minLength: 2,
    maxLength: 17,
    required: true
  },
  riders: [Rider.schema]
})

const Team = mongoose.model('Team', teamSchema)

module.exports = Team
