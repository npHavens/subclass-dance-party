var GrowingDancer = function(top, left, timeBetweenSteps) {
  MovingDancer.call(this, top, left, timeBetweenSteps);
};

GrowingDancer.prototype = Object.create(MovingDancer.prototype);
GrowingDancer.constructor = GrowingDancer;