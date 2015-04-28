angular.module('itasq.search', [])

.controller('SearchController', ['$scope', 'Search',  
  function($scope, Search) {

    $scope.results = [];

    $scope.ask = function(){
      Search.askQuestion($scope.question)
        .then(function(res){
          // TODO: show answers 
          var results = res.data;
          console.log('ANSWER', res)
          if(results.isValid === false){
            $scope.answer = 'YES'
          } else {
            $scope.answer = 'NO';
          }
        })
    }


}])