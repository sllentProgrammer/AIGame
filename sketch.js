var x = 600/2;
var y = 600/2;

var foodx;
var foody;

var selectPos = true;
var cheats = false;

var button;
var framerate = frameRate;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(244, 248, 252);

  update();
  show();
  showFood();
  frameRate(60);

//////////////////////////////////////////

if(cheats == false) {
  button = createButton('turn cheats on');
  button.position(0, 20);
  button.size(100, 50);
  button.mousePressed(setCheats);
} else {
  button = createButton('turn cheats off');
  button.position(0, 20);
  button.size(100, 50);
  button.mousePressed(setCheats);
}

///////////////////////////////////////

  if(selectPos == true) {
    foodx = random(600);
    foody = random(600);
    selectPos = false;
  }

  number = floor(random(5));
}

/////////////////////////////////////

function setCheats() {
  if(cheats == false) {
    cheats = true;
  } else {
    cheats = false;
  }
}
