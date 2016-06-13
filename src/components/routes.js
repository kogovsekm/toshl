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
