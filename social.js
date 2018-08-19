var socialVar = false;
var socialText;

function socialText() {
  //text
  var social = createButton("social media");
  social.position(700, 50);
  social.style('font-size', '65');
  social.mousePressed(socialClicked);
  //homeText.mousePressed(home);
  //textFont("LeagueGothic-CondensedRegular");
}

function socialClicked() {
  if(socialVar == false) {
      socialText = createP('twitter: twitter.com/');
      socialText.position(0, 250);
      socialText.style('font-size', '65');
      socialVar = true;
} else {
  socialText.remove();
  socialVar = false;
}
}
