var myApp = angular.module('myApp', []);
myApp.controller('mainController', [$scope, $log, function($scope, $log){
    $scope.msg='Hello World!';
    $log.debug($scope.msg);
}]);
