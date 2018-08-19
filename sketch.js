

function setup() {
  createCanvas(windowWidth, windowHeight);

  homeText();
  projectsText();
  socialText();
}

function draw() {
  background(51);

  createHeader();
  ////////////////////////
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function createHeader() {
  fill(66, 107, 244);
  noStroke();
  rect(0, 0, 5000, 160);
}
