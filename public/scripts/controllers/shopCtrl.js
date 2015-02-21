(function(){
  'use strict';

  angular.module('kudos').controller('ShopCtrl', [ShopCtrl]);

	function ShopCtrl(){
	  	var vm = this;

	  	var shopData = [
	  		{
	  			name: 'Study Tour',
	  			contents: 'A grandtour arround Italy and Greece to make you aware of the great relevance of Greek and Roman Architecture for our society',
	  			pointsRequired: 1000
	  		},
	  		{
	  			name: 'Honors Course',
	  			contents: 'Some great course that you can only participate in if you\'re popular with teachers',
	  			pointsRequired: 200
	  		},
	  		{
	  			name: 'Internship',
	  			contents: 'We need skilled workers for little or no money! So we offer it as a reward!',
	  			pointsRequired: 500
	  		},
	  		{
	  			name: 'Student Assistant Job',
	  			contents: 'We don\'t want to check students work ourselves, so we need slaves to do it for us, luckily for you we do pay you some',
	  			pointsRequired: 2000
	  		}
	  	];

	  	vm.shop = shopData;

		return vm;
	}

})();