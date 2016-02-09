define(["jquery", "bread", "cheese", "condiments", "veggies", "meat"], 
  function($, bread, cheese, condiments, veggies, meat) { 

var Sandwich = (function(Sandwich) {

// private interface of IFFE, no one can change this part //  

  var bread = $("#bread").val();
  var cheese = $("#cheese").val();
  var condiments = $("#condiments").val();
  var veggies = $("#veggies").val();
  var meat = $("#meat").val();
  
  console.log(Sandwich);

});


var totalDue = 0;  

// bread = {
//   one: 1,
//   cat: "Jojo"
// }

//   bread.one
//   bread.cat


// start click function to add bread to total due  //

$("#bread input").click(function(breadPrice) {
  // getting the price of bread and setting it to add to sandwich //
  console.log(this)
  getPrice = bread.getPrice(this.value);
  // updating the total to include the bread price //
  console.log(totalDue)
  totalDue += parseFloat(getPrice);
  // adding the total to the html //
  // $("totalDue").html(totalDue);
  console.log(getPrice)
  console.log(totalDue);

});

/// cheese click function to add to sandwich ///

$("#cheese input").click(function(cheesePrice) {
  // getting the price of bread and setting it to add to sandwich //
  console.log(this)
  getPrice = cheese.getPrice(this.value);
  // updating the total to include the bread price //
  console.log(totalDue)
  totalDue += parseFloat(getPrice);
  // adding the total to the html //
  // $("totalDue").html(totalDue);
  console.log(getPrice)
  console.log(totalDue);

});

/// condiments click function to add to sandwich ///

$("#condiments input").click(function(condimentsPrice) {
  // getting the price of bread and setting it to add to sandwich //
  console.log(this)
  getPrice = condiments.getPrice(this.value);
  // updating the total to include the bread price //
  console.log(totalDue)
  totalDue += parseFloat(getPrice);
  // adding the total to the html //
  // $("totalDue").html(totalDue);
  console.log(getPrice)
  console.log(totalDue);

});

/// veggie click function to add to sandwich ///

$("#veggies input").click(function(veggiesPrice) {
  // getting the price of bread and setting it to add to sandwich //
  console.log(this)
  getPrice = veggies.getPrice(this.value);
  // updating the total to include the bread price //
  console.log(totalDue)
  totalDue += parseFloat(getPrice);
  // adding the total to the html //
  // $("totalDue").html(totalDue);
  console.log(getPrice)
  console.log(totalDue);

});

/// meat click function to add to sandwich ///

$("#meat input").click(function(meatPrice) {
  // getting the price of bread and setting it to add to sandwich //
  console.log(this)
  getPrice = meat.getPrice(this.value);
  // updating the total to include the bread price //
  console.log(totalDue)
  totalDue += parseFloat(getPrice);
  // adding the total to the html //
  // $("totalDue").html(totalDue);
  console.log(getPrice)
  console.log(totalDue);

});

/// gathering total of all ingrediants and adding them for total due ///





})



