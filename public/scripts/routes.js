(function(){
  'use strict';

  angular.module("kudos").config(["$stateProvider", "$locationProvider", "$urlRouterProvider", routes]); 
    
  function routes($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);
    
    $stateProvider
      .state("feed", {
        url: "/",
        templateUrl: "../templates/feed.html",
        controller: "FeedCtrl as feed"
      })
      .state("users", {
        templateUrl: "../templates/users.html",
        controller: "UserCtrl as user"
      })
      .state("shop", {
        templateUrl: "../templates/shop.html",
        controller: "ShopCtrl as shop"
      })
      .state("profile", {
        templateUrl: "../templates/profile.html",
        controller: "ProfileCtrl as profile"
      });
  }
  
})();