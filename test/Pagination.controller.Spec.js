describe('ngPaginator.controllers.Pagination module', function () {
	var $compile, scope, $rootScope;

	module('ngPaginator.directives');
	module('ngPaginator.templates');

	beforeEach(inject(function ($injector) {
		$compile = $injector.get('$compile');
		$rootScope = $injector.get('$rootScope');
		scope = $rootScope.$new();
	}));

	beforeEach(function () {
		var html = angular.element('<pager data-paginator="paginator" data-event-name="\'users\'" data-current-key="\'current\'" data-last-key="\'pageCount\'"></pager>');
		html = $compile(html)(scope);
		console.log(html)
		scope.$digest();
	});

	it('should emit an event', function () {
		scope.$on('users page changed', function (event, page, paginator) {
			console.log('hey')
		});
	});
});