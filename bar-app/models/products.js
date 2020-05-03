const mongoose = require('mongoose');

const barSchema = new mongoose.Schema({
  assetID: String,
  color_count: Number,
  class2Hex: String,
  class3Hex: String
})

module.exports = mongoose.model('Product', barSchema);