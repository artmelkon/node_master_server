const mongoose = require('mongoose');

const fooSchema = new mongoose.Schema({
  assetID: String,
  color_count: Number,
  class2Hex: String,
  clas3Hex: String
});

const Product = mongoose.model('Product', fooSchema);

module.exports = Product;