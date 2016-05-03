var casper = require('casper').create();
var fs = require('fs')
casper.start('https://secure.byui.edu/cas/login?service=https://web.byui.edu/Services/Login/?RedirectURL=https%3a%2f%2fmy.byui.edu%2f', function(){
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

















/*

console.log("Check this");

var page = new WebPage();
var system = require('system');
var testAdd = "http://google.com";
var address = "https://secure.byui.edu/cas/login?service=https://web.byui.edu/Services/Login/?RedirectURL=https%3a%2f%2fmy.byui.edu%2f";

page.open(address, function(status){
  if(status === "success"){
    console.log("Page was successfully opened");
    page.evaluate(function(){
      document.getElementById("username").value 
      document.getElementById("password").value =
      document.getElementById("password").focus();
      document.getElementsByName("lt")[0].click();
      setTimeout(50000);

      console.error("here!");

    });

    page.render('byui.jpeg');
  }
  phantom.exit();

})



*/
