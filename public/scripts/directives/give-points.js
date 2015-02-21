// point giving directive

// This was on element
// onmousemove="distributePoints()" onclick="grantPoints()" onmouseleave="fuckOff()"

angular.module('kudos').directive('givePoints', function() {
  	return {
	    restrict: 'A',
	    link: function ($scope, element, attrs) {

	        element.bind('mousemove', distributePoints);
	        element.bind('click', grantPoints);
	        element.bind('mouseleave', mouseOut);

	        var availablePoints = 100,
			    givenPoints = 0,
			    grantedPoints = 0;

			function distributePoints(event) {
			  	// Calculate where the cursor is now relative from the start of the bar

	    		// Im doing something hacky here. Because the element that the event runs on has childeren
	    		// the values get severly disturbed. So I hardcoded the offset. 

	    		console.log('event' + (event.x - 65));
	    		console.log('element' + element[0].clientWidth);

				var cursor = event.x - 65;
				var elementWidth = element[0].clientWidth;

				// Calculate percentage of points that will be distributed through givePoints()
				var points = 0;
				points = ((cursor / elementWidth) * 100);
				points = Math.round(points);

				console.log('points' + points);
				// Set given points to a certain value
				if(points <= availablePoints){
				  	// console.log('statement evaluates true');
				    givenPoints = points;
				    element.children()[3].style.background = 'linear-gradient(90deg, #BC0031 '+ (points - 1) +'%, rgb(208, 208, 208) '+ (points + 1)+'%)';
				} 
			}

			function grantPoints(event) {
				// console.log('grant points triggered');
				// Send given points to some schmuck

				if(availablePoints >= givenPoints){
					grantedPoints += givenPoints;
				    availablePoints -= givenPoints;
				    console.log('pointsGiven');
				}

				// Set given points to 0
				element.children()[3].style.background = 'rgb(208, 208, 208)';
				givenPoints = 0;
			}

			function mouseOut(event) {
			  	// Set distributed points to 0
			  	element.children()[3].style.background = 'rgb(208, 208, 208)';
				givenPoints = 0;
			}
        }
	}
});