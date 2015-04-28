angular.module('itasq.services', [])

.factory('Search', function ($http) {

  var askQuestion = function(ques){
    return $http({
      method: 'POST',
      url: 'Server/search',
      data: {query: ques}
    })
    .then(function(res){
      return res;
    })
  }
  return {
    askQuestion: askQuestion
  }
})

.factory('Auth', function ($http) {

  var login = function (user) {
    return $http({
      method: 'POST',
      url: '/Server/users/login',
      data: user
    })
    .then(function () {
      return
    })
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/Server/users/signup',
      data: user
    })
    .then(function (resp) {
      console.log('response!', resp)
      return
    });
  };

  return {
    login: login,
    signup: signup,
  }
});