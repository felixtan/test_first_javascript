var countWords = function(string) {
  var words = string.split(" ");
  return words.length;
}

// David's answers

// makeAdder never calls adderFunction, it only defines it
var makeAdder = function(number) {
  var adderFunction = function(num) {
    return num + number;
  }
  return adderFunction;
}

// this works because, remember, in js, functions are objects so the function can be stored in object iterator
var forEach = function(array, iterator) {
  for(var i = 0; i < array.length; i++) {
    iterator(array[i]);
  }
};

// TO-KNOW: difference between forEach and map?
var map = function(array, iterator) {
  var newArray = [];
  forEach(array, function(currValue) {
    var mappedValue = iterator(currValue);
    newArray.push(mappedValue);
  });
  return newArray;
};

var filter = function(array, filterFunc) {
  var newArray = [];
  forEach(array, function(item) {
    if(filterFunc(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

var reduce = function(array, initVal, combiningFunc) {
  var result = initVal;
  forEach(array, function(item) {
    // does combiningFunc have to at minimum, take two arguments?
    result = combiningFunc(item, result);
  });
  return result;
};

var once = function(func) {
  var firstTime = true;
  return function() {
    if(firstTime) {
      func();
      firstTime = false;
    }
  };

  var wrapper = function(aFunction, wrapperFunc) {
    return function() {
      return wrapperFunc(aFunction);
    };
    return wrapperFunc
  };

  // TO-KNOW: three ways to call a function; .apply, .call, ()