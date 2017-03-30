function FormatError(message) {
	SyntaxError.call(this, message);

	this.name = "FormatError";
	this.message = message;

	if (Error.captureStackTrace) {
		Error.captureStackTrace(this, this.constructor);
	} else {
		this.stack = (new Error()).stack;
	}
}

FormatError.prototype = Object.create(SyntaxError.prototype);
FormatError.prototype.constructor = FormatError;