angular.module('itasq.search', [])

.controller('SearchController', ['$scope', 'Search',  
  function ($scope, Search) {

    $scope.results = [];

    $scope.ask = function(){

      //TODO: create a list of veto words and do a search through that to filter questions at the client end
      var count =0;
      var total = $scope.question.split(' ').length
      Search.list.forEach(function(keyword){
        if($scope.question.indexOf(keyword) > -1){
          if(keyword === 'racist' || 'sexist'){
            count += 5;
          } else {
            count++
          }
        }
      });

      if (count/total > 0.4){
        console.log(count/total)
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