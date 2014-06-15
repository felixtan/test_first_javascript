var object;
var setSomePropertiesOn = function(object) {
	object.x = 7;

  // object.y = 8 works here too, they're the same thing
	object['y'] = 8;

	var onePlus = function(num) {
		return num + 1;
	};
  // a semicolon here helps because of the = signs

	object['onePlus'] = onePlus;
}
