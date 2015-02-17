(function(){
  'use strict';

  angular.module('kudos').controller('FeedCtrl', [FeedCtrl]);

	function FeedCtrl(){
	  	var vm = this;

	  	var socket = io();
	  	var userData = {
	  		user: {
	  			account: {
	  				name: "Klaas Tester",
	  				homePage: "url"
	  			}
	  		},
	  		course: {
	  			objectType: "Activity",
	  			id: "wetenschapsfilosofie"
	  		}
	  	};

	  	socket.emit('userReg', userData);

	  	socket.on('regUser', function(data){
	  		console.log(data);
	  	});
	  	
		return vm;
	}

})();