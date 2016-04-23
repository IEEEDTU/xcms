var app = angular.module('xcms', ['ngCookies']);

app.controller('mainCtrl', [ '$scope', '$http', '$cookies', function($scope, $http, $cookies){
	$scope.news = {};
	$scope.page = {};
	
	$scope.addNews = function(){
		$scope.data = 'headline=' + $scope.news.headline + 
		'&description=' + $scope.news.description + 
		'&image=' + $scope.news.image + 
		'&link=' + $scope.news.link + 
		'&rollNo=' + $scope.news.publishedBy;
		
		$http({
			method: 'POST',
			url: 'http://127.0.0.1:8000/newsfeed/addNews/',
			data: $scope.data,
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		}).then(function(response){
			$scope.response = response.data;
		});
	};
	
	$scope.retrieveNews = function(){
		$http.get("http://127.0.0.1:8000/newsfeed/retrieveMoreNews?rowsPerPage=" + $scope.page.rowsPerPage + "&pageNo=" + $scope.page.pageNo)
		.then(function(response){
			$scope.moreNews = response.data.news;
		});
	};
	
}]);
