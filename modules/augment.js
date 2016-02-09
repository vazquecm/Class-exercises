var Planets = (function(planets) {
  var closestStars = ["maple", "willow", "evergreen","cherry", "burch"];
  var age = 0;
  var dwarfPlanets = [];

  planets.setAge = function() {
    return setAge;
  };

  planets.getClosestStars = function() {
    return closestStars;
  };

  planets.adddwarfPlanets = function(planetoid) {
    dwarfPlanets.push(planetoid)
  };

  return planets;

})(Planets);

console.log(Planets);
console.log(Planets.setAge());