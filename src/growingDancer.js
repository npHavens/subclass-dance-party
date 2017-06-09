var GrowingDancer = function(top, left, timeBetweenSteps) {
  MovingDancer.call(this, top, left, timeBetweenSteps);
};

GrowingDancer.prototype = Object.create(MovingDancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.step = function() {
  MovingDancer.prototype.step.call(this);
  this.size = parseInt(this.$node.css('border-width') || 10);
  this.$node.css('border-width', this.size + 1);
};