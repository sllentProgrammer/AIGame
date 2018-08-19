var projectsVar = false;
var projectsText;
var AIGameD = 0;

function projectsText() {
  //text
  var projects = createButton("projects");
  projects.position(300, 50);
  projects.style('font-size', '65');
  projects.mousePressed(projectsClicked);
  //homeText.mousePressed(home);
  //textFont("LeagueGothic-CondensedRegular");
}

function projectsClicked() {
  if(projectsVar == false) {
      projectsText = createButton("AI Game");
      projectsText.position(0, 250);
      projectsText.style('font-size', '65');
      projectsText.mousePressed(AIgame);
      projectsVar = true;
} else {
  projectsText.remove();
  projectsVar = false;
}
}

function AIgame() {
  //saveJSON(data, 'data.json');
  window.location.href = "http://sllentProgrammer.github.io/AIGame/";
}
