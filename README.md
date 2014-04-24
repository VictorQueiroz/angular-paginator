angular-paginator
=================

A simple AngularJS module to page anything.

Usage
=================

```html
<script src="js/vendor/angular-paginator.js"></script>
...
<script>
  angular.module('app', ['paginator']).controller('AnyCtrl', ['$scope', function ($scope) {
    var numbers = [1, 2, 3, 4, 5];
    $scope.paginator = Paginator(numbers);
  }]);
</script>
...
<div ng-controller="AnyCtrl">
  <div ng-repeat="number in numbers | startFrom: paginator.currentPage * paginator.resultsPerPage | limitTo: paginator.resultsPerPage | orderBy : numbers : false">
    {{number}}
  </div>
</div>
```

That is all.

More improvements soon.
