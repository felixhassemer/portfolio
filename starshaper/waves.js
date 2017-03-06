// wave class
function Wave(angle, speed, diam) {
  this.x = 0;
  this.y = 0;
  this.v = null;
  this.history = [];
  this.diameter = diam;
  this.speed = speed;
  this.r = 0;
  this.angle = angle;

  this.update = function(historySteps) {
    // conversion polar to karthesian
    this.x = this.r * cos(this.angle);
    this.y = this.r * sin(this.angle);
    // create Vector from coordinates
    this.v = createVector(this.x, this.y)
    // push new vector to history array
    this.history.push(this.v);
    // splice history to keep it at max length
    if (this.history.length > historySteps) {
      this.history.splice(0,1);
    }
  }

  // invert speed if width of canvas is reached
  this.reflect = function() {
    if ((this.x <= -width/2) || (this.x >= width/2)) {
      this.speed = -this.speed;
    }
    if ((this.y <= -height/2) || (this.y >= height/2)) {
      this.speed = -this.speed;
    }
  }

  // move the position
  this.radius = function() {
    this.r += this.speed;
  }

  // draw the object and ghosts
  this.show = function() {
    for (let i=0; i<this.history.length; i++) {
      var pos = this.history[i];
      vertex(pos.x, pos.y);
      // ellipse(pos.x, pos.y, this.diameter*(i/this.history.length), this.diameter*(i/this.history.length));
    }
  }
}
