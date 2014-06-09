var repeat = function(string, numRepeat) {
	if (numRepeat == 0)
		return "";
	else {
		var result = "";
		for (var i = 1; i <= numRepeat; i++) {
			result += string;
		}
		return result;
	}
}

//var join = function(array) {
	//if (array.length === 0)
//}