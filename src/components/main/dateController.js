angular.module('app').controller('dateController', function($scope, $q, $http){

var url_date = 'http://toshl-killer.herokuapp.com/api/v1/balance_changes';

var date = [];

$http.get(url_date).then(
      function(success) {
          $scope.date = success.data;
      
      });

});
