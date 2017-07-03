var mic;
var vertexs = [];

function setup() {
  createCanvas(400, 400);

  mic = new p5.AudioIn();
  mic.start();
  fill(255);
  stroke(255);
}

function draw() {
  background(0);
  translate(width/2, height/2);

  /*
  vertexs.push(createVector(x, map(mic.getLevel(), 0, 1, height, 0)));

  beginShape();
  for(var i=0; i<=vertexs.length; i++){
  	vertex(vertexs[i].x, vertexs[i].y);
  }
  endShape();

  if(vertexs.length > width){
  	vertexs.splice(1, 1);
  	x--;
  }
  */

  ellipse(0, 0, mic.getLevel()*800, mic.getLevel()*800);
}