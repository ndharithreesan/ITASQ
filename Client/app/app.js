angular.module('itasq', [
'itasq.services',
'itasq.search',
'ngRoute'
])


.config(function($routeProvider){
  $routeProvider
    .when(  '/search', {
      templateUrl: 'app/search/search.html',
      controller: 'SearchController'
    })
    .otherwise({
      // TODO: redirect to user login
      redirectTo : '/search'
    })
})