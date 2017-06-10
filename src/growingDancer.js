var GrowingDancer = function(top, left, timeBetweenSteps) {
  MovingDancer.call(this, top, left);
  this.timeBetweenSteps = 500;
  this.$node.addClass('growing-dancer');
  this.$node.find('img').remove();
  this.$node.append('<img src="./img/cartman.png" height="75">');
};

GrowingDancer.prototype = Object.create(MovingDancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.step = function() {
  MovingDancer.prototype.step.call(this);
  this.size = parseInt(this.$node.css('border-width') || 10);
  this.$node.css('border-width', this.size + 1);
};