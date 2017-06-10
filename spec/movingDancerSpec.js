describe('movingDancer', function() {

  var movingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    movingDancer = new MovingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(movingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node move', function() {
    var startPositionTop = movingDancer.top;
    var startPositionLeft = movingDancer.left;
    movingDancer.step();
    movingDancer.step();
    var movedHorizontal = startPositionTop !== movingDancer.top;
    var movedVertical = startPositionLeft !== movingDancer.left;
    expect(movedHorizontal || movedVertical).to.equal(true);
  });

  it('should report the correct constructor', function() {
    expect(movingDancer.constructor).to.equal(MovingDancer);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(movingDancer, 'step');
      expect(movingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      expect(movingDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(movingDancer.step.callCount).to.be.equal(2);
    });
  });
});
