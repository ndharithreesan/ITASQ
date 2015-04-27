angular.module('itasq.search', [])

.controller('SearchController', ['$scope', 'Search',  
  function($scope, Search) {

    $scope.answer = '';
    $scope.results = [];

    $scope.ask = function(){
      Search.askQuestion($scope.question)
        .then(function(res){
          // TODO: show answers 
          console.log(res)
        })
    }


}])