describe('growingDancer', function() {

  var growingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    growingDancer = new GrowingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(growingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node move', function() {
    var startPositionTop = growingDancer.top;
    var startPositionLeft = growingDancer.left;
    growingDancer.step();
    growingDancer.step();
    var movedHorizontal = startPositionTop !== growingDancer.top;
    var movedVertical = startPositionLeft !== growingDancer.left;
    expect(movedHorizontal || movedVertical).to.equal(true);
  });

  it('should report the correct constructor', function() {
    expect(growingDancer.constructor).to.equal(GrowingDancer);
  });

  it('should increase element width on every step', function() {
    var startingWidth = growingDancer.imageSizeInt;
    growingDancer.step();
    growingDancer.step();
    expect(growingDancer.imageSizeInt + startingWidth).to.be.above(startingWidth);
  });

  describe('dance', function() {
    it('should call step at least once per 700 ms', function() {
      sinon.spy(growingDancer, 'step');
      expect(growingDancer.step.callCount).to.be.equal(0);
      clock.tick(growingDancer.timeBetweenSteps);
      expect(growingDancer.step.callCount).to.be.equal(1);
      clock.tick(growingDancer.timeBetweenSteps);
      expect(growingDancer.step.callCount).to.be.equal(2);
    });
  });

});
