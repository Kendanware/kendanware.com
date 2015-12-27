var application = angular.module('application', [
  'ngRoute',
  'ApplicationControllers'
]);


application.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);