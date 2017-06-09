var MovingDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
};

MovingDancer.prototype = Object.create(BlinkyDancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;