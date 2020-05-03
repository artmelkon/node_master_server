const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/foo_db', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then( () => console.log('Foo MongoDB connected successfully'))
  .catch( err => console.error(err))

module.exports = exports = mongoose;