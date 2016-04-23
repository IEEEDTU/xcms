var app = angular.module('xcms', ['ngCookies']);

app.controller('mainCtrl', [ '$scope', '$http', '$cookies', function($scope, $http, $cookies){
	var degreeCode;
	var degreeType;
	var branchCode;
	
	$http.get("http://127.0.0.1:8000/course/retrieveDegrees")
	.then(function(response){
		$scope.degrees = response.data.degrees;
	});
	
	$scope.getBranches = function(dCode, dType){
		degreeCode = dCode;
		degreeType = dType;
		$http.get("http://127.0.0.1:8000/course/retrieveBranches?degreeCode="+degreeCode+"&degreeType="+degreeType)
		.then(function(response){
			$scope.branches = response.data.branches;
		});
	}
	
	$scope.getCourses = function(bCode){
		branchCode = bCode;
		$http.get("http://127.0.0.1:8000/course/retrieveCourses?degreeCode="+degreeCode+"&degreeType="+degreeType+"&branchCode="+branchCode)
		.then(function(response){
			$scope.courses = response.data.courses;
		});
	}
	
	$scope.setCookie = function(courseId){
		$cookies.courseId = courseId;
	}
}]);
