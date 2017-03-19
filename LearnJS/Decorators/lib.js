function makeLogging(f, log) {
	return function() {
		log[log.length] = [].slice.call(arguments);
		return f.apply(this, arguments);
	}
}