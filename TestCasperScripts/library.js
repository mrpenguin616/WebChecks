var casper = require('casper').create();
var fs = require('fs')

casper.start('https://library.byui.edu');

casper.then(function(response){
  console.log(response.status);
  fs.write('Out.txt', response.status, 'w' )
});

casper.then(function() {
  this.capture('thisOne.png');
});


casper.run();
