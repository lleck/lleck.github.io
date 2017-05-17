function setup() {
  canvas = createCanvas(windowWidth, windowHeight * 2);
  canvas.parent('p5');
  stroke(0, 0, 0, 40);
  noFill();
}

function draw() {
  background(255);
  // Shift the values to the right

  // Draw the circles
  translate(windowWidth / 2, windowHeight / 2);
  for (var i = 0; i < 8; i++) {
    push();
    rotate(TWO_PI * i / 8);
    var tx = 200 * noise(0.001 * frameCount);
    translate(tx, 0);
    stroke(0, 0, 0, tx / 3);
    ellipse(0, 0, -mouseY - tx, -mouseY - tx);
    for (var j = 0; j < 6; j++) {
      push();
      rotate(TWO_PI * j / 6);
      var rx = 60 * noise(0.001 * frameCount + 10);
      stroke(0, 0, 0, rx / 3);
      ellipse(rx, 0, (mouseX / 50) * rx + 10, (mouseX / 50) * rx + 10);
      pop();
    }
    translate()
    pop();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
