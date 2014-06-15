var Mammal = function(name) {
  this.name = name;
  this.offspring = [];
  this.sayHello = function() {
    return "My name is " + this.name + ", I'm a Mammal"
  }
  this.haveBaby = function() {
    var child = new Mammal("Baby " + this.name);
    this.offspring.push(child);
    return child;
  }
}

/*  David's answers
this.haveBaby = function() {
    var child = new Mammal("Baby " + this.name);
    this.offspring.push(child);
    return child;
}

var Cat = function(name, color) {
  // this.name = name;
  // this.offspring = [];

  var thisCreateByCat = this;
  Mammal.call(thisCreateByCat, name);
  this.color = color;
};

Cat.prototype = new Mammal;

// The below statement switches the superclass of the object from Mammal to Cat
// Cat.prototype.constructor = Cat;

Cat.prototype.haveBaby = function(color) {
  var kitten = Cat.parent.prototype.haveBaby.call(this);
  kitten.color = color;
  return kitten;
};

TO-KNOW:
  difference between

*/




