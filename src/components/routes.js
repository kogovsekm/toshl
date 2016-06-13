angular.module('app').config(function ($stateProvider, $urlRouterProvider)
                             {
                                 $urlRouterProvider.otherwise('/index');

                                 $stateProvider.state('home',
	                               {
		                                url: 'dist/index.html'
	                               });

                                 $stateProvider.state('overview',
                                 {
                                     templateUrl: 'templates/overview.html',
                                     url:'/overview',
                                     controller: "overviewController"
                                 });

                                $stateProvider.state('expenses',
                    	          {
                    		            templateUrl: 'templates/expenses.html',
                                    url:'/expenses',
                                    controller: "expensesController"
                    	          });

                                $stateProvider.state('income',
                    	          {
                    		            templateUrl: 'templates/income.html',
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
