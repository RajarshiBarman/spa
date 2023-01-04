
var app = angular.module('myApp2', ['ngRoute']);
app.controller('FirstController', function($scope) {
    $scope.message = 'Hello from Main Controller';
    });
app.config(function($routeProvider) {
    $routeProvider
     
    .when('/', {
    templateUrl : 'about.html',
    controller : 'FirstController'
    })
     
    .when('/services', {
    templateUrl : 'services.html',
    controller : 'SecondController'
    })

    .when('/other', {
        templateUrl : 'index.html',
        controller : 'ThirdController'
        })
     
    .when('/cont', {
    templateUrl : 'form1.html',
    controller : 'FourthController'
    })
     
    });

app.controller('FirstController', function($scope) {
        $scope.message = 'Hello from FirstController';
        });
         
app.controller('SecondController', function($scope) {
        $scope.message = 'Hello from SecondController';
        });
         
app.controller('ThirdController', function($scope) {
        $scope.message = 'Hello from ThirdController';
        });

        app.controller('FourthController', function($scope) {
                $scope.message = 'Hello from FourthController';
                });