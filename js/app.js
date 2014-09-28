angular.module('app', [])

.controller('UsersController', function ($scope) {
	$scope.$on('users page changed', function (event, page, paginator) {

	});
});

angular.element(document).ready(function () {
	angular.bootstrap(document, ['app']);
});