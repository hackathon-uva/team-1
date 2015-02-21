// point giving directive

// This was on element
// onmousemove="distributePoints()" onclick="grantPoints()" onmouseleave="fuckOff()"

angular.module('kudos').directive('givePoints', function() {
  return {
    restrict: 'A',
    link: function ($scope, element, attrs) {

        element.bind('mousemove', distributePoints);
        element.bind('click', grantPoints);
        element.bind('mouseleave', done);

        var availablePoints = 10,
		    givenPoints = 0,
		    grantedPoints = 0;

		var div = element;

		function distributePoints() {
		  console.log('distribute points triggered');
		  //calculate where the cursor is now relative from the start of the bar

		  // var cursor = event.clientX;
		  // var right = div.clientWidth;

		  //calculate percentage of points that will be distributed through givePoints()

		  // var points = ((cursor / right) * availablePoints);
		  // points = Math.round(points);

		  //set given points to a certain value

		  // if(points <= availablePoints){
		  //   givenPoints  = points;
		  //   div.innerHTML = points;
		  // } 
		}

		function grantPoints() {
			console.log('grant points triggered');
			//send given points to some schmuck

			// if(availablePoints >= givenPoints){
			// 	grantedPoints += givenPoints;
			//     availablePoints -= givenPoints;
			//     document.getElementById("points").innerHTML = grantedPoints;
			// }

			//set given points to 0

			// div.innerHTML = "";
			// givenPoints = 0;
		}

		function done() {
			console.log('done points triggered');
		  	//give points back if not given through grantPoints()
		  	
		  	// if(givenPoints != 0){
		   //  	availablePoints += givenPoints;
		  	// }

		  	//set distributed points to 0

		  	// div.innerHTML = "";
		  	// givenPoints = 0;
		}



        }
  }
});