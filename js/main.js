var app = angular.module('Citalics',[
    'ngRoute',
    'ngAnimate'
    //'ui.bootstrap.showErrors'
]);
var baseUrl = 'Citalics/';
app.config([
    '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'defaultControl',
                activetab: 'home'
            })
            .when('/services', {
                templateUrl: 'templates/services.html',
                controller: 'defaultControl',
                activetab: 'services'
            })
            .when('/projects', {
                templateUrl: 'templates/projects.html',
                controller: 'defaultControl',
                activetab: 'projects'
            })
            .when('/about', {
                templateUrl: 'templates/about.html',
                controller: 'defaultControl',
                activetab: 'about'
            })
            .when('/contact', {
                templateUrl: 'templates/contact.html',
                controller: 'defaultControl',
                activetab: 'contact'
            })
            .otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode(true);
    }
]);

app.controller('defaultControl', function ($scope, $route) {
    $scope.route = $route;
});

app.directive('holderFix', function () {
    return {
        link: function (scope, element, attrs) {
            Holder.run({ images: element[0], nocss: true });
        }
    };
});