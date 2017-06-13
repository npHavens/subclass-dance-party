var Coffee = function(top, left) {
  //delete this.step;
  Dancer.call(this, top, left);
  if (this.top > 300) {
    this.top = this.top + 300;
  }

  this.$node.addClass('coffee');
  this.$node.append('<img src="./img/coffee.png">');
};

Coffee.prototype = Object.create(Dancer.prototype);
Coffee.prototype.constructor = Coffee;
