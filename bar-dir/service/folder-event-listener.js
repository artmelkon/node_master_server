const chokidar = require('chokidar');

const watcher = chokidar.watch( ['foo-dir', 'bar-dir'], {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  ignoreInitial: true
});
// const csvFile = './woo-order/orders-export.csv';

function eventWatcher() {
  watcher
  .on('addDir', path => {
    let fileExt = path.split('.').pop();
    if (path.indexOf('bar-dir') === 0) return console.log('Bar dir ', path);
    if(path.indexOf('foo-dir') === 0) return console.log('Foo dir ', path);

    console.log(`File ${path} has been add`);
  })
  .on('change', path => {
    console.log(`File ${path} has been changed`);
  })
  .on( 'unlinkDir', path => console.log(`File ${path} has been removed`));  
}

module.exports = eventWatcher;