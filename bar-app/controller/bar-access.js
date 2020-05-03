const mongoose = require('../utils/bar-db-connection');
const Product = require('../models/products');

const ProductBar = class {
  static postBar(data) {
    Product.findOne({assetID: data.assetID})
      .then( result => {
        if(!result) {
          const product = new Product({
            assetID: data.assetID,
            color_count: data.color_count,
            class2Hex: data.class2Hex,
            class3Hex: data.class3Hex
          })
          console.log('Bar db ', data.assetID);
      
          return product.save();
        }
      });
  }

  static editBar(data) {
    Product.findOne({assetID: data.assetID})
      .then( prod => {
        prod.color_count = data.color_count;
        prod.class2Hex = data.class2Hex;
        prod.class3Hex = data.class3Hex;
        console.log(prod._id)
        return prod.save();

      })
      .catch(err => console.error(err))
    // console.log(data.assetID)
  }

  static deleteBar(_assetID) {
    Product.findOneAndDelete({assetID: _assetID}, err => {
      if(err) return handleError(err);
    });
    // console.log(_assetID)
  }
}



module.exports = ProductBar;