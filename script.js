var num = 60;
var mx = [];
var my = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(255, 153);
  for (var i = 0; i < num; i++) {
    mx.push(i);
    my.push(i);
  }
}

var pink = color(237,173,199);
var violet = color(209,153,182);
var grape = color(196,147,176);
var quartz = color(166,139,165);
var gray = color(92,93,103);
var light = color(242,243,255);

function draw() {
  background('#F2F3FF'); 
  
  // Cycle through the array, using a different entry on each frame. 
  // Using modulo (%) like this is faster than moving all the values over.
  var which = frameCount % num;
  mx[which] = mouseX;
  my[which] = mouseY;
  
  var gray = color(92,93,20);

  for (var i = 0; i < num; i++) {
    // which+1 is the smallest (the oldest in the array)
    var index = (which+1 + i) % num;
    fill(92,93,103,100);
    ellipse(mx[index], my[index], i, i);
  }
}

// function mouseMoved() {
//   var speedX = abs(winMouseX - pwinMouseX);
//   var speedY = abs(winMouseY - pwinMouseY);
  
//   if (speedX > 20, speedY > 20) {
//     num = 80;
//   } else {
//     num = 40;
//   }
// }


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


  //the difference between previous and
  //current x position is the horizontal mouse speed
  // var speed = abs(winMouseX - pwinMouseX);
  //change the size of the circle
  //according to the horizontal speed
  // ellipse(50, 50, 10 + speed * 5, 10 + speed * 5);