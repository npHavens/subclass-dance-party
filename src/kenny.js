var Kenny = function(top, left, timeBetweenSteps) {
  MovingDancer.call(this, top, left, 400);
  this.$node.addClass('Kenny');
  this.$node.find('img').remove();
  this.$node.append('<img src="./img/kenny.png">');

  this.$node.on('click', function() {
    this.setPosition();
    this.step = function() {};
    this.kill();
  }.bind(this));
};

Kenny.prototype = Object.create(MovingDancer.prototype);
Kenny.prototype.constructor = Kenny;


Kenny.prototype.kill = function() {
  this.swapImage('./img/kenny_dead.png');
  this.$node.find('img').css({width: 90, height: 110});
  this.$node.append('<img src="./img/kenny_angel.png" class= "angel">');
  $('.angel').animate({top: -$(document).height()}, 2000);
};