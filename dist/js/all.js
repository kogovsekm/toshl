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


angular.module('app').controller('MainController', function($scope, $q, $http){

  $scope.data = 'No data';

   $http.get('http://toshl-killer.herokuapp.com/api/v1/balance_changes',{params: {query:'test'}}).then(function(success){
    $scope.data = success.data;
    //debugger;
  }, function(error){

   alert('Ne deluje! Preveri sintakso pri slikcu na API! Morda je napaka v URL-ju ali nastavitvi headerja!');
  });

});

angular.module("app", []);

angular.module("app").controller("overviewController", function($scope) {
    $scope.kalkulator_varcevanje = function(izracun) {
        var izplacilo = $scope.izplacilo;
        var meseci = $scope.meseci;
        var obrestna_mera = $scope.obrestna_mera;
        $scope.izracun = (izplacilo * meseci * obrestna_mera)/ 100;
    };
});
