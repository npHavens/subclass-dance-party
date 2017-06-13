var GrowingDancer = function(top, left, timeBetweenSteps) {
  MovingDancer.call(this, top, left);
  this.timeBetweenSteps = 700;
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
  this.getNearestCheesyPoofs();
};

GrowingDancer.prototype.grow = function() {
  var imageSize = /\d+/.exec(this.$node.find('img').css('width'));
  imageSize = imageSize || [75];
  this.imageSizeInt = +imageSize[0];
  if (this.imageSizeInt < 200 ) {
    this.$node.find('img').css('width', this.imageSizeInt + 10);
  }
};

GrowingDancer.prototype.getNearestCheesyPoofs = function() {
  //var currentLocation = {top: this.top, left: this.left};
  var Cartman = this;

  if (window.food.length > 1) {
    window.food.filter(function(item) {
      item.distance = Math.sqrt(Math.abs(Cartman.top - item.top)**2 + Math.abs(Cartman.top - item.top)**2);
      return item.constructor === CheesyPoofs;

     }).sort(function(a, b) {
      return b.distance - a.distance;
    });
    //console.log(window.food.length)
    //.log(window.food[0])

    window.food.forEach((item, i) => item.$node.append('<span>---' + i +'---<span>'));
console.log(window.food.length, window.food[0].distance, window.food[window.food.length - 1].distance)
   window.food[0].$node.find('img').animate({opacity: 0}, 5000);
   console.log(window.food.length, window.food[0].distance)
    window.food.shift();
     console.log(window.food.length);


    //console.log(window.food[0].distance, window.food[window.food.length - 1].distance)
  } else if (window.food.length === 1) {
   window.food[0].$node.find('img').animate({opacity: 0}, 1);

    window.food.shift();
    // console.log(window.food.length);

  }
  // $CheesyPoofs.each(function(i, element) {
  //   console.log(element.css('top'));
  // });
};