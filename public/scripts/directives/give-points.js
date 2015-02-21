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

	        var availablePoints = 10,
			    givenPoints = 0,
			    grantedPoints = 0;

			function distributePoints(event) {
			  	// Calculate where the cursor is now relative from the start of the bar

	    		// Im doing something hacky here. Because the element that the event runs on has childeren
	    		// the values get severly disturbed. So I hardcoded the offset to the position of the element. 

				var cursor = event.x - 65;
				var elementWidth = element[0].clientWidth;

				// Calculate percentage of points that will be distributed through givePoints()
				percentageOfPoints = ((cursor / elementWidth) * 100);
				percentageOfPoints = Math.round(percentageOfPoints);

				// Set given points to a certain value
				if((percentageOfPoints / 10) <= availablePoints){
				  	// console.log('statement evaluates true');
				    givenPoints = Math.round(percentageOfPoints / 10);
				    console.log('givenPoints: ' + givenPoints);
				    element.children()[3].style.background = 'linear-gradient(90deg, #BC0031 '+ ((percentageOfPoints) - 1) +'%, rgb(208, 208, 208) '+ ((percentageOfPoints) + 1)+'%)';
				}
				else {
					element.children()[3].style.background = 'linear-gradient(90deg, #BC0031 '+ ((availablePoints*10) - 1) +'%, rgba(0,0,0,0.5) '+ ((availablePoints*10) + 1)+'%, rgba(0,0,0,0.5) '+ ((percentageOfPoints) - 1) +'% ,rgb(208, 208, 208) '+ ((percentageOfPoints) + 1)+'%)';
				}
			}

			function grantPoints(event) {
				// console.log('grant points triggered');
				// Send given points to some schmuck

				if(availablePoints >= givenPoints){
					grantedPoints += givenPoints;
				    availablePoints -= givenPoints;
				    console.log('pointsGiven');
				} else {
					grantedPoints += availablePoints;
					availablePoints -= availablePoints;
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