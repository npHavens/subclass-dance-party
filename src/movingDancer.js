var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('moving-dancer');
  this.$node.append('<img src="./img/kenny.png" height="75">');
};

MovingDancer.prototype = Object.create(BlinkyDancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.height = $(document).height();
  this.width = $(document).width();

  this.newPosition = {};
  this.newPosition.top = this.top + getRandomInt(-50, 50);
  this.newPosition.left = this.left + getRandomInt(-50, 50);

  if (this.newPosition.top >= this.height - 100 || this.newPosition.top <= 200) {
    this.newPosition.top = this.top;
  }
  if (this.newPosition.left >= this.width - 100 || this.newPosition.left <= 0) {
    this.newPosition.left = this.left;
  }

  this.$node.animate(this.newPosition);
  this.top = this.newPosition.top;
  this.left = this.newPosition.left;
  this.x = this.left;
  this.y = $(document).height() - this.top;
};

var getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};


