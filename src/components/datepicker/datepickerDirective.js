angular.module('app').directive('appDate', function(){
	return {
		restrict: 'E',
		controller: 'datepickerController',
		templateUrl: 'templates/datepicker.html'
	};
});
