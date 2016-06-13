angular.module('app').directive('appExpenses', function(){
	return {
		restrict: 'E',
		controller: 'expensesController',
		templateUrl: 'templates/expenses.html'
	};
});
