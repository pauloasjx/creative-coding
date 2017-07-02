var zoom=1;
var rX=0;
var rY=0;
var mX=0;
var mY=0;

// Posição
var v;

// Variação Posição
var dv;

// Número de Prandtl
var sigma = 10;

// Número de Rayleigh
var ro = 28;

var beta = 8/3;

// Armazena todos pontos
var pontos = [];

function setup() {
  createCanvas(600, 400, WEBGL);
  colorMode(HSB);


  v  = createVector(0.01, 0, 0);
  dv = createVector(0, 0, 0);
}

function draw() {

  // Atualiza o fundo para preto
  background(0);
  
  // Aumenta a escala
  scale(3);

  // Define a variação de tempo
  var dt = 0.01;

  
  // Equações que governam o atractor de lorenz
  dv.x = (sigma * (v.y - v.x))* dt;
  dv.y = (v.x * (ro - v.z) - v.y) * dt;
  dv.z = (v.x * v.y - beta * v.z) * dt;
  
  // Atualiza valores em relação ao tempo
  v.add(dv);

  // Armazena o ponto na lista de pontos
  pontos.push(v.copy());

  camera(mX, mY, zoom);
  rotateY(rY);
  rotateX(rX);

  beginShape();
  var colorRed=0;
  for(var i=0; i<pontos.length; i++){
    fill(colorRed%255, 255, 255);
    vertex(pontos[i].x, pontos[i].y, pontos[i].z);
    colorRed+=0.2;
  }
  endShape();
}

function mouseWheel(e){
  zoom+=e.delta/10;
}

function keyPressed(){
  if(keyCode == 65) rY+=0.1;
  if(keyCode == 68) rY-=0.1;
  if(keyCode == 87) rX+=0.1;
  if(keyCode == 83) rX-=0.1;
  if(keyCode == 38) mY+=0.1;
  if(keyCode == 40) mY-=0.1;
  if(keyCode == 37) mX+=0.1;
  if(keyCode == 39) mX-=0.1;
}