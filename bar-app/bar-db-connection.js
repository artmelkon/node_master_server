const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bar_db', { useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify: false })
  .then( () => console.log('Bar MongoDB connected successfully'))
  .catch( err => console.error(err))

module.exports = exports = mongoose;