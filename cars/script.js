  /*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/

/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */
var Make = function() {
  this.makeName = "Nissan";
};

/*
Create a function, Model, to hold the 
corresponding property and value
*/
var Model = function(vehicleModel) {
  this.modelName = vehicleModel;
};

// Define the prototype of a Model?
// Model ---> Make
Model.prototype = new Make();

// Define a Car
var Truck = function(truckColor) {
  this.color = truckColor;
};

var Car = function(carColor) {
  this.color = carColor;
};

var Motorcycle = function(motoColor) {
  this.color = motoColor;
};

// Define the prototype of a Car?
// Truck ---> Model ---> Make
Truck.prototype = new Model("Accord");
Car.prototype = new Model("Accord");
Motorcycle.prototype = new Model("Accord");

// Create the first car
var myTruck = new Truck("Blue");

// Create the second car
var markTruck = new Truck("Metallic Sunshine");

// Create the third car
var juanTruck = new Truck("Golden Sunset");

console.log("myTruck", myTruck);
console.log("markTruck", markTruck);
console.log("juanTruck", juanTruck);