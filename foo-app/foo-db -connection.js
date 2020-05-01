const mongoose = require('mongoose');

exports.mongoFoo = () => {
  mongoose.connect('mongodb://localhost/foo_db', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then( () => console.log('Foo MongoDB connected successfully'))
    .catch( err => console.error(err))
}