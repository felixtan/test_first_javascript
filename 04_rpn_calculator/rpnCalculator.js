// Scot's answers

var Calculator = function() {
  var stack = [];

  var popAndCompute = function(operation) {
    var op1 = stack.pop();
    var op2 = stack.pop();
    var result = operation(op1, op2);
    stack.push(result);
  }

  this.push = function(num) {
    stack.push(num);
  };

  this.value = function() {
    return stack[stack.length - 1];
  };

  this.plus = function() {
    var sum = function(op1, op2) {
      return op1 + op2;
    }
    popAndCompute(sum);
  };

  this.minus = function() {
    var minusxs = function(op1, op2) {
      return op2 - op1;
    }
    popAndCompute(minus);
  }
};