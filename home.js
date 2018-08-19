var homeVar = true;

function homeText() {
  //text
  var home = createButton("home");
  home.position(0, 50);
  home.style('font-size', '65');
}

function homeClicked() {
  socialText.remove();
  projectsText.remove();
}

function homeShow() {
}
