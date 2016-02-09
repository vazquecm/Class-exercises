define (function() {

// private part of interface, no one touches //
var Cheese = {
    "monteray jack": ".50",
    "swiss": ".50",
    "mozzarella": ".50",
    "havarti": ".50",
    "cheddar": ".50",
  };

// start of public interface returning the value that the string is paired with inside my object //
      return {
        getPrice: function(typesOfCheese) {
    // square brackets are used because it is a string and not a key word //        
            return Cheese[typesOfCheese];
        }
    };
    
});
