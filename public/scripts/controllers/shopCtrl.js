(function(){
  'use strict';

  angular.module('kudos').controller('ShopCtrl', [ShopCtrl]);

	function ShopCtrl(){
	  	var vm = this;

	  	var shopData = [
	  		{
	  			name: 'Study Tour',
	  			contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ut doloribus officia, saepe inventore, perspiciatis quam ex sunt dignissimos nisi ea, architecto corporis. Quisquam sequi, esse velit possimus similique ex.',
	  			pointsRequired: 1000
	  		},
	  		{
	  			name: 'Honors Course',
	  			contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ut doloribus officia, saepe inventore, perspiciatis quam ex sunt dignissimos nisi ea, architecto corporis. Quisquam sequi, esse velit possimus similique ex.',
	  			pointsRequired: 200
	  		},
	  		{
	  			name: 'Stage',
	  			contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ut doloribus officia, saepe inventore, perspiciatis quam ex sunt dignissimos nisi ea, architecto corporis. Quisquam sequi, esse velit possimus similique ex.',
	  			pointsRequired: 500
	  		},
	  		{
	  			name: 'Student Assistant Job',
	  			contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ut doloribus officia, saepe inventore, perspiciatis quam ex sunt dignissimos nisi ea, architecto corporis. Quisquam sequi, esse velit possimus similique ex.',
	  			pointsRequired: 2000
	  		}
	  	];

	  	vm.shop = shopData;


		return vm;
	}

})();