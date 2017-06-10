var GrowingDancer = function(top, left, timeBetweenSteps) {
  MovingDancer.call(this, top, left);
  this.timeBetweenSteps = 700;
  this.$node.addClass('growing-dancer');
  this.$node.find('img').remove();
  this.$node.append('<img src="./img/cartman.png">');
  this.outfits = ['./img/cop-cartman.png', './img/coon-cartman.png', './img/wizard-cartman.png', './img/Elvin_cartman.png', './img/cartman.png'];

  this.$node.on('click', this.changeOutfit.bind(this));
};

GrowingDancer.prototype = Object.create(MovingDancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.step = function() {
  MovingDancer.prototype.step.call(this);
  var imageSize = /\d+/.exec(this.$node.find('img').css('width'));
  imageSize = imageSize || [75];
  this.imageSizeInt = +imageSize[0];
  if (this.imageSizeInt < 200 ) {
    this.$node.find('img').css('width', this.imageSizeInt + 1);
  }
};
