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