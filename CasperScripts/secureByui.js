var casper = require('casper').create();

casper.start('https://secure.byui.edu', function(){
    this.sendKeys('input#username', 'STUDENT_USERNAME');
    this.sendKeys('input#password', 'STUDENT_PASSWORD');
});

casper.then(function(){
  this.click('input.btn-login');
});

casper.then(function(response){
  console.log(response.status);

});

casper.then(function() {
  this.capture('secureByuiEdu.png');
});


casper.run();
