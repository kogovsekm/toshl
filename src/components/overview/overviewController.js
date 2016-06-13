angular.module("app", []);

angular.module("app").controller("overviewController", function($scope) {
    $scope.kalkulator_varcevanje = function(izracun) {
        var izplacilo = $scope.izplacilo;
        var meseci = $scope.meseci;
        var obrestna_mera = $scope.obrestna_mera;
        $scope.izracun = (izplacilo * meseci * obrestna_mera)/ 100;
    };
});
