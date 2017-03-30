/**
 * Функция, которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
 * @param ms {Number} Время через которое возвращаемый promise перейдет в состояние "resolved"
 */
function delay(ms) {
	return new Promise((resolved, rejected) => {
		setTimeout(() => resolved(), ms);
	});
}