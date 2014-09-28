angular.module('ngPaginator.directives', [])
  .directive('pager', [function() {
    return {
      restrict: 'E',
      scope: {
        paginator: '=',
        eventName: '=',
        currentKey: '=',
        lastKey: '='
      },
      controller: 'PaginationController',
      templateUrl: 'angular-paginator.tpl.html'
    };
  }]);