// knocks out first 4 tests, just replace with correct formula
var f2c = function(tempInF) {
  return (tempInF-32)*5/9;
}

// knocks out next 4 tests, just replace with correct formula
var c2f = function(tempInC) {
  return tempInC*9/5+32;
}


var Temperature = function() {}

// set fahrenheit
Temperature.prototype.setFahrenheit = function(deg) {
    this.degF = deg;
    return;
}

Temperature.prototype.setCelcius = function(deg) {
    this.degC = deg;
    return;
}

// get fahrenheit if it's set, convert to celsius if not
Temperature.prototype.fahrenheit = function() {
  if(typeof this.degF == "undefined") {
    this.degF = c2f(this.degC);
    return this.degF;
  }
  else
    return this.degF;
}

// get celsius if it's set, convert to fahrenheit if not
Temperature.prototype.celcius = function() {
  if(typeof this.degC == "undefined") {
    this.degC = f2c(this.degF);
    return this.degC;
  }
  else
    return this.degC;
}

/* David's answers
Temperature.prototype.setFahrenheit = function(deg) {
    this.degF = deg;
}

Temperature.prototype.setCelcius = function(deg) {
    this.degF = f2c(deg);
}

Temperature.prototype.fahrenheit = function() {
    return this.degF;
}

Temperature.prototype.celcius = function() {
  return f2c(this.degF);
}

// Solves the second to last test
var Temperature = function(init_fahr) {
  // this = {};
  // this.__proto__ = Temperature.prototype

  var fahr = init_fahr;
  this.__getFahr = function() {
    return this.fahr;
  };
  this.__setFahr = function(_fahr) {
    fahr = _fahr;
  }

  // return this;
}

*/