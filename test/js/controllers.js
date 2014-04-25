app.controller('TableCtrl', ['$scope', 'Paginator', function ($scope, Paginator) {
  var users = $scope.users = [];

  for(var i=0; i < 300; i++) {
    users.push({
      id: i + 1,
      name: Faker.Name.findName(),
      email: Faker.Internet.email(),
      gender: Faker.Name.gender(),
      ip_address: Faker.Internet.ip(),
      description: Faker.Lorem.paragraph()
    });
  }

  $scope.users.paginator = Paginator.new();
  $scope.users.paginator.pages.integer = Math.ceil($scope.users.length/$scope.users.paginator.perPage);

  var messages = $scope.messages = [];

  for(var i=0; i < 100; i++) {
    messages.push({id: i + 1, message: Faker.Lorem.paragraphs(2)});
  }

  $scope.messages.paginator = Paginator.new();
  $scope.messages.paginator.pages.integer = Math.ceil($scope.messages.length/$scope.messages.paginator.perPage);
}]);