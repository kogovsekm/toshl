angular.module('app').directive('appOverview', function(){
	return {
		restrict: 'E',
		controller: 'overviewController',
		templateUrl: 'templates/overview.html'
	};
});
