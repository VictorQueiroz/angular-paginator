app.controller('TableCtrl', ['$scope', '$paginator', function ($scope, $paginator) {
  var users = $scope.users = [];

  for(var i=0; i < 300; i++) {
    users.push({
      name: Faker.Name.findName(),
      email: Faker.Internet.email(),
      gender: Faker.Name.gender(),
      ip_address: Faker.Internet.ip(),
      description: Faker.Lorem.paragraph()
    });
  }
}]);