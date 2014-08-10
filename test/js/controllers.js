angular.module('app.controllers', [])

.controller('PostCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.$on('page changed', function (event, params) {
    $http.get('http://localhost:3000/api/posts', {
      params: {
        per_page: ($scope.per_page || 10),
        page: params.page
      }
    }).then(function(res){
      var posts = res.data.data;

      $scope.posts = posts;

      var paginator = res.data;

      $scope.paginator = paginator;
    });
  });
}]);