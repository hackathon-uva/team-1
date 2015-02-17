(function(){
  'use strict';

  angular.module('kudos').controller('FeedCtrl', [FeedCtrl]);

	function FeedCtrl(){
	  	var vm = this;

	  	var socket = io();
	  	var userData = {
	  		user: {
	  			account: {
	  				name: 'Klaas Tester',
	  				homePage: 'url'
	  			}
	  		},
	  		course: {
	  			objectType: 'Activity',
	  			id: 'wetenschapsfilosofie'
	  		}
	  	};
	  	socket.emit('userReg', userData);
	  	socket.on('regUser', function(data){
	  		console.log('all data received');
	  		console.log(data);
	  		vm = data;
	  		socket.emit('userPost', {
	  			payload: userData,
	  			message: "Some very cool message!"
	  		});
	  	});
	  	socket.on('updFeed', function(data){
	  		console.log('feedupdate required');
	  		console.log(data);
	  	});
	  	
		return vm;
	}

})();