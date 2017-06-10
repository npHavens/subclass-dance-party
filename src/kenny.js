var Kenny = function(top, left, timeBetweenSteps) {
  MovingDancer.call(this, top, left, 300);
  this.$node.addClass('Kenny');
  this.$node.find('img').remove();
  this.$node.append('<img src="./img/kenny.png">');
};

Kenny.prototype = Object.create(MovingDancer.prototype);
Kenny.prototype.constructor = Kenny;