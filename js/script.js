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
var colourRef = document.body.style.backgroundColor;
var initR = 137;
var initG = 204;
var initB = 114;
var intervalID = window.setInterval(function() {
	printQuote();
	fadeIn(totalDiv);
}, 8000)

function getRandomQuote(myObj) {
	var randIndex = Math.floor(Math.random() * myObj.length);
	return myObj[randIndex];
};

function getRandomColour() {
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	if (r > initR) {
			var rDiff = r - initR;
		} else {
			var rDiff = initR - r;
		};
	if (g > initG) {
		var gDiff = g - initG;
	} else {
		var gDiff = initG - g;
	};
	if (b > initB) {
		var bDiff = b - initB;
	} else {
		var bDiff = initB - b;
	};

	var timer = setInterval(function() {
		if (rDiff === 0 && gDiff === 0 && bDiff === 0) {
				clearInterval(timer)
		}
		if (r > initR) {
			var gDiff = g - initG;
		} else {
			var gDiff = initG - g;
	}; 

	})

	return rbg(r,g,b);
};

function fadeColour(target) {
	var myBGC = rgb(137,204,114);
	var targetBGC = getRandomColour();

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
	
// for (i=0;i<quotes.length;i++) {
// 	console.log(quotes[i].quote)
// 	console.log(quotes[i].source)
// 	console.log(quotes[i].citation)
// 	console.log(quotes[i].year)
// }

document.getElementById('loadQuote').addEventListener("click", function() {
	printQuote();
	fadeIn(totalDiv);
}, false);