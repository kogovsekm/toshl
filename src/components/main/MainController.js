angular.module('app').controller('MainController', function($scope, $q, $http){

  $scope.data = 'No data';

   $http.get('http://toshl-killer.herokuapp.com/api/v1/balance_changes',{params: {query:'test'}}).then(function(success){
    $scope.data = success.data;
    //debugger;
  }, function(error){

   alert('Ne deluje! Preveri sintakso pri slikcu na API! Morda je napaka v URL-ju ali nastavitvi headerja!');
  });

});
