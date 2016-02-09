define (function() {

// private part of interface, no one touches //
  var Veggies = {
    "lettuce": ".50",
    "tomato": ".50",
    "pickles": ".50",
    "onions": ".50",
    "peppers": ".50",
  
};

// start of public interface returning the value that the string is paired with inside my object //
      return {
        getPrice: function(typesOfVeggies) {
          // square brackets are used because it is a string and not a key word //
          return Veggies[typesOfVeggies];
        }      
    };
});