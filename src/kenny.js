var Kenny = function(top, left, timeBetweenSteps) {
  MovingDancer.call(this, top, left, 300);
  this.$node.addClass('Kenny');
  this.$node.find('img').remove();
  this.$node.append('<img src="./img/kenny.png">');

  this.$node.on('click', this.kill.bind(this));
};

Kenny.prototype = Object.create(MovingDancer.prototype);
Kenny.prototype.constructor = Kenny;


Kenny.prototype.kill = function() {
  this.swapImage('./img/kenny_dead.jpg');
  this.step = function() {};
};