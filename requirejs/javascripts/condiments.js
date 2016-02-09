define (function() {

// private part of interface, no one touches //
  var Condiments = {
    "mayonnaise": ".50",
    "mustard": ".50",
    "salt": ".50",
    "pepper": ".50",
    "none": "0"
  };

// start of public interface returning the value that the string is paired with inside my object //
      return {
        getPrice:function(typesOfCondiments) {
          // square brackets are used because it is a string and not a key word //
          return Condiments[typesOfCondiments]
        }
    };
    
  });
