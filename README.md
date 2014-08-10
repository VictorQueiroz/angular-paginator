angular-paginator
=================

A simple AngularJS module to page anything.

Installation
=================
```bower install ng-paginator --save-dev```

Usage
=================

index.html
```html
<div ng-controller="ParentCtrl">
	<table>
		<thead>
			<th>Name</th>
		</thead>

		<tbody ng-repeat="user in users">
			<td ng-bind="user.name"></td>
		</tbody>
	</table>

	<vq-pager data-paginator="paginator" data-event-name="'page changed'" data-current-key="'current'" data-last-key="'pageCount'"></vq-pager>
</div>
```

controllers.js
```js
.controller('ParentCtrl', ['$scope', function ($scope) {
	...

	$scope.$on('page changed', function (event, page, paginator) {
		$http.get('/api/users', {
			params: {
				page: page,
				per_page: (paginator.per_page || 10)
			}
		}).then(function(res){
			$scope.users = res.data.data;

			/**
			 * { 'current': 1, 'pageCount': 10, 'rowsPerPage': 10, 'data': [
			 *   { 'name': 'Leonardo de Carvalho' },
			 *   { 'name': 'Napoleão Bonaparte' }
			 * ] }
			 */
			angular.extend(paginator, res.data);
		});
	});
}]);
```

Enjoy!
