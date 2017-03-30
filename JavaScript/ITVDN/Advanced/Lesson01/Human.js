function Human(name) {
	var age = 0;
	this.Name = name;
	Object.defineProperty(this, "Age", {
		get: function () {
			return age;
		},
		set: function (value) {
			age = value;
		},
		enumerable: true
	});
};

Human.sortByAgeDesc = function (hum1, hum2) {
	return hum2.Age - hum1.Age;
};

Human.sortByAgeAsc = function (hum1, hum2) {
	return hum1.Age - hum2.Age;
};

Human.prototype.toString = function() {
	return "Имя: " + this.Name + ", Возраст: " + this.Age;
}