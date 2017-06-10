// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();
  this.setPosition();
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function() {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.swapImage = function(urlString) {
  this.$node.find('img').remove();
  this.$node.append('<img src=' + '"' + urlString + '"' + '/>');
};

Dancer.prototype.lineUp = function() {
  this.oldStep = this.step;
  this.step = function() {};
  this.top = 400;
  this.step = this.oldStep;
};

Dancer.prototype.changeOutfit = function() {
  this.newOutfit = this.outfits[0];
  this.swapImage(this.newOutfit);
  this.outfits.shift();
  this.outfits.push(this.newOutfit);

  this.$node.find('img').css('width', this.imageSizeInt);
};