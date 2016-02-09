requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min"
  }
});

require (
  ["bread", "cheese", "meat", "condiments", "veggies", "script"], 
  function(bread, cheese, meat, condiments, veggies, script) {

});