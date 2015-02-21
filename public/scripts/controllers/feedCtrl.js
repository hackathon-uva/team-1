(function(){
  'use strict';

  angular.module('kudos').controller('FeedCtrl', [FeedCtrl]);

	function FeedCtrl(){
	  	var vm = this;

	  	var course = { 
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

	  	vm.course = course; 

	  	// var socket = io();
	  	// var userData = {
	  	// 	user: {
	  	// 		account: {
	  	// 			name: 'Klaas Tester',
	  	// 			homePage: 'url'
	  	// 		}
	  	// 	},
	  	// 	course: {
	  	// 		objectType: 'Activity',
	  	// 		id: 'wetenschapsfilosofie'
	  	// 	}
	  	// };
	  	// socket.emit('userReg', userData);
	  	// socket.on('regUser', function(data){
	  	// 	console.log('all data received');
	  	// 	console.log(data);
	  	// 	vm = data;
	  	// 	socket.emit('userPost', {
	  	// 		payload: userData,
	  	// 		message: "Some very cool message!"
	  	// 	});
	  	// });
	  	// socket.on('updFeed', function(data){
	  	// 	console.log('feedupdate required');
	  	// 	console.log(data);
	  	// });
	  	
		return vm;
	}

})();