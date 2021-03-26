function setup() {
  createCanvas(windowWidth, windowHeight);
  //color the background to black color
  background(0);
  a=1;

}

function keyPressed() {
  if(key=='o') {//if 'y' is pressed, the brush turns into color red and orange
    a = 1;
  }
  if(key=='b') {//if 'y' is pressed, the brush turns into color blue
    a = 2;
  }
  if(key=='y') {//if 'y' is pressed, the brush turns into color yellow
    a = 3;
  }
  if(key=='r') { //if 'r' is pressed, the background gets clear
    a = 4;
  }
}

function draw() {
  if (a == 1) {
    //brush color to orange and red
    if(mouseIsPressed == true) {
      stroke(mouseX+250, random(200), random(mouseY-250));
      strokeWeight(6);
      //set x-axis and y-axis symmetrical to each other
      point(mouseX-5, mouseY-5);
      point(mouseX*-1+windowWidth, mouseY-5);
      point(mouseX*-1+windowWidth, mouseY*-1+windowHeight);
      point(mouseX-5, mouseY*-1+windowHeight);
      }
  }
  if (a == 2) {
    //brush color to blue
    if(mouseIsPressed == true) {
      stroke(random(mouseX-70), 240, mouseY+80);
      strokeWeight(6);
      point(mouseX-5, mouseY-5);
      point(mouseX*-1+windowWidth, mouseY-5);
      point(mouseX*-1+windowWidth, mouseY*-1+windowHeight);
      point(mouseX-5, mouseY*-1+windowHeight);
      }
  }
  if (a == 3) {
    //brush color to yellow
    if(mouseIsPressed == true) {
      stroke(mouseX+150, 200, random(mouseY-50));
      strokeWeight(6);
      point(mouseX-5, mouseY-5);
      point(mouseX*-1+windowWidth, mouseY-5);
      point(mouseX*-1+windowWidth, mouseY*-1+windowHeight);
      point(mouseX-5, mouseY*-1+windowHeight);
      }
  }
  //clear the background
  if (a == 4) {
    background(0);
  }
}