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
var intervalID = window.setInterval(function() {
	printQuote();
	fadeIn(totalDiv);
}, 8000)

function getRandomQuote(myObj) {
	var randIndex = Math.floor(Math.random() * myObj.length);
	return myObj[randIndex];
};

function fadeIn(target) {
	var myOpacity = 0.1;
	totalDiv.style.display = 'block';
	var timer = setInterval(function() {
		if (myOpacity >= 1) {
			clearInterval(timer);
		}
		totalDiv.style.opacity = myOpacity;
		myOpacity += myOpacity * 0.1;
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