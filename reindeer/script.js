// var message = "Hello, world";

// message = "Goodbye, world";
// message = 100;



// var amIAwesome;
// amIAwesome = false;

// var salary = 12;

// var monthlySalary = salary * 12;
// var isPurple = true;
// console.log("isPurple", isPurple);

// if (isPurple === false) {
// 	//When the condition is true
// 	console.log("Is purple");
// } else {
// 	//When the condition is false
// console.log("Is not purple");
// }

// var breakpointAge = 44;

// var minute = 60;
// var hour = minute * 60;
// var day = hour * 24;
// var year = day * 365;

// var hoursInYear = hour / year;
// console.log("hoursInYear", hoursInYear);

// var minutesInDecade = (year * 10) / minute;
// console.log("minutesInDecade", minutesInDecade);

// var myAgeInSeconds = 44 * year;  
// console.log("myAgeInSeconds", myAgeInSeconds);

// var isOld = 40;


// var colors = ["red", "blue", "yellow", "purple"];
// console.log(colors);

// var luckyNumbers = [4, 8, 15, 16, 23, 42];
// console.log(luckyNumbers);

// var booValues = [true];
// console.log(booValues);

// var myColor = colors[0];
// console.log(myColor);

// var yourColor = colors[1];
// console.log(yourColor);

// colors[4] = "orange";

// colors.push("teal");
// console.log("Colors", colors);

// var lastItem = colors.pop();
// console.log("lastItem", lastItem);

// colors.unshift(); // Add item to beginning
// colors.shift(); // Remove from beginning



// var colors = ["red", "blue", "yellow", "purple"];
// var luckyNumbers = [4, 8, 15, 16, 23, 42, 100];

// for (var index = 0; index < luckyNumbers.length; index = index + 2);
// 	 console.log(luckyNumbers[index]);


// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);
// // Simple loop that increments a value and logs it
// for (var index = 0; index < colors.length; index++) {
// 	console.log("current color is", colors[index])
// }
// Simple loop that increments a value and logs it


 
//  //Increment by 10
//  for (var i = 10; i <= 200; i += 10) {
//  	console.log ("plus 10", i);
//  }

//  //Divide by 2
//  for (var i = 1024; i >= 2; i = i / 2) {
//  	console.log ("divided by 2", i);
//  }

//  //Add items to an array
// var itemArray = [];
// for (var i = 2; i <= 65536; i = i * i) {
//   itemArray.push(i);
// }
// console.log("itemArray", itemArray);

// for (var x = 100; x > 0; x-=1) {
// 	console.log("x", x);
// 	if (x % 2 === 0) {
// 		mejonvfefijn.unshift(x);
// 	} else {
// 		mejonvefign.push (x);
// 	 }
// 	}

// var firstName = "Carmen";
// var lastName = "Vazquez-Marin";
// var fullName = firstName + lastName;
//  console.log("fullName", fullName.length);

// fullName. indexOf();

// var phrase = "The lazy dog";
// var newPhrase = phrase.replace("lazy", "bounding");
// alert(newPhrase);


// var number = "1000";
// var integer = parseInt(number);
// var el = document.getElementById("container");
// console.log("el", el);

// el.innerHTML = "I love NSS";
// var containerText = el.innerHTML;
//  console.log("containerText", containerText);


/*
  1. Take the contents of the sonnet div and place it in a variable
  2. Find and output the starting position of the word "orphans"
  3. Output the number of characters in the sonnet
  4. Replace the first occurance of the string "winter" with "yuletide"
  5. Replace all occurances of the string "the" with "a large"
  6. Set the content of the sonnet div with the new string
*/

// var sonnetElement = document.getElementById("sonnet");
// var sonnetText = sonnetElement.innerHTML;
//  console.log("sonnetText", sonnetText);

// var indexOfOrphans = sonnetText.indexOf("orphans");
//  console.log("indexOf Orphans", indexOfOrphans);
//  console.log("length of sonnet", sonnetText.length);

// sonnet = sonnetText.replace("winter", "yuletide");
//   console.log("sonnetText.replace", sonnetText);


// sonnetElement.innerHTML = sonnetText;

// sonnetElement.innerHTML = sonnetText.replace(/the/g, "a large");
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredreindeer");

console.log(hohohoElement)
var output = "";

/*
  YOUR ASSIGNMENT
  ----------------------------------------
  Loop through all the reindeer in the array, and add the 
  name of the reindeer to the single HTML <div> element provided.
  The name of the reindeer should be prepended with the corresponding
  color from the other array.
  
  For example:
    Blue Dasher
    Red Dancer
    etc..
*/
for (var index = 0; index < reindeer.length; index ++) {
	var currentReindeer = reindeer[index];
	var currentColor = colors[index];

	output = output + "<div style='color:"+currentColor+"'>";
	//empty string plus a div
	output = output + currentColor + "" + currentReindeer;
	output = output + "</div>";
}

console.log(output);

hohohoElement.innerHTML = output;


