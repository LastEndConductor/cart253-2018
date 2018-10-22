// Paddle
//
// A class that defines how a paddle behaves, including the ability
// to specify the input keys to move it up and down
// as well as keep its score and change its appearance

// Paddle constructor
//
// Sets the properties with the provided arguments or defaults
function Paddle(x,y,w,h,speed,downKey,upKey) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.w = w;
  this.h = h;
  this.speed = speed;
  this.downKey = downKey;
  this.upKey = upKey;
  //////////////////NEW//////////////////
  //gave the paddles a score property
  this.score = 0;
  //////////////////END NEW//////////////////
}

// handleInput()
//
// Check if the up or down keys are pressed and update velocity
// appropriately
Paddle.prototype.handleInput = function() {
  if (keyIsDown(this.upKey)) {
    this.vy = -this.speed;
  }
  else if (keyIsDown(this.downKey)) {
    this.vy = this.speed;
  }
  else {
    this.vy = 0;
  }
}

// update()
// Update y position based on velocity
// Constrain the resulting position to be within the canvas
Paddle.prototype.update = function() {
  this.y += this.vy;
  this.y = constrain(this.y,0,height-this.h);
}

// display()
//
// Draw the paddle as a rectangle on the screen
Paddle.prototype.display = function() {
  //////////////new///////////////////
  //make the paddle get progressively redder based on the score
  var color = map(this.score,0,25,255,0);
  fill(255,color,color);
  rect(this.x,this.y,this.w,this.h);
  //////////////////END NEW//////////////
}