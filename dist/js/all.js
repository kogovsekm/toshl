//  Add ui-router as a dependency
angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap']);

angular.module('app').config(function ($stateProvider, $urlRouterProvider)
                             {
                                 $urlRouterProvider.otherwise('/index');

                                 $stateProvider.state('home',
	                               {
		                                url: 'dist/index.html'
	                               });

                                 $stateProvider.state('overview',
                                 {
                                     templateURL: 'templates/overview.html',
                                     url:'/overview',
                                     controller: "overviewController"
                                 });

                                $stateProvider.state('expenses',
                    	          {
                    		            templateURL: 'templates/expenses.html',
                                    url:'/expenses',
                                    controller: "expensesController"
                    	          });

                                $stateProvider.state('income',
                    	          {
                    		            templateURL: 'templates/income.html',
                                    url:'/income',
                                    controller: "incomeController"
                    	          });

                                $stateProvider.state('category',
                                {
                                url:         '/datepicker',
                                templateUrl: 'templates/datepicker.html',
                                controller:  "datepickerController"
                                });

                             });

angular.module('app').controller('datepickerController', function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2030, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
});

angular.module('app').directive('appDate', function(){
	return {
		restrict: 'E',
		controller: 'datepickerController',
		templateUrl: 'templates/datepicker.html'
	};
});

angular.module('app').controller('ExpensesController', function($scope, $q, $http){

  $scope.data = 'No data';

   $http.get('http://toshl-killer.herokuapp.com/api/v1/balance_changes',{params: {query:'test'}}).then(function(success){
    $scope.data = success.data;
    //debugger;
  }, function(error){

   alert('Ne deluje! Preveri sintakso pri slikcu na API! Morda je napaka v URL-ju ali nastavitvi headerja!');
  });

});

angular.module('app').directive('appExpenses', function(){
	return {
		restrict: 'E',
		controller: 'expensesController',
		templateUrl: 'templates/expenses.html'
	};
});

angular.module('app').controller('incomeController', function($scope){


});

angular.module('app').directive('appIncome', function(){
	return {
		restrict: 'E',
		controller: 'incomeController',
		templateUrl: 'templates/income.html'
	};
});

angular.module('app').controller('MainController', function($scope, $q, $http){

  $scope.data = 'No data';

   $http.get('http://toshl-killer.herokuapp.com/api/v1/balance_changes',{params: {query:'test'}}).then(function(success){
    $scope.data = success.data;
    //debugger;
  }, function(error){

   alert('Ne deluje! Preveri sintakso pri slikcu na API! Morda je napaka v URL-ju ali nastavitvi headerja!');
  });

});

angular.module("app").controller("overviewController", function($scope) {

    
});

angular.module('app').directive('appOverview', function(){
	return {
		restrict: 'E',
		controller: 'overviewController',
		templateUrl: 'templates/overview.html'
	};
});
