angular.module('app').config(function ($stateProvider, $urlRouterProvider)
                             {
                                 $urlRouterProvider.otherwise('/index');

                                 $stateProvider.state('home',
	                                                   {
		                                                      url: 'dist/index.html'
	                                                   });

                                $stateProvider.state('expenses',
                    	          {
                    		            templateURL: 'templates/expenses.html',
                                    url:'/category',
                                    controller: "expensesController"
                    	          });
                             });
