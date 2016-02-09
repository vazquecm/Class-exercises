define (function() {
  
// private part of interface, no one touches //
  var Meat = {
    "ham": ".50",
    "turkey": ".50",
    "salami": ".50",
    "roast beef": ".50",
    "chicken": ".50",
  };

// start of public interface returning the value that the string is paired with inside my object //
      return {
        getPrice: function(typesOfMeat) {
    // square brackets are used because it is a string and not a key word //      
          return Meat[typesOfMeat];
        }
    };

});
