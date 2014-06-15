var Calculator = function() {
  this.stored = 0;
  this.operands = [];

  this.push = function(num) {
    this.operands.push(num);
  };

  this.plus = function() {
    if(this.operands.length >= 2) {
      var operand_1 = this.operands.pop();
      var operand_2 = this.operands.pop();
      this.stored = operand_2 + operand_1;
      this.push(this.stored);
    }
    else
      throw "calculator is empty"
  };

  this.minus = function() {
    if(this.operands.length >= 2) {
      var operand_1 = this.operands.pop();
      var operand_2 = this.operands.pop();
      this.stored = operand_2 - operand_1;
      this.push(this.stored);
  }
  else
      throw "calculator is empty"
  };

  this.divide = function() {
    if(this.operands.length >= 2) {
      var operand_1 = this.operands.pop();
      var operand_2 = this.operands.pop();
      this.stored = operand_2 / operand_1;
      this.push(this.stored);
    }
    else
      throw "calculator is empty"
  };

  this.times = function() {
    if(this.operands.length >= 2) {
      var operand_1 = this.operands.pop();
      var operand_2 = this.operands.pop();
      this.stored = operand_2 * operand_1;
      this.push(this.stored);
    }
    else
      throw "calculator is empty"
  };

  this.value = function() {
    return this.stored;
  };
};


















// Scot's answers

// var Calculator = function() {
//   var stack = [];

//   var popAndCompute = function(operation) {
//     var op1 = stack.pop();
//     var op2 = stack.pop();
//     var result = operation(op1, op2);
//     stack.push(result);
//   }

//   this.push = function(num) {
//     stack.push(num);
//   };

//   this.value = function() {
//     return stack[stack.length - 1];
//   };

//   this.plus = function() {
//     var sum = function(op1, op2) {
//       return op1 + op2;
//     }
//     popAndCompute(sum);
//   };

//   this.minus = function() {
//     var minusxs = function(op1, op2) {
//       return op2 - op1;
//     }
//     popAndCompute(minus);
//   }
// };