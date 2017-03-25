function ClockExt(options) {
	this.precision = options.precision;
	Clock.call(this, options);
}

ClockExt.prototype = Object.create(Clock.prototype);
ClockExt.prototype.constructor = ClockExt;

ClockExt.prototype.start = function() {
	this.render();
	this.timer = setInterval(Clock.prototype.render.bind(this), this.precision);
}