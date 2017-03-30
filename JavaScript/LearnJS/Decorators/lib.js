function makeLogging(f, log) {
	return function() {
		log[log.length] = [].slice.call(arguments);
		return f.apply(this, arguments);
	}
};

function makeCaching(f) {
	var cache = {};
	return function() {
		return cache.hasOwnProperty(arguments[0])
			? cache[arguments[0]]
			: cache[arguments[0]] = f.apply(this, arguments);
	}
}