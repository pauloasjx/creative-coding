//based on - credits: https://youtu.be/0jjeOYMjmDU

var angle;
var limit;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight); //create canvas using window height and width
  
  background(0); //set background to black
  stroke(255);  //stroke color to white

  limit=5; //smaller valid line length value
  
}

function draw() {

	background(0);
	angle = mouseX/width*PI; //define angle using Mouse X position

	translate(width/2, 0); //translate to the top of canvas
	branch(250); //call branch function with line length of 250
}

  

function branch(len) {
  line(0, 0, 0, len); //draw line

  if(len > limit) {
	  push(); //pushMatrix 
	  translate(0, len); //translate to final of the last line
	  rotate(angle); //rotate angle
	  branch(len*0.6); //recursive call with smaller length
	  pop(); //popMatrix - reset transformations

	  push();
	  translate(0, len); //translate to final of the last line
	  rotate(-angle); //rotate mirrored angle
	  branch(len*0.6); //recursive call with smaller length
	  pop(); //popMatrix - reset transformations
	}
}