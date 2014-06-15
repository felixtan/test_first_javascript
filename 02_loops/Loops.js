var repeat = function(string, numRepeat) {
	if (numRepeat === 0)
		return "";
	else {
		var result = "";
		for (var i = 1; i <= numRepeat; i++) {
			result += string;
		}
		return result;
	}
}

var join = function(array, delimiter) {
	if (array.length === 0) {
		return "";
	}
	else if (delimiter == undefined) {
		var result = "";
		for (var i = 0; i < array.length; i++) {
			result += array[i];
		}
		return result;
	}
	else {
		var result = "";
		for (var i = 0; i < array.length; i++) {
			result += array[i];
			if(i < array.length - 1)
				result += delimiter;
		}
		return result;
	}
}

var sum = function(array) {
	if (array.length === 0) {
		return 0;
	}
	else if (array.length == 1) {
		return array[0];
	}
	else {
		var result = 0;
		for(var i = 0; i < array.length; i++) {
			result += array[i];
		}
		return result;
	}
}

var paramify = function(hash) {
	//Object.prototype.toString("");
	if (Object.keys(hash).length === 0) {
		return "";
	}
	else {
		var result = "";
		var array = [];

		for (var key in hash) {
   		 	array.push(key);
    		array.sort();
		}
		for (var i = 0; i < array.length; i++) {
      //if(Object.prototype.hasOwnProperty())
    		result += array[i]+"="+hash[array[i]]+"&";
		}
		result = result.slice(0, result.length - 1);
		return result;
	}
}

var factorial = function(n) {
	if (n === 0) {
		return 1;
	}
	else {
		var result = n;
		for (var i = n-1; i > 1; i--) {
			result *= i;
		}
		return result;
	}
}

var concat_string = function(string1, string2, string3) {
	return string1 + string2 + string3;
}

/*
Nimit's answers

function repeat(str, times) {
  var retstr = "";

  // Loop 1, much faster than Loop 2 for bigger arrays because you don't have to read the condition every time. However, the numbers appear backward so the array will be accessed backward.
  // 0 evaluates to false so once times=0, loops will stop
   while (times--) {
    retstr += str;
   }

   // Loop 2
   for (var i = 1; i <= numRepeat; i++) {
      result += string;
    }

   return retstr;
}

function join(array, delimiter) {
  var retstr = "";

  for (var i = 0; i <= array.length; i++) {
    retstr += array[i];
  }

   if (typeof delimiter != "undefined" && i < array.length - 1) {
    retstr += delimiter;
   }
  return retstr;
}

function sum (array) {
  var i = array.length;
  var sum = 0;
  while (i--) {
    sum += array[i];
  }
  return sum;
}

function paramify(obj) {
  var  paramstr = "";
  for(key in obj) {

    // this condition will omit the prototype
    if(obj.hasOwnProperty(key)) {
      paramstr.push(key + "=" + obj[key]);
    }
  }
  paramstr.sort();

  // use .join(array, delimiter) that we wrote above in order to omit the delimiter at the end
  return join(paramstr, "&");
  }
}

function factorial(x) {
  if(x===0) return 1;
  var answer = 1;
  while(--x) {
    answer = answer * (x);
  }
}

// recursively
function factorial(x) {
  if(x===0) return 1;
  return x * factorial(x-1);
}

function concat_string() {
  // arguments is a property of functions that is ana array and holds all arguments passed
  var retstr = "";
  for (var i = 0; i < arguments.length; i++) {
    retstr += arguments[i];
  }
  return retstr;
}
*/