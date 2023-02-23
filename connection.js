const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/motocross')
  .then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.log(err);
  })

module.exports = mongoose
