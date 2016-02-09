var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

// Use the forEach method to add the name of each planet to a div element in your HTML
function outputPlanets (element, index, array) {
	console.log('array[' + index + '] = ' + element);
}

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
planets.forEach(outputPlanets);

///example on MDN //
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}
// Note elision, there is no member at 2 so it isn't visited
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9

/////// my trial of array and forEach method ///
function outPut (element, index, array) {
	console.log('array[' + index + '] = ' + element);
}

var array = ["blue", "red", "green", "yellow"];
array.forEach(outPut);




var el = document.getElementById("planets");

// Use the map method to create a new array where the first letter of each planet is capitalized
for (var i = 1; 1 < planets.length; i++) {
		newArray[i] = newArray.charAt(0).toUpperCase();
		console.log(planets);
}




// Use the filter method to create a new array that contains planets with the letter 'e'

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];