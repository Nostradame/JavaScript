﻿function printNumberInterval() {
	var i = 0;
	var timerId = setInterval(function () {
		console.log(++i);
		if (i == 20) {
			clearInterval(timerId);
			return;
		}
	},
		100);
};

function printNumberIntervalByTimeout() {
	var i = 0;
	var timerId = setTimeout(function Timer() {
		console.log(++i);
		if (i != 20) {
			timerId = setTimeout(Timer, 100);
		}
	},
		100);
};

function delay(func, ms) {
	return function () {
		var context = this;
		var args = arguments;
		setTimeout(function () {
			func.apply(context, args);
		},
			ms);
	}
};

function debounce(func, ms) {
	var canExecute = true;
	return function () {
		var context = this;
		var args = arguments;

		if (canExecute) {
			canExecute = false;
			setTimeout(function () {
				canExecute = true;
			},
				ms);
			func.apply(context, args);
		} else {
			console.log("Выполнение возможно не чаще одного раза в " + (ms / 1000) + " cекунд.");
		}
	}
}

function throttle(func, ms) {
	var canExecute = true;
	var timerId;
	var context;
	var args;
	return function () {
		context = this;
		args = arguments;

		if (!canExecute)
			return;

		func.apply(context, args);
		canExecute = false;

		timerId = setInterval(function () {
			if (!args) {
				clearInterval(timerId);
				canExecute = true;
				return;
			}
			func.apply(context, args);
			context = args = null;
			},
				ms);
	}
}