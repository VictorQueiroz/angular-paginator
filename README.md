angular-paginator
=================

A simple AngularJS module to page anything.

Usage
=================

Import ```angular-paginator.js``` after your ```angular.js``` file, and before your ```app.js``` file.

Your controller who uses the paginator should be like this:
```js
angular.module('app', ['paginator']).controller('AppCtrl', ['$scope', 'Paginator', function () {
  $scope.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  $scope.numbers.paginator = Paginator.new();
  $scope.numbers.paginator.pages.integer = Math.ceil($scope.numbers.length/$scope.numbers.paginator.perPage);
}]);
```

And your HTML code like this:
```html
<div ng-app="app">
  <div ng-repeat="n in numbers | startFrom: numbers.paginator.page * numbers.paginator.perPage | limitTo: numbers.paginator.perPage">
    {{ n }} = {{ n }}.
    {{ n }} * {{ n }} / 2 = {{ n * (n/2) }}.
  </div>
</div>
```

```startFrom``` is a filter that makes ngRepeat only start from a line designed for you. In our case, Paginator do it for us, according to the page and the results per page.

```limitTo``` is a native AngularJS filter, if you want to learn more about him, read: https://docs.angularjs.org/api/ng/filter/limitTo.

The ```paginator.perPage``` it is the number of results that will be showed in each page, and can be defined through ```Paginator.new(2)``` or ```Paginator.new().perPage = x```.

Enjoy!
