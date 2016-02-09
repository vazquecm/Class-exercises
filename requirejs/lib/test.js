var Sandwich = (function(Sandwich) {

// private interface of IFFE, no one can change this part //  

  var bread = $("#bread").val();
  var meat = $("#meat").val();
  var cheese = $("#cheese").val();
  var veggies = $("#veggies").val();
  var condiments = $("#condiments").val();
  console.log(Sandwich);


    return {

// getting the values of each ingrediant needed in prior function //
    buildSandwich: function() {
      addBread(bread) = this.breadPrice + val();
      addCheese(cheese) = this.cheesePrice + val();
      addMeat(meat) = this.meatPrice + val();
      addCondiments(condiments) = this.condimentsPrice + val();
      addveggies(veggies) = this.veggiesPrice + val();

    }

  }  

})(Sandwich);

// start click function to add bread to total due  //

  var totalDue = "";  

$("#bread").click(function() {
  // getting the price of bread and setting it to add to sandwich //
  var breadPrice = Sandwich.getBreadPrice;
  // updating the total to include the bread price //
  totalDue += Number(breadPrice);
  // adding the total to the html //
  $("totalDue").html(totalDue);
  console.log(totalDue);
})
