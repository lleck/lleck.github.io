var num = 50;
var x = new Array(num);
var y = new Array(num);

function setup() {
  canvas = createCanvas(windowWidth, windowHeight*2);
  canvas.parent('p5');
  noStroke();
}

function draw() {
  // Shift the values to the right
  for (var i = num-1; i > 0; i--) {
    x[i] = x[i-1];
    y[i] = y[i-1];
  }
  // Add the new values to the beginning of the array
  x[0] = mouseX;
  y[0] = mouseY;
  // Draw the circles
  for (var j = 0; j < num; j++) {
    fill(123,123,46,255-j*10);
    ellipse(x[j], y[j], j/2, j/2);
  }
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
