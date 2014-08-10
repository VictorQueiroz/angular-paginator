angular-paginator
=================

A simple AngularJS module to page anything.

Installation
=================
```bower install ng-paginator --save-dev```

Usage
=================

```js
.controller('MainCtrl', ['$scope', function ($scope) {
	...

	$scope.$on('page changed', function (page) {
		console.log('We are going to page number', page);

		$scope.loadPage(page);
	});
}]);
```

Enjoy!
