var form = document.getElementById("form"),
	bdate = document.getElementById("date"),
	bmonth = document.getElementById("month"),
	byear = document.getElementById("year"),
	date = document.getElementById("date2"),
	month = document.getElementById("month2"),
	year = document.getElementById("year2"),
	age = document.getElementById("age"),
	days = document.getElementById("days"),
	mons = document.getElementById("months"),
	today = new Date();

year.value = today.getFullYear();
month.value = today.getMonth() + 1;
date.value = today.getDate();

form.addEventListener('submit', function(event) {
	event.preventDefault();

	var by = Number.parseFloat(byear.value),
		bm = Number.parseFloat(bmonth.value),
		bd = Number.parseFloat(bdate.value),
		ty = Number.parseFloat(year.value),
		tm = Number.parseFloat(month.value),
		td = Number.parseFloat(date.value);

	if (td < bd) {
		days.innerHTML = (td - bd + 30) + ' days';
		tm = tm - 1;
	} else {
		days.innerHTML = (td - bd) + ' days'
	}

	if (tm < bm) {
		months.innerHTML = (tm - bm + 12) + ' months';
		ty = ty - 1;
	} else {
		months.innerHTML = (tm - bm) + ' months'
	}

	age.innerHTML = "Age: " + (ty - by) + ' years';

});