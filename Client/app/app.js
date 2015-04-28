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
    .when('/', {
      redirectTo: '/search'
    })

    console.log('successfully completed config in app.js');
})