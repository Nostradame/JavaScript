/**
 * Функция, которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
 * @param ms {Number} Время через которое возвращаемый promise перейдет в состояние "resolved"
 */
function delay(ms) {
	return new Promise((resolved, rejected) => {
		setTimeout(() => resolved(), ms);
	});
}

/**
 * Функция, которая последовательно загружает массив url'ов.
 * @param urls {Array} Массив url'ов, которые необходимо загрузить
 */
function download(urls) {
	let results = [];
	let asyncAction = Promise.resolve();

	for (let url of urls) {
		asyncAction = asyncAction.then(() => {
			results.push(url);
		});
	}

	return asyncAction.then(() => results);
}