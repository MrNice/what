#! /usr/bin/env node

var spinner = require('char-spinner');

spinner();

setTimeout(function() {
  console.log('CHICKENBUTT!');
  process.exit();
}, Math.random() * 4000 + 2000);

process.on('SIGINT', function() {
  console.log('hickenbutt...');
  process.exit();
});
