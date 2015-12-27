var controllers = angular.module('ApplicationControllers', []);

controllers.controller('HomeController', ['$scope', '$http', function ($scope, $http) {
    $http.get('https://hub.kendanware.com/c/kendanware/development-log.json').success(function(data) {
      $scope.articles = data.topic_list.topics;
    });
}]);
