// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

// $.getJSON('quotes_json.json', function(json) {
// 	console.log(json);
// });
var quoteClass = document.querySelector('.quote');
var sourceClass = document.querySelector('.source');
var citationClass = document.querySelector('span.citation');
var yearClass = document.querySelector('span.year');
var totalDiv = document.getElementById('quote-box');
var colourRef = document.body.style;
var buttonRef = document.getElementById('loadQuote').style;
var initR = 137;
var initG = 204;
var initB = 114;
var intervalID = window.setInterval(function() {
	printQuote();
	fadeIn(totalDiv);
	getRandomColour();
}, 12000)

function getRandomQuote(myObj) {
	var randIndex = Math.floor(Math.random() * myObj.length);
	return myObj[randIndex];
};

// function getRandomColour() {
// 	var r = Math.floor(Math.random() * 256);
// 	var g = Math.floor(Math.random() * 256);
// 	var b = Math.floor(Math.random() * 256);

// 	var timer = setInterval(function() {
// 		if (rDiff === 0 && gDiff === 0 && bDiff === 0) {
// 				clearInterval(timer);
// 		} else {
// 				if (r > initR) {
// 				var rDiff = r - initR;
// 				initR += 1;
// 			} else if (r < initR) {
// 				var rDiff = initR - r;
// 				initR -= 1;
// 			} else if (r === initR) {
// 				var rDiff = 0;
// 			};
// 			if (g > initG) {
// 				var gDiff = g - initG;
// 				initG += 1;
// 			} else if (g < initG) {
// 				var gDiff = initG - g;
// 				initG -= 1;
// 			} else if (g === initG) {
// 				var gDiff = 0;
// 			};
// 			if (b > initB) {
// 				var bDiff = b - initB;
// 				initB += 1;
// 			} else if (b < initB) {
// 				var bDiff = initB - b;
// 				initB -= 1;
// 			} else if (b === initB) {
// 				var bDiff = 0;
// 			};
// 		};
// 		colourRef.backgroundColor = 'rgb('+ initR + ',' + initG + ',' + initB + ')';
// 		// buttonRef.backgroundColor = 'rgb('+ initR + ',' + initG + ',' + initB + ')';
// 	}, 10);
// 	// colourRef.backgroundColor = 'rgb('+ r + ',' + g + ',' + b + ')';
// };

function getRandomColour() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var rDiff = Math.abs(r - initR);
	var gDiff = Math.abs(g - initG);
	var bDiff = Math.abs(b - initB);
	var timer = setInterval(function() {
		if (rDiff === 0 && gDiff === 0 && bDiff === 0) {
				clearInterval(timer);
		} else {
				if (r > initR) {
				rDiff -= 1;
				initR += 1;
			} else if (r < initR) {
				rDiff -= 1;
				initR -= 1;
			} else if (r === initR) {
				rDiff = 0;
			};
			if (g > initG) {
				gDiff -= 1;
				initG += 1;
			} else if (g < initG) {
				gDiff -= 1;
				initG -= 1;
			} else if (g === initG) {
				gDiff = 0;
			};
			if (b > initB) {
				bDiff -= 1;
				initB += 1;
			} else if (b < initB) {
				bDiff -= 1;
				initB -= 1;
			} else if (b === initB) {
				bDiff = 0;
			};
		};
		colourRef.backgroundColor = 'rgb('+ initR + ',' + initG + ',' + initB + ')';
		// buttonRef.backgroundColor = 'rgb('+ initR + ',' + initG + ',' + initB + ')';
	}, 10);
	// colourRef.backgroundColor = 'rgb('+ r + ',' + g + ',' + b + ')';
};

function fadeIn(target) {
	var myOpacity = 0.1;
	totalDiv.style.display = 'none';
	var timer = setInterval(function() {
		if (myOpacity >= 1) {
			clearInterval(timer);
		}
		totalDiv.style.opacity = myOpacity;
		myOpacity += myOpacity * 0.1;
		totalDiv.style.display = 'block';
	}, 50);
}

function printQuote() {
	var calledQuote = getRandomQuote(quotes);
	quoteClass.innerHTML = calledQuote.quote;
	sourceClass.innerHTML = calledQuote.source;
	if (calledQuote.citation !== "None") {
		citationClass.innerHTML = calledQuote.citation;
		};
	if (calledQuote.year !== "None") {
		yearClass.innerHTML = calledQuote.year;
		};
	}

document.getElementById('loadQuote').addEventListener("click", function() {
	printQuote();
	fadeIn(totalDiv);
	getRandomColour();
}, false);