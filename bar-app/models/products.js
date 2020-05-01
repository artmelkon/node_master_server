const mongoose = require('mongoose');

const barSchema = new mongoose.Schema({
  assetID: String,
  color_count: Number,
  class2Hex: String
})

const Product = mongoose.model('Product', barSchema);

module.exports = Product;