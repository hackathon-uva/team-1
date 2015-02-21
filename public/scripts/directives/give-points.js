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

	        var availablePoints = 100,
			    givenPoints = 0,
			    grantedPoints = 0;

			var div = element;

			function distributePoints(event) {
			  // Calculate where the cursor is now relative from the start of the bar
	    		console.log(event);
				var cursor = event.offsetX;
				var right = event.target.clientWidth;

				// Calculate percentage of points that will be distributed through givePoints()
				var points = ((cursor / right) * availablePoints);
				points = Math.round(points);

				// Set given points to a certain value
				if(points <= availablePoints){
				  	// console.log('statement evaluates true');
				    givenPoints  = points;
				    element.children()[3].style.background = 'linear-gradient(90deg, #BC0031 '+ (points) +'%, rgb(208, 208, 208) '+ ((points) + (0.1*points))+'%)';
				} 
			}

			function grantPoints(event) {
				// console.log('grant points triggered');
				// Send given points to some schmuck

				// if(availablePoints >= givenPoints){
				// 	grantedPoints += givenPoints;
				//     availablePoints -= givenPoints;
				//     document.getElementById("points").innerHTML = grantedPoints;
				// }

				// Set given points to 0

				// div.innerHTML = "";
				// givenPoints = 0;
			}

			function done(event) {
				// console.log('done points triggered');
			  	// Give points back if not given through grantPoints()
			  	
			  	// if(givenPoints != 0){
			   //  	availablePoints += givenPoints;
			  	// }

			  	// Set distributed points to 0

			  	// div.innerHTML = "";
			  	// givenPoints = 0;
			}
        }
	}
});