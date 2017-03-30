function formatDate(date) {
	if (date instanceof Date) {
		return format(date);
	}

	if (typeof date == "string") {
		return format(new Date(date));
	}

	if (typeof date == "number") {
		return format(new Date(date * 1000));
	}

	if (Array.isArray(date)) {
		return format(new Date(date[0], date[1], date[2]));
	}

}

function format(date) {
	var day = date.getDate();
	if (day < 10)
		day = "0" + day;

	var month = date.getMonth() + 1;
	if (month< 10)
		month = "0" + month;

	var year = date.getFullYear() % 100;
	if (year < 10)
		year = "0" + year;

	return [day, month, year].join(".");
}