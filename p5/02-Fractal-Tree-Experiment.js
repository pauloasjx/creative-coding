//based on - credits: https://youtu.be/0jjeOYMjmDU

var angle;
var limit;

var branches = 4; //num of branchs per endpoint

function setup() {
  createCanvas(window.innerWidth, window.innerHeight); //create canvas using window height and width
  
  background(0); //set background to black
  stroke(150, 0, 255, 50);  //set stroke color to purple

  limit=10; //line length limit
  
}

function draw() {

	background(0); 
	angle = mouseX/width*PI; //calculate angle based on mouse X position
	

	translate(width/2, 0); //translate to the middle of canvas
	scale(1.5); //scale transform
	branch(200); //call branch function
}

  

function branch(len) {
  line(0, 0, 0, len); //draw line length -> len param

  if(len > limit) {
  	for(var i=1; i<=branches/2; i++){
		  push(); //pushMatrix
		  translate(0, len); //translate to bottom
		  rotate(angle*i); //rotation transformation
		  branch(len*0.6); //recursive call
		  pop(); //popMatrix - reset transformations
		}

		for(var i=1; i<=branches/2; i++){
		  push();
		  translate(0, len); 
		  rotate(-angle*i); //mirrored rotation
		  branch(len*0.6); 
		  pop();
		}
	}
}