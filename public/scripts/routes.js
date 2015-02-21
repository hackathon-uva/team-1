(function(){
  'use strict';

  angular.module("kudos").config(["$stateProvider", "$locationProvider", "$urlRouterProvider", routes]); 
    
  function routes($stateProvider, $locationProvider, $urlRouterProvider) {

   // $locationProvider.html5Mode(true);

    var courseData = { 
        name: 'Wetenschapsfilosofie',
        teacher: 'Jaques Bos',
        students: [ 
          { 
            name: 'Brad Pitt',
            points: 50,
          },
          { 
            name: 'Angela Jolie',
            points: 100,
          },
          { 
            name: 'Hugh Hefner',
            points: 0,
          },
          { 
            name: 'Harry Potter',
            points: 350,
          }
        ],
        feed: [
          {
            title:    'The first post',
            author:   'Karel de Grote',
            contents:   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio aut voluptatem velit ex nesciunt enim explicabo expedita recusandae, harum accusantium facilis optio rem nulla sed quis nihil, eius totam necessitatibus.',
            date:     'Sat Feb 21 2015 12:41:01 GMT+0100 (CET)'
          },
          {
            title:    'The second post',
            author:   'Karel de Grote',
            contents:   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio aut voluptatem velit ex nesciunt enim explicabo expedita recusandae, harum accusantium facilis optio rem nulla sed quis nihil, eius totam necessitatibus.',
            date:     'Sat Feb 21 2015 12:41:01 GMT+0100 (CET)'
          },
          {
            title:    'The third post',
            author:   'Karel de Grote',
            contents:   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio aut voluptatem velit ex nesciunt enim explicabo expedita recusandae, harum accusantium facilis optio rem nulla sed quis nihil, eius totam necessitatibus.',
            date:     'Sat Feb 21 2015 12:41:01 GMT+0100 (CET)'
          }
        ]
    };
    
    $stateProvider
      .state("login", {
        url: "/login",
        templateUrl: "../templates/login.html",
        controller: "loginCtrl as login"
      })
      .state("feed", {
        url: "/feed",
        templateUrl: "../templates/feed.html",
        controller: "FeedCtrl as feed",
        resolve: {
          course: function(){
            return courseData;
          }
        }
      })
      .state("users", {
        url: "/users",
        templateUrl: "../templates/users.html",
        controller: "UserCtrl as user",
        resolve: {
          students: function(){
            return courseData.students;
          }
        }
      })
      .state("shop", {
        url: "/shop",
        templateUrl: "../templates/shop.html",
        controller: "ShopCtrl as shop"
      })
      .state("profile", {
        templateUrl: "../templates/profile.html",
        controller: "ProfileCtrl as profile"
      });
    $urlRouterProvider.when('/', '/feed');
  }
  
})();