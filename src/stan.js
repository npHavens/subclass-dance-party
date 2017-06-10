var Stan = function(top, left, timeBetweenSteps) {
  MovingDancer.call(this, top, left, 500);
  this.$node.addClass('stan');
  this.$node.find('img').remove();
  this.$node.append('<img src="./img/Stan.png">');
};

Stan.prototype = Object.create(MovingDancer.prototype);
Stan.prototype.constructor = Stan;