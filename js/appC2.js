var app = angular.module('ccms', ['ngCookies']);

app.controller('mainCtrl', [ '$scope', '$http', '$cookies', function($scope, $http, $cookies){
	
	var courseId = $cookies.courseId;
	
	$http.get("http://127.0.0.1:8000/course/getCourseById?courseId="+courseId)
	.then(function(response){
		$scope.course = response.data.course[0];
	});
	
}]);
