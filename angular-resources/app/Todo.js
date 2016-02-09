///
var app = angular.module("TodoApp", []);

/// the call back function 
app.controller("TodoCtrl", ["$q", "$http", "$scope", 
	function($q, $http, $scope) {



	$scope.title = "Welcome to your task list";
	$scope.name = "This is awesome!";
	$scope.macaroni = "";
	$scope.complete = false;
	$scope.searchText = "";

		//ajax
		//callback
			//$scope.todos = the data we got

/// this array is used in html in an angular loop using ng-repeat ///
	$scope.todos = [
    { name: "Mow the lawn", complete: "incomplete" },
    { name: "Cut the grass", complete: "complete" },
    { name: "Kill the ants", complete: "incomplete" },
    { name: "Trim the weeds", complete: "complete" }
  ];

$scope.killTodo = function(todo) {
  // Do you see the PFM here of full object comparison?
  var todoIndex = $scope.todos.indexOf(todo); 
/// this is going through the loop and allowing user to delete //
  if (todoIndex >= 0) {
    $scope.todos.splice(todoIndex, 1);
  }
}
}];
