function CoffeeMachine(power, capacity) {
	var waterAmount = 0;
	var timerId;
	var isRun = false;
	var WATER_HEAT_CAPACITY = 4200;

	function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}

	this.setWaterAmount = function (amount) {
		// ... проверки пропущены для краткости
		waterAmount = amount;
	};

	this.getWaterAmount = function (amount) {
		return waterAmount;
	};

	function onReady() {
		alert('Кофе готов!');
	}

	this.run = function () {
		isRun = true;
		timerId = setTimeout(onReady, getTimeToBoil());
	};

	this.setOnReady = function (func) {
		var context = this;
		if (isRun) {
			clearTimeout(timerId);
		}

		onReady = function () {
			return func.apply(context, arguments);
		}
		if (isRun) {
			timerId = setTimeout(onReady, getTimeToBoil());
		}
	}

	this.isRunning = function() {
		return isRun;
	}

}