var Shelly = function(top, left, timeBetweenSteps) {
  MovingDancer.call(this, top, left, 500);
  this.$node.addClass('Shelly');
  this.$node.find('img').remove();
  this.$node.append('<img src="./img/Shelly.png">');
};

Shelly.prototype = Object.create(MovingDancer.prototype);
Shelly.prototype.constructor = Shelly;