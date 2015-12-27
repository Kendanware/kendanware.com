var controllers = angular.module('ApplicationControllers', []);

controllers.controller('PageController', ['$scope', function ($scope) {
    // These are the images in the carousel at the top of the page.
    $scope.images = [
        "images/carousel/screenshot03.jpg",
        "images/carousel/screenshot01.jpg",
        "images/carousel/screenshot02.jpg"
    ];

    $scope.getStyleForImage = function(image) {
        return {
            "background-image": "url('" + image + "')"
        }
    };
}]);

controllers.controller('HomeController', ['$scope', function ($scope) {

}]);

controllers.controller('TeamController', ['$scope', function ($scope) {

}]);

controllers.controller('DevLogController', ['$scope', '$http', function ($scope, $http) {
    $http.get('https://hub.kendanware.com/c/kendanware/development-log.json').success(function(data) {
      $scope.articles = data.topic_list.topics;
    });
}]);
