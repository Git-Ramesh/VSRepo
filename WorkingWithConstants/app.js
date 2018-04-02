var app = angular.module("app", []);

app.controller("controller1", [
    "$scope",
    "NameService", "$log",
    function($scope, NameService, $log) {
        $scope.name = "Ramesh";
        $scope.fullName = "";
        $scope.getFullName = function() {
            $log.info('getFullName()');
            $scope.fullName = NameService.getFullName($scope.name);
        };
    }
]);

app.constant("LAST_NAME", "Panthangi");

app.service("NameService", [
    "LAST_NAME",
    function(LAST_NAME) {
        this.getFullName = getFullName;
        
        function getFullName(name) {
            return name + " " + LAST_NAME;
        }
    }
]);