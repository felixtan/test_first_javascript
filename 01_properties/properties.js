var object;
var setSomePropertiesOn = function(object) {
	object.x = 7;
	object['y'] = 8;

	var onePlus = function(num) {
		return num + 1;
	}

	object['onePlus'] = onePlus;
}