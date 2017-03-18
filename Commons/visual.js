;
(function () {
	this.nl = "<br />";

	this.wr = function (obj, objName) {
		var str = "";

		if (typeof objName == "string") {
			str += objName + "(" + (typeof obj) + ") = ";
		}

		if (typeof obj != "object") {
			return str += obj.toString() + ";" + this.nl;
		}

		str += "{" + this.nl;
		for (var prop in obj) {
			str += prop + "(" + (typeof obj[prop]) + ")" + ": " + obj[prop] + "," + this.nl;
		}

		var pos;

		if((pos = str.lastIndexOf(",")) > 0) {
			str = str.slice(0, pos);
			str += this.nl;
		};

		return str += "};";
	}

	this.dw = function(str) {
		return document.write(str + this.nl);
	}
})();