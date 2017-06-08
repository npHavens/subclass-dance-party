// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  //var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), timeBetweenSteps);
  };
  this.step();

  this.setPosition = function(top, left) {
    //console.log('calling setPosition')
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    var styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(styleSettings);
  };
   //console.log(JSON.stringify(this));

  this.setPosition(top, left);

  // use jQuery to create an HTML <span> tag



  //this.step(timeBetweenSteps);


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  //this.setPosition(top, left);
  //console.log(JSON.stringify(this));

};


