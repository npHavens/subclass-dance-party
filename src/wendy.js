var Wendy = function(top, left, timeBetweenSteps) {
  MovingDancer.call(this, top, left, 400);
  this.$node.addClass('Wendy');
  this.$node.find('img').remove();
  this.$node.append('<img src="./img/Wendy.png">');
};

Wendy.prototype = Object.create(MovingDancer.prototype);
Wendy.prototype.constructor = Wendy;