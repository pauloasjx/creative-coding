function World(x, y, sx, sy, mass, radius){
  this.r = createVector(x, y);
  this.v = createVector(sx, sy);
  this.a = createVector(0, 0);

  this.mass = mass;
  this.radius = radius;
  
  this.show = function(){
    noStroke();
    ellipse(this.r.x, this.r.y, this.radius*2, this.radius*2);
  }

  // g = 'G'*m/d² * vetor
  this.gravity = function(w){
    var d = dist(this.r.x, this.r.y, w.r.x, w.r.y);
    var r = -0.000067*w.mass/d*d;


    aux = this.r.copy();
    aux = aux.sub(w.r);
    aux.setMag(r);

    this.a.set(aux);
  }

  this.accelerate = function(){
    this.v.add(this.a);
  }

  this.translate = function(){
    this.r.add(this.v);
  }

  this.collider = function(w){
    var d = dist(this.r.x, this.r.y, w.r.x, w.r.y);
    var r = this.radius+w.radius;

    if(r>=d) return true;
    return false;
  }

  this.connection = function(w){
    stroke(255);
    line(this.r.x, this.r.y, w.r.x, w.r.y);
  }
}

var worlds = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, P2D);
  background(0);
  fill(255);

  worlds.push(new World(width/2, height/2, 0, 0, 500, 30));
  
}

function draw() {
  background(0);

  for(var i=worlds.length-1; i>=0; i--){
  	worlds[i].show();
  	worlds[i].accelerate();
  	worlds[i].translate();
  	for(var j=worlds.length-1; j>=0; j--){
  		if(i!=j) {
        worlds[i].connection(worlds[j]);
	  		worlds[i].gravity(worlds[j]);
	  		if(worlds[0].collider(worlds[j]) && j!=0){
	  			worlds[0].mass += worlds[j].mass;
	  			worlds[0].radius += worlds[j].radius/30*PI;
	  			worlds.splice(j);
	  		}
	  	}
  	}
  }
}

function mouseClicked() {
  worlds.push(new World(mouseX, mouseY, random(3), random(3), random(4), random(4)));
}