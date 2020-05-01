const fs = require('fs');
const path = require('path');
const jsonfile = require('jsonfile');
const Joi = require('joi');
const chokidar = require('chokidar');
const express = require('express');
const app = express();

const Product = require('./bar-app/bar-access')

const watcher = chokidar.watch( ['./foo-dir', './bar-dir'], {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  ignoreInitial: true
});
// const csvFile = './woo-order/orders-export.csv';

watcher
  .on('add', root => {
    // let fileExt = root.split('.').pop();
    if(root.indexOf('bar-dir') === 0 && path.extname(root) === '.json') {
      // connectBar.mongotBar();
      jsonfile.readFile(root)
        .then( data => {
          Product.jsonFile(data);
          console.log(data)
        })
        .catch(err => console.error(err));
    }
    if(root.indexOf('foo-dir') === 0 && path.extname(root) === '.json') {
      // connectFoo.mongoFoo();
      jsonfile.readFile(root)
        .then( data => console.log(data))
        .catch(err => console.error(err));
      // return console.log('Foo dir ', root)
    };

    console.log(`File ${root} has been add`);
  })
  .on('change', root => {
    console.log(`File ${root} has been changed`);
  })
  .on( 'unlink', root => console.log(`File ${root} has been removed`));  


// One-liner for current directory

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Node Server connected successfully on Port: ${PORT}`));