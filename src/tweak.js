var Tweak = function(top, left, timeBetweenSteps) {
  MovingDancer.call(this, top, left, 50);
  this.$node.addClass('Tweak');
  this.$node.find('img').remove();
  this.$node.append('<img src="./img/tweak.png">');
};

Tweak.prototype = Object.create(MovingDancer.prototype);
Tweak.prototype.constructor = Tweak;