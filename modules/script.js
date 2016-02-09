var solarSystemElement = document.getElementById("Solar System");


//  IIFE - immediatley invoked function expression //



// This is a private interface //

var planets = (function() {
	var planet = ["saturn", "venus", "jupiter", "earth", "mars", "uranus", "neptune"];
	var spaceCraft = ["jupiter", "uranus"];
	var visitedPlanets =["earth", "mars", "saturn"];
	var gasPlanets = ["venus"];

	// This is a public interface //
	  return {
		getPlanet: function() {
			return planet;
		},
		getSpaceCraft: function() {
			return spaceCraft;
		},
		getVisitedPlanets: function() {
			return visitedPlanets;
		},
		setgasPlanets: function(gasses) {
		   gasPlanets.push(gasses);			
		}
	};
})();



console.log(planets.getPlanet());
console.log(planets.getSpaceCraft());

// In the "setter" you can specify rules you set //





