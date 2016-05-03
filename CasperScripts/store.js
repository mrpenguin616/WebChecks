var casper = require('casper').create();

casper.start('https://www.byuistore.com');

casper.then(function(response){
  console.log(response.status);

});

casper.then(function() {
  this.capture('thisOne.png');
});

casper.run();
