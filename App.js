const fs = require('fs');
const path = require('path');
const jsonfile = require('jsonfile');
const Joi = require('joi');
const chokidar = require('chokidar');
const express = require('express');
const app = express();

const ProductBar = require('./bar-app/controller/bar-access');
const ProductFoo = require('./foo-app/controller/foo-access');

const watcher = chokidar.watch( ['./foo-dir', './bar-dir'], {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  ignoreInitial: false,
  usePolling: true
});
// const csvFile = './woo-order/orders-export.csv';

watcher
  .on('add', root => {
    if(root.indexOf('bar-dir') === 0 && path.extname(root) === '.json') {
      jsonfile.readFile(root)
        .then( data => {
          return ProductBar.postBar(data);
          // console.log(data)
        })
        .catch(err => console.error(err));
    }
    if(root.indexOf('foo-dir') === 0 && path.extname(root) === '.json') {
      jsonfile.readFile(root)
        .then( data => {
          return ProductFoo.postFoo(data)
          // console.log(data)
        })
        .catch(err => console.error(err));
      // return console.log('Foo dir ', root)
    };

    console.log(`File ${root} has been add`);
  })
  .on('change', root => {
    if(root.indexOf('bar-dir') === 0 && path.extname(root) === '.json') {
      jsonfile.readFile(root)
        .then( data => {
          // console.log('Bar data ', data);
          return ProductBar.editBar(data);
        })
        .catch( err => console.error(err))
      return console.log(root);
    }
    if(root.indexOf('foo-dir') === 0 && path.extname(root) === '.json') {
      jsonfile.readFile(root)
      .then( data => {
        ProductFoo.editFoo(data);
        // console.log(data)
      })
      .catch(err => console.error(err))

      // console.log('Foot root edit ', root)
    }
    console.log(`File ${root} has been changed`);
  })
  .on( 'unlink', root => {
    var _assetID = root.split('/').splice(1,1);
    if(root.indexOf('bar-dir') === 0 && _assetID) {
      ProductBar.deleteBar(_assetID)
    }
    if(root.indexOf('foo-dir') === 0 && _assetID) {
      ProductFoo.deleteFoo(_assetID);
    }
    console.log(`File ${root} has been removed`)
  });


// One-liner for current directory

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Node Server connected successfully on Port: ${PORT}`));