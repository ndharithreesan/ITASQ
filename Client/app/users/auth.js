angular.module('itasq.auth', [])

.controller('AuthController', ['$scope', '$window', '$location', 'Auth', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function () {
        $location.path('/search');
      })
      .catch(function (error) {
        $scope.error = error;
        console.log($scope.error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function () {
        $location.path('/search');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
}]);