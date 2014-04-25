app.provider('$test', $testProvider);
function $testProvider () {
  this.$get = [function (){
    return new function() {
      return {a: 1}
    };
  }];
}

app.controller('TableCtrl', ['$scope', '$paginator', '$test', function ($scope, $paginator, $test) {
  var users = $scope.users = [];

  for(var i=0; i < 10; i++) {
    users.push({
      id: i + 1,
      name: Faker.Name.findName(),
      email: Faker.Internet.email(),
      gender: Faker.Name.gender(),
      ip_address: Faker.Internet.ip(),
      description: Faker.Lorem.paragraph()
    });
  }

  $scope.$test = $test;

  $scope.users.paginator = $paginator.new();
  $scope.users.paginator.pages.integer = Math.ceil($scope.users.length/$scope.users.paginator.perPage);

  var messages = $scope.messages = [];

  for(var i=0; i < 10; i++) {
    messages.push({id: i + 1, message: Faker.Lorem.paragraphs(2)});
  }

  $scope.messages.paginator = $paginator.new();
  $scope.messages.paginator.pages.integer = Math.ceil($scope.messages.length/$scope.messages.paginator.perPage);
}]);