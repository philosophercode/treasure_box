const spotlight = document.querySelector('#spotlight');
const treasure = document.querySelector('#treasureBox');
const landscape = document.querySelector('#landscape');
const introText = document.querySelector('#introText');
const directions = document.querySelector('#directions');


let ranXtreasure = 0;
let ranYtreasure = 0;
let marshmellows = 1;


// settinging intitial values for the spotlight
let ySpotlight = 100;
let xSpotlight = 100;


// let ySpotlight = spotlight.style.top;
// let xSpotlight = spotlight.style.left;



// place treasure randomly
let ranX = function (ranXtreasure) { 
    let min = 0;
    let max = window.outerWidth;
    ranXtreasure = Math.floor(Math.random()*max);
    treasure.style.left = ranXtreasure+"px";
    console.log(ranXtreasure);
 }
ranX(ranXtreasure);

 let ranY = function (ranYtreasure) { 
    let min = 0;
    let max = window.outerHeight;
    ranYtreasure = Math.floor(Math.random()*max);
    treasure.style.top = ranYtreasure+"px";
    console.log(ranYtreasure);
 }
ranY(ranYtreasure);

function ran2D(ranXtreasure, ranYtreasure) {
  let ranX = function (ranXtreasure) { 
    let min = 0;
    let max = window.outerWidth;
    ranXtreasure = Math.floor(Math.random()*max);
    treasure.style.left = ranXtreasure+"px";
    console.log(ranXtreasure);
    return ranXtreasure;
 }
 let ranY = function (ranYtreasure) { 
    let min = 0;
    let max = window.outerHeight;
    ranYtreasure = Math.floor(Math.random()*max);
    treasure.style.top = ranYtreasure+"px";
    console.log(ranYtreasure);
    return ranXtreasure;
 }
 console.log("ran2D ran!");
}



// 		move spotlight with keyboard interface
// http://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
// https://git.generalassemb.ly/nyc-wdi-ada/div-racer/blob/master/app.js

document.addEventListener('keydown', function game(event) {
		
		console.log(event);

    // left arrow is pressed
    if (event.keyCode === 37) {
			xSpotlight = xSpotlight-10;
      spotlight.style.left = xSpotlight+"px";
    };

    // up arrow is pressed
    if (event.keyCode === 38) {
      ySpotlight = ySpotlight-10;
			spotlight.style.top = ySpotlight+"px";
    };

    // right arrow is pressed
    if (event.keyCode === 39) {
      xSpotlight = xSpotlight+10;
			spotlight.style.left = xSpotlight+"px";
    };

    // down arrow is pressed
    if (event.keyCode === 40) {
			ySpotlight = ySpotlight+10;
      spotlight.style.top = ySpotlight+"px";
    };

    // reset fx
    if (event.keyCode === 82) {

      treasure.style.visibility = "hidden";
      introText.style.visibility = "hidden";
      directions.style.visibility = "hidden";
      ran2D(ranXtreasure, ranYtreasure);
    };
});


const mouseMove = function (event) {
    // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmousemove
    let x = event.clientX;
    let y = event.clientY;
    
    spotlight.style.top = y+"px";
    spotlight.style.left = x-30+"px";
    let spotlightLocationX = spotlight.style.left;
    let spotlightLocationY = spotlight.style.top;
    
    var treasurePosition = {x: parseInt(treasure.style.left), y: parseInt(treasure.style.top), width: 50, height: 50}
    var spotlightPosition = {x: parseInt(spotlight.style.left), y: parseInt(spotlight.style.top), width: 100, height: 100}


    // https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    if (spotlightPosition.x < treasurePosition.x +       treasurePosition.width &&
      spotlightPosition.x + spotlightPosition.width > treasurePosition.x &&
      spotlightPosition.y < treasurePosition.y + treasurePosition.height &&
      spotlightPosition.height + spotlightPosition.y > treasurePosition.y) {
        treasure.style.visibility = "visible";
        console.log("collision detected!");
        marshmellows++;
        console.log(marshmellows);
        // spotlight.style.background-color = "red";
        // landscape.createElement('h1');
        // landscape.h1.innerText(marshmellows);
        // setTimeout(ran2D, 5000);
      }

       if (spotlightPosition.x < treasurePosition.x +       treasurePosition.width+800 &&
      spotlightPosition.x + spotlightPosition.width > treasurePosition.x &&
      spotlightPosition.y < treasurePosition.y + treasurePosition.height+400 &&
      spotlightPosition.height + spotlightPosition.y > treasurePosition.y) {
        spotlight.style.backgroundColor = "yellow";
      }
      if (spotlightPosition.x < treasurePosition.x +       treasurePosition.width+400 &&
      spotlightPosition.x + spotlightPosition.width > treasurePosition.x &&
      spotlightPosition.y < treasurePosition.y + treasurePosition.height+300 &&
      spotlightPosition.height + spotlightPosition.y > treasurePosition.y) {
        spotlight.style.backgroundColor = "orange";
      }
      if (spotlightPosition.x < treasurePosition.x +       treasurePosition.width+100 &&
      spotlightPosition.x + spotlightPosition.width > treasurePosition.x &&
      spotlightPosition.y < treasurePosition.y + treasurePosition.height+100 &&
      spotlightPosition.height + spotlightPosition.y > treasurePosition.y) {
        spotlight.style.backgroundColor = "red";
      }



  // if (
  //     (spotlightLocationX === treasure.style.top)
  //     &&
  //     (spotlightLocationY === treasure.style.left)
  //   ) {
  //     treasure.style.visibility = visible;
  //     console.log("you found it!");
  // }
}







// collision detection between spotlight and treasure

// alert of win, add score, and restart game