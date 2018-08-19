var number;

function show() {
  fill(255);
  stroke(0);
  rect(x, y, 50, 50);
}

function update() {
  //console.log("update function is running!");

  var d = dist(x, y, foodx, foody);
  if(d < 80) {
    selectPos = true;
  }

////////////////////////////////////////////////////////////

  x = constrain(x, 0, width-20);
  y = constrain(y, 0, height-20);

/////////////////////////////////////////////////////

  if(number == 1) {
    y = y - 20;
  } if(number == 2) {
    y = y + 20;
  } if(number == 3) {
    x = x - 20;
  } if(number == 4) {
    x = x + 20;
  }
}

////////////////////////////////////////////////////////

function mousePressed() {
  var selectedPos = false;

  if(cheats == true) {
    if(selectedPos == false) {
      x = mouseX;
      y = mouseY;
      selectedPos = true;
    }
  }
}

/////////////////////////////////////////////////////

function keyPressed() {
  if(cheats == true) {
    if(keyCode == 'UP_ARROW') {
      y = y - 20;
    } if(keyCode == 'DOWN_ARROW') {
      y = y + 20;
    } if(keyCode == 'LEFT_ARROW') {
      x = x - 20;
    } if(keyCode == 'RIGHT_ARROW') {
      x = x + 20;
    }
  }
}
