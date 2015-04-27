angular.module('itasq.search', [])

.controller('SearchController', ['$scope', 'Search',  
  function($scope, Search) {

    $scope.answer = '';
    $scope.results = [];

    $scope.ask = function(question){
      Search.askQuestion(question)
        .then(function(res){
          // TODO: show answers 
          console.log(res)
        })
    }


}])