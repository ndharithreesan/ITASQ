angular.module('itasq', [
'itasq.services',
'itasq.search',
'itasq.auth',
'ngRoute'
])


.config(function($routeProvider){
  $routeProvider
    .when(  '/search', {
      templateUrl: 'app/search/search.html',
      controller: 'SearchController'
    })
    .when('/signup', {
      templateUrl: 'app/users/signup.html',
      controller: 'AuthController'
    })
    .when('/', {
      redirectTo: '/search'
    })

    console.log('successfully completed config in app.js');
})