
var casper = require('casper').create();
var fs = require('fs')
casper.start('https://ilearn.byui.edu', function(){
    this.sendKeys('input#username', 'STUDENT_USERNAME');
    this.sendKeys('input#password', 'STUDENT_PASSWORD');
});

casper.then(function(){
  this.click('input.btn-login');
});

casper.then(function(response){
  console.log(response.status);
  fs.write('testWrite.txt', response.status, 'w' )

});

casper.then(function() {
  this.capture('thisOne.png');
});


casper.run();
