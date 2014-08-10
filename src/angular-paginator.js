'use strict';

angular.module('victorqueiroz.ngPaginator', [])

.controller('PaginationController', ['$scope', '$location', function ($scope, $location) {
  $scope.paginator = {};

  /*
   * Avança para a próxima página (teoricamente)
   * e carrega a página equivalente a próxima página
   * utilizando o back-end.
   */
  $scope.nextPage = function () {
    var nextPage = ($scope.paginator[$scope.currentKey] + 1);

    if(nextPage > $scope.paginator[$scope.lastKey])
      return;

    $scope.$emit($scope.eventName, nextPage);
  };

  /*
   * Volta uma página.
   */
  $scope.prevPage = function () {
    var prevPage = ($scope.paginator[$scope.currentKey] - 1);

    if(prevPage < 1)
      return;

    $scope.$emit($scope.eventName, prevPage);
  };

  $scope.setPage = function (page) {
    if(page > $scope.paginator[$scope.lastKey])
      return;

    $scope.$emit($scope.eventName, page);
  };

  $scope.$emit($scope.eventName, $location.search()['page'] || 1);
}])

.directive('vqPager', [function() {
  return {
    restrict: 'E',
    scope: {
      paginator: '=',
      eventName: '=',
      currentKey: '=',
      lastKey: '='
    },
    controller: 'PaginationController',
    template: 
    '<ul class="pager">'+
      '<li ng-class="{ \'disabled\': paginator[currentKey] == 1 }" class="previous"><a href="" ng-click="prevPage()">« Anterior</a></li>'+
      '<li>{{paginator[currentKey]}} / {{paginator[lastKey]}}</a></li>'+
      '<li ng-class="{ \'disabled\': paginator[currentKey] == paginator[lastKey] }" class="next"><a href="" ng-click="nextPage()">Próxima »</a></li>'+
    '</ul>'
  };
}])

.directive('vqPagination', [function() {
  return {
    restrict: 'E',
    scope: {
      paginator: '=',
      eventName: '=',
      currentKey: '=',
      lastKey: '='
    },
    controller: 'PaginationController',
    template: 
    '<ul class="pagination">'+
      '<li ng-class="{ \'disabled\': paginator[currentKey] == 1 }"><a href="" ng-click="prevPage()">« Anterior</a></li>'+
      '<li ng-repeat="page in paginator.range" ng-class="{ \'active\': paginator[currentKey] == ($index + 1) }"><a href="" ng-click="setPage( (page + 1) )">{{ page + 1 }}</a></li>'+
      '<li ng-class="{ \'disabled\': paginator[currentKey] == paginator[lastKey] }"><a href="" ng-click="nextPage()">Próxima »</a></li>'+
    '</ul>'
  };
}]);