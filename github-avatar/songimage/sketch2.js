var song, fft;

function preload() {
	song = loadSound('song.mp3')
}

function setup() {
	canvas = createCanvas(500, 500);
	canvas.mouseClicked(togglePlay)
	background(0); 

	fft = new p5.FFT();
}

function draw() {

	background(0);

	var spectrum = fft.analyze();
	noStroke();
 	fill(0,255,0); // spectrum is green
  	for (var i = 0; i< spectrum.length; i++){
  		var x = map(i, 0, spectrum.length, 0, width);
  		var h = -height + map(spectrum[i], 0, 255, height, 0);
  		rect(x, height, width / spectrum.length, h )
  	}

  var waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255,0,0); // waveform is red
  strokeWeight(1);
  for (var i = 0; i< waveform.length; i++){
  	var x = map(i, 0, waveform.length, 0, width);
  	var y = map( waveform[i], -1, 1, 0, height);
  	vertex(x,y);
  }
  endShape();
}

function togglePlay() {
	if (song.isPlaying()) {
		song.pause();
	} else {
		song.loop();
	}
}