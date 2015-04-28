angular.module('itasq.search', [])

.controller('SearchController', ['$scope', 'Search',  
  function($scope, Search) {

    $scope.results = [];

    $scope.ask = function(){

      //TODO: create a list of veto words and do a search through that to filter questions at the client end
      if($scope.question.indexOf('women should') > -1){
        return $scope.answer = "Stop right there. Don't ask that, stupid"
      }

      Search.askQuestion($scope.question)
        .then(function(res){
          $scope.results = [];
          var results = res.data;
          console.log('ANSWER', res)
          if(results.isValid === false){
            $scope.answer = 'YES'
          } else {
            $scope.answer = 'NO';
            results.results.forEach(function(linkObj){
              console.log('URL HOMIE', linkObj.DisplayUrl)
              $scope.results.push(linkObj)
            })
          }
        })
    }


}])