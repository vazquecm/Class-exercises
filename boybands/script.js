var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vege-tables");

var outputBands = "";
var outputVegetables = "";

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

  // Add the band names into the correct <div>
  currentBand = bands[loopTracker];
  outputBands = outputBands + "<p>" + currentBand + "</p>";
  console.log(outputBands);

  // Add the veggie names into the correct <div>
  currentVeggie = vegetables[loopTracker];
  outputVegetables = outputVegetables + "<p>" + currentVeggie +"</p>";
  console.log(outputVegetables);

}
bandElement.innerHTML = outputBands;
veggieElement.innerHTML = outputVegetables;

