const mongoose = require('./bar-db-connection');

const Product = class {
  static jsonFile(data) {
    console.log(data.assetID);
  }
}

module.exports = Product;