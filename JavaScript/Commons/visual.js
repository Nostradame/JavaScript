;
(function () {
	this.br = "<br />";
	this.hr = "<hr />";

	this.wr = function wrP(obj, objName) {
		var str = "";

		if (typeof objName == "string") {
			str += objName + "(" + (typeof obj) + ") = ";
		}

		if (typeof obj != "object") {
			return objName != undefined
				? str += obj.toString() + ";" + this.br
				: obj.toString();
		}

		str += "{" + this.br;
		for (var prop in obj) {
			str += prop + "(" + (typeof obj[prop]) + ")" + ": " + wrP(obj[prop]) + "," + this.br;
		}

		var pos;

		if ((pos = str.lastIndexOf(",")) > 0) {
			str = str.slice(0, pos);
			str += this.br;
		};

		return str += "};";
	};

	this.dw = function(str) {
		return document.write(str + this.br);
	};
})();