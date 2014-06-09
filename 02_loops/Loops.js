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