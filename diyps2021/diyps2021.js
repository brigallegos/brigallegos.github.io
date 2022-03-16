var img;
var initials ='sg'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://g00dgrief.github.io/images/unrequitedlove1.png');
  img2 = loadImage('https://g00dgrief.github.io/images/cursedk.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    stroke(0);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool

    stroke(20);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') { // third tool

    stroke(300, 100, 0, 80);
    strokeWeight(1);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') {

    stroke(0, 230, 255);
    strokeWeight(30);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (key == '5') { // this tool calls a function
    stroke(30, 100, 100);
    strokeWeight(1);
    testbox(20, 20, 20);
    testbox(20, 120, 200);
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    stroke(200, 76, 29);
    strokeWeight(5);
    triangle(mouseX, mouseY, 300, 150, pmouseX+300, pmouseY+150);
  } else if (toolChoice == '7') {

    fill(100, 25, 140, 40);
    noStroke();
    arc(mouseX, mouseY, 180, 150, 0, HALF_PI);
  } else if (toolChoice == '8') {

    stroke(0, 230, 50);
    strokeWeight(1);
    fill(300, 100, 0, 80);
    triangle(mouseX, mouseY, pmouseX, pmouseY, 300, 150);
  } else if (toolChoice == '9') {

    stroke(100, 25, 140);
    strokeWeight(1);
    fill(300, 100, 0, 40);
    rect(mouseX, mouseY, 140, 140);
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(125), random(75), random(125), random(20));
    ellipse(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX-100, mouseY-100);
    
  } else if (toolChoice == 'j' || toolChoice == 'J') { // g places the image we pre-loaded
    image(img2, mouseX-60, mouseY-60);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 50, 150);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
