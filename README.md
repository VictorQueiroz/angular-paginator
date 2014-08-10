angular-paginator
=================

A simple AngularJS module to page anything.

Installation
=================
```bower install ng-paginator --save-dev```

Usage
=================

```html
<vq-pager data-paginator="paginator"></vq-pager>
```

```js
.controller('MainCtrl', ['$scope', function ($scope) {
	...

	$scope.$on('page changed', function (page) {
		$http.get('/api/users', {
			params: {
				page: page,
				per_page: 10
			}
		}).then(function(res){
			$scope.users = res.data.data;
			$scope.paginator = res.data;
		});
	});
}]);
```

Enjoy!
