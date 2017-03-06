"user strict";

var waves = [];

var resolution = null;
var maxSize = 5;

var col = {
  bgnd: 235,
  f: 0,
  s: 235
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(col.bgnd);
  stroke(col.s);
  strokeWeight(4);
  fill(col.f);
  // noFill();

  resolution = PI/12;

  // initialize Wave Objects
  for (let i=0; i<2*PI-resolution; i+=resolution) {
    waves.push(new Wave(i, 4, maxSize));
  }
}

function draw() {
  background(col.bgnd);
  translate(width/2, height/2);
  beginShape();
  for (let j=0; j<waves.length; j++) {
    waves[j].update(1);
    waves[j].reflect();
    waves[j].radius();
    waves[j].show();
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(col.bgnd);
}
