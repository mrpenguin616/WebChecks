var casper = require('casper').create();

casper.start('https://mail.office365.com', function(){
    this.sendKeys('input#cred_userid_inputtext', 'ADMIN_EMAIL_ADDRESS');
});

casper.then(function() {
  this.click('input#cred_password_inputtext');
});

casper.then(function(){
  this.sendKeys('input#cred_password_inputtext', 'ADMIN_PASSWORD');
  casper.page.event.key.Enter;
});

casper.then(function(){
  this.waitForSelector("input#username",
    function pass () {
        console.log("page has loaded");
    },
    function fail () {
        console.log("Did not load the page");
    }
  );
});

casper.then(function(){
  this.sendKeys('input#username', 'ADMIN_USERNAME');
  this.sendKeys('input#password', 'ADMIN_PASSWORD');
});

casper.then(function(){
  this.click('input.btn-login');
});

casper.then(function(response){
  console.log(response.status);

});

casper.then(function() {
  this.capture('outlook.png');
});


casper.run();
