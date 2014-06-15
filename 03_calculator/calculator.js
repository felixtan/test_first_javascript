var Calculator = function() {
  this.stored = 0;  // current value on the screen of the calculator

  this.value = function() {
      return this.stored;
  };

  this.add = function(num) {
    this.stored += num;
    return this.stored;
  };

  this.subtract = function(num) {
    this.stored -= num;
    return this.stored;
  };
};


// Scot's answers
// class names should be capitalized
// var Calculator = function() {
//   var calculator = {};
//   var total = 0;

//   calculator.value = function() {
//     return total;
//   }

//   calculator.add = function(num) {
//     return total += num;
//   }

//   calculator.subtract = function(num) {
//     return total -= num;
//   }

//   // if this operator isn't used, this is required. is this the answer to the problems I was having before?
//   return calculator;
// };

// TO KNOW:
// Difference between new and .constructor();
