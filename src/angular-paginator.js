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
    var nextPage = ($scope.paginator.current + 1);

    if(nextPage > $scope.paginator.pageCount)
      return;

    $scope.$emit('page changed', nextPage);
  };

  /*
   * Volta uma página.
   */
  $scope.prevPage = function () {
    var prevPage = ($scope.paginator.current - 1);

    if(prevPage < 1)
      return;

    $scope.$emit('page changed', prevPage);
  };

  $scope.setPage = function (page) {
    if(page > $scope.paginator.pageCount)
      return;

    $scope.$emit('page changed', page);
  };

  $scope.$emit('page changed', $location.search()['page'] || 1);
}])

.directive('vqPager', [function() {
  return {
    restrict: 'E',
    scope: {
      paginator: '='
    },
    template: 
    '<ul class="pager">'+
      '<li ng-class="{\'disabled\': paginator.current == 1}" class="previous"><a href="" ng-click="prevPage()">« Anterior</a></li>'+
      '<li>{{paginator.current}} / {{paginator.pageCount}}</a></li>'+
      '<li ng-class="{\'disabled\': paginator.current == paginator.pageCount}" class="next"><a href="" ng-click="nextPage()">Próxima »</a></li>'+
    '</ul>',
    controller: 'PaginationController'
  };
}])

.directive('vqPagination', [function() {
  return {
    restrict: 'E',
    scope: {
      paginator: '='
    },
    template: 
    '<ul class="pagination">'+
      '<li ng-class="{\'disabled\': paginator.current == 1}"><a href="" ng-click="prevPage()">« Anterior</a></li>'+
      '<li ng-repeat="page in paginator.range" ng-class="{ \'active\': paginator.current == ($index + 1) }"><a href="" ng-click="setPage( (page + 1) )">{{ page + 1 }}</a></li>'+
      '<li ng-class="{\'disabled\': paginator.current == paginator.pageCount}"><a href="" ng-click="nextPage()">Próxima »</a></li>'+
    '</ul>',
    controller: 'PaginationController'
  };
}]);