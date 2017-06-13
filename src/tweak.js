var Tweak = function(top, left, timeBetweenSteps) {
  MovingDancer.call(this, top, left, 400);
  this.$node.addClass('Tweak');
  this.swapImage('./img/tweak.png');
};

Tweak.prototype = Object.create(MovingDancer.prototype);
Tweak.prototype.constructor = Tweak;

Tweak.prototype.step = function() {
  MovingDancer.prototype.step.call(this);

  if (window.coffee.length) {
    this.getNearestCoffee();

    if (this.closestCoffee.distance < 150) {
      this.drink();
      this.timeBetweenSteps -= 50;
    }
  }
};

Tweak.prototype.getNearestCoffee = function() {
  var tweak = this;

  window.coffee.forEach(function(item) {
    item.distance = Math.sqrt(Math.abs(tweak.x - item.x)**2 + Math.abs(tweak.y - item.y)**2);
   });
  this.sortedByDistance = window.coffee.sort(function(a, b) {
    return a.distance - b.distance;
  });

  this.closestCoffee = this.sortedByDistance[0];
};

