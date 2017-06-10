var Kyle = function(top, left, timeBetweenSteps) {
  MovingDancer.call(this, top, left, 300);
  this.$node.addClass('Kyle');
  this.$node.find('img').remove();
  this.$node.append('<img src="./img/Kyle.png">');
};

Kyle.prototype = Object.create(MovingDancer.prototype);
Kyle.prototype.constructor = Kyle;