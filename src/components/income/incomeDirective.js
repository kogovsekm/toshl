angular.module('app').directive('appIncome', function(){
	return {
		restrict: 'E',
		controller: 'incomeController',
		templateUrl: 'templates/income.html'
	};
});
