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
        when('/devlog', {
            templateUrl: 'views/devlog.html',
            controller: 'DevLogController'
        }).
        when('/team', {
            templateUrl: 'views/team.html',
            controller: 'TeamController'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);
