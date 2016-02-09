define (function() {

// private part of interface, no one touches //
  var Bread = {
    "white": "1.50",
    "whole wheat": "1.00",
    "french": "1.50",
    "hoagie roll": "1.25",
    "pumperknickel": "1.50"
  };

// start of public interface and returning the value that the string is paired with inside my object //
      return {
        getPrice: function(typesOfBread) {
      // square brackets are used because it is a string and not a key word //
          return Bread[typesOfBread];
        }
      };

});
