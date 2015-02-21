// point giving directive

// This was on element
// onmousemove="distributePoints()" onclick="grantPoints()" onmouseleave="fuckOff()"

// All this code was in global

var availablePoints = 10,
    givenPoints = 0,
    grantedPoints = 0;

var div = document.getElementById("dude1");

function distributePoints() {
  //calculate where the cursor is now relative from the start of the bar
  var cursor = event.clientX;
  var right = div.clientWidth;

  //calculate percentage of points that will be distributed through givePoints()
  var points = ((cursor / right) * availablePoints);
  points = Math.round(points);

  //set given points to a certain value
  if(points <= availablePoints){
    givenPoints  = points;
    div.innerHTML = points;
  } 
}

function grantPoints() {
  //send given points to some schmuck
  if(availablePoints >= givenPoints){
    grantedPoints += givenPoints;
    availablePoints -= givenPoints;
    document.getElementById("points").innerHTML = grantedPoints;
  }
  //set given points to 0
  div.innerHTML = "";
  givenPoints = 0;
}

function fuckOff() {
  //give points back if not given through givepoints()
  if(givenPoints != 0){
    availablePoints += givenPoints;
  }
  //set distributed points to 0
  div.innerHTML = "";
  givenPoints = 0;
}