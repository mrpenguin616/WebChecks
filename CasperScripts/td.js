var casper = require('casper').create();

casper.start('https://td.byui.edu', function(){
  this.sendKeys('input#username', 'ADMIN_USERNAME');
  this.sendKeys('input#password', 'ADMIN_PASSWORD');
  this.click('input.btn-login');
});

casper.then(function(response){
  console.log(response.status);

});

casper.then(function() {
  this.capture('thisOne.png');
});

casper.run();
