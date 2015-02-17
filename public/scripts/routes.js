(function(){
  'use strict';

  angular.module("kudos").config(["$stateProvider", "$locationProvider", "$urlRouterProvider", routes]); 
    
  function routes($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);
    
    $stateProvider
      .state("feed", {
          url: "/feed",
          templateUrl: "../templates/feed.html"
        }
      })
      .state("users", {
          url: "/users",
          templateUrl: "../templates/users.html"
        }
      })
      .state("shop", {
          url: "/shop",
          templateUrl: "../templates/shop.html"
        }
      })
      .state("profile", {
          url: "/profile",
          templateUrl: "../templates/profile.html"
        }
      });


    $urlRouterProvider.when('/', '/feed');
    // $urlRouterProvider.otherwise('/home');
  }
})();