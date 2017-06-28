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

	var waveform = fft.waveform();
	noFill();
	beginShape();
	strokeWeight(1);
	for (var i = 0; i< waveform.length; i++){
  		var x = map(i, 0, waveform.length, 0, width);
  		var y = map( waveform[i], -1, 1, 0, height);

  		stroke(random(255), random(255), random(255), random(255))

  		vertex(x,y);
  	}
  	endShape();
}

function togglePlay() {x
	if (song.isPlaying()) {
		song.pause();
	} else {
		song.loop();
	}
}