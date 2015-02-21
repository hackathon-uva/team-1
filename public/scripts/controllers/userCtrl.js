(function(){
  'use strict';

  angular.module('kudos').controller('UserCtrl', ['students', UserCtrl]);

	function UserCtrl(students){
	  	var vm = this;

	  	vm.students = students;

		return vm;
	}

})();