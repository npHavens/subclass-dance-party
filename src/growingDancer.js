var GrowingDancer = function(top, left, timeBetweenSteps) {
  MovingDancer.call(this, top, left);
  this.timeBetweenSteps = 500;
  this.$node.addClass('growing-dancer');
  this.$node.find('img').remove();
  this.$node.append('<img src="./img/cartman.png">');
  this.outfits = ['./img/Cop-cartman.png', './img/coon-cartman.png', './img/wizard-cartman.png', './img/cartman.png'];

  this.$node.on('click', this.changeOutfit.bind(this));
};

GrowingDancer.prototype = Object.create(MovingDancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.step = function() {
  MovingDancer.prototype.step.call(this);

  if (window.food.length) {
    this.getNearestCheesyPoofs();
    if (this.closestCheesyPoofs.distance < 150) {
      this.eat();
      this.grow();
      this.timeBetweenSteps += 50;
    }
  }
};

GrowingDancer.prototype.grow = function() {
  var imageSize = /\d+/.exec(this.$node.find('img').css('width'));
  imageSize = imageSize || [75];
  this.imageSizeInt = +imageSize[0];
  if (this.imageSizeInt < 300 ) {
    this.$node.find('img').css('width', this.imageSizeInt + 10);
  }
  if (this.imageSizeInt > 150) {
    this.swapImage('./img/Cartman-keep.png')
    this.$node.find('img').css('width', this.imageSizeInt);
  }
};

GrowingDancer.prototype.getNearestCheesyPoofs = function() {
  var Cartman = this;

  window.food.forEach(function(item) {
    item.distance = Math.sqrt(Math.abs(Cartman.x - item.x)**2 + Math.abs(Cartman.y - item.y)**2);
   });
  this.sortedByDistance = window.food.sort(function(a, b) {
    return a.distance - b.distance;
  });

  this.closestCheesyPoofs = this.sortedByDistance[0];
};

