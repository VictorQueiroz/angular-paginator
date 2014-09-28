angular
  .module('ngPaginator.controllers.Pagination', [])
  .controller('PaginationController', ['$scope', '$location', function ($scope, $location) {
    $scope.paginator = {};

    var events = {
      changed: $scope.eventName + ' page changed',
      reload: $scope.eventName + ' paginator reload'
    };

    /*
     * Avança uma página.
     */
    $scope.nextPage = function () {
      var nextPage = ($scope.paginator[$scope.currentKey] + 1);

      if(nextPage > $scope.paginator[$scope.lastKey]) return;

      $scope.$emit(events.changed, nextPage, $scope.paginator);
    };

    /*
     * Volta uma página.
     */
    $scope.prevPage = function () {
      var prevPage = ($scope.paginator[$scope.currentKey] - 1);

      if(prevPage < 1)
        return;

      $scope.$emit(events.changed, prevPage, $scope.paginator);
    };

    $scope.setPage = function (page) {
      if(page > $scope.paginator[$scope.lastKey])
        return;

      $scope.$emit(events.changed, page, $scope.paginator);
    };

    $scope.$emit(events.changed, $location.search()['page'] || 1, $scope.paginator);

    $scope.$on(events.reload, function () {
      $scope.$emit(events.changed, 1, $scope.paginator);
    });
  }])