var CheesyPoofs = function(top, left) {
  Dancer.call(this, top, left);
  this.$node.addClass('CheesyPoofs');
  this.$node.append('<img src="./img/CheesyPoofs.png">');
};

CheesyPoofs.prototype = Object.create(Dancer.prototype);
CheesyPoofs.prototype.constructor = CheesyPoofs;