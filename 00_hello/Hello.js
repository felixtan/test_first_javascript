var hello = function(name) {
	// Just having name == undefined is not good practice. It's better to pass typeof name == undefined
  if (name == undefined)
		return "Hello!"
	else
		return "Hello, " + name + "!";
}