'use strict';

// Referred to https://stackoverflow.com/questions/3089475/
var counter = 3;
setInterval(function() {
	counter--;
	if (counter >= 0) {
		$("#countdown").text(counter);
	}

	if (counter === 0) {
		clearInterval(counter);
	}
}, 1000);