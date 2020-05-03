const mongoose = require('../utils/foo-db -connection');
const Product = require('../models/products');

const ProductFoo = class {
  static postFoo(data) {
    Product.findOne({assetID: data.assetID})
      .then( result => {
        if(!result) {
          const product = new Product({
            assetID: data.assetID,
            color_count: data.color_count,
            class2Hex: data.class2Hex,
            class3Hex: data.class3Hex
          });
          
          console.log('Foo db', data.assetID);
          return product.save();      
        }
      })
  }

  static editFoo(data) {
    Product.findOne({assetID: data.assetID})
      .then( prod => {
        prod.color_count = data.color_count;
        prod.class2Hex = data.class2Hex;
        prod.class3Hex = data.class3Hex;
        return prod.save();
      })
    console.log(data)
  }

  static deleteFoo(_assetID) {
    Product.findOneAndDelete({assetID: _assetID}, err => {
      if(err) return handleError(err);
    });
    console.log(_assetID)
  }
}

module.exports = ProductFoo;