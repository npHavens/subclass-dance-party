var Butters = function(top, left, timeBetweenSteps) {
  MovingDancer.call(this, top, left, 300);
  this.$node.addClass('Butters');
  this.$node.find('img').remove();
  this.$node.append('<img src="./img/Butters.png">');
};

Butters.prototype = Object.create(MovingDancer.prototype);
Butters.prototype.constructor = Butters;