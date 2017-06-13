var CheesyPoofs = function(top, left) {
  //delete this.step;
  Dancer.call(this, top, left);
  if (this.top > 300) {
    this.top = this.top + 300;
  }

  this.$node.addClass('CheesyPoofs');
  this.$node.append('<img src="./img/CheesyPoofs.png">');

};

CheesyPoofs.prototype = Object.create(Dancer.prototype);
CheesyPoofs.prototype.constructor = CheesyPoofs;

// CheesyPoofs.prototype.step = function() {
//   this.$node.animate({});
// };