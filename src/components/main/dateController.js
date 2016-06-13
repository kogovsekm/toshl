angular.module('app').controller('dateController', function($scope, $q, $http){

//add date filter with /?start_at=&end_at= method - not yet implemented

var url_date = 'http://toshl-killer.herokuapp.com/api/v1/balance_changes/?start_at=?&end_at=?';

var date = [];

$http.get(url_date).then(
      function(success) {
          $scope.date = success.data;

      });

});
