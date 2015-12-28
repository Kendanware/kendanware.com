var controllers = angular.module('ApplicationControllers', []);

controllers.controller('PageController', ['$scope', '$location', function ($scope, $location) {
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

    $scope.activeIfPath = function (path) {
        if ($location.path() === path) {
            return 'active';
        } else {
            return '';
        }
    }
}]);

controllers.controller('HomeController', ['$scope', function ($scope) {

}]);

controllers.controller('TeamController', ['$scope', function ($scope) {

}]);

controllers.controller('DevLogController', ['$scope', '$http', function ($scope, $http) {
    $http.get('https://hub.kendanware.com/c/kendanware/development-log.json').success(function(data) {
        $scope.articles = data.topic_list.topics;
    });

    $scope.getImageUrl = function(article) {
        if (article.image_url) {
            return "https://hub.kendanware.com" + article.image_url;
        }

        return "https://hub.kendanware.com/uploads/default/original/1X/4b4c7454b7dff3dba08506adb2795a91052180c4.png";
    };
}]);

controllers.controller('DevLogArticleController', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
    $http.get('https://hub.kendanware.com/t' + $routeParams.articleId + '.json').success(function(data) {
        $scope.title = data.title;
        $scope.content = data.post_stream.posts[0].cooked;
    });
}]);
