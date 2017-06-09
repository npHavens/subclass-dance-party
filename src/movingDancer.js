var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('moving-dancer');

  this.position = {top: top, left: left};
  this.oldStep = this.step;

  this.step = function() {
    this.oldStep();
    this.height = $(document).height();
    this.width = $(document).width();

    this.newPosition = {};
    this.newPosition.top = this.position.top + getRandomInt(-50, 50);
    this.newPosition.left = this.position.left + getRandomInt(-50, 50);

    if (this.newPosition.top > this.height || this.newPosition.top < 0) {
      this.newPosition.top = this.position.top;
    }
    if (this.newPosition.left > this.width || this.newPosition.left < 0) {
      this.newPosition.left = this.position.left;
    }

    this.$node.animate(this.newPosition, timeBetweenSteps);
    this.position = this.newPosition;

  };

  this.getPosition = function() {
    return this.$node.offset();
  };

};

MovingDancer.prototype = Object.create(BlinkyDancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

var getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};