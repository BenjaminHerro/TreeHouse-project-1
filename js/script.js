var totalDiv = document.getElementById('quote-box');
var colourRef = document.body.style;
var buttonRef = document.getElementById('loadQuote').style;
//these 3 variables were to be used with the colour transitioner.
// var initR = 137;
// var initG = 204;
// var initB = 114;
var intervalID = window.setInterval(function() {
	printQuote();
	fadeIn(totalDiv);
}, 12000);
//added getrandomcolour in second interval because it seemed to reduce the time it took for the colour transitioner to jam.
var intervalID2 = window.setInterval(getRandomColour, 12000);

//gets a random quote object from the quotes array in quotes_obj.js. This file was built from a raw text file of quotes directly copied from 'http://www.cs.virginia.edu/~robins/quotes.html'
//i wrote a python script to build the js file. initially it was meant to build a json file, which i was going to use with jQuery, however I discovered (as far as I'm aware) jQuery could
//only be used through a live server (although the separate js file worked just fine). because of the size of the object I built though, adding individual categorization tags on all the quotes (something like 300+)
//was too big a job, so I only added them on a handful.
function getRandomQuote(myObj) {
	var randIndex = Math.floor(Math.random() * myObj.length);
	return myObj[randIndex];
};

//random colour getter function, gets 3 random numbers between 0 and 256, sets each to an r, g or b variable and sets the background colour using the rgb css property
//currently commented out is a colour transitioner. I unfortunately had to comment it out as over time the code began to jam. I'm still confused about this and need to look into it.
//help would be appreciated!
function getRandomColour() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	// var rDiff = Math.abs(r - initR);
	// var gDiff = Math.abs(g - initG);
	// var bDiff = Math.abs(b - initB);
	// var timer = setInterval(function() {
	// 	if (rDiff === 0 && gDiff === 0 && bDiff === 0) {
	// 			clearInterval(timer);
	// 	} else {
	// 			if (r > initR) {
	// 			rDiff -= 1;
	// 			initR += 1;
	// 		} else if (r < initR) {
	// 			rDiff -= 1;
	// 			initR -= 1;
	// 		} else if (r === initR) {
	// 			rDiff = 0;
	// 		};
	// 		if (g > initG) {
	// 			gDiff -= 1;
	// 			initG += 1;
	// 		} else if (g < initG) {
	// 			gDiff -= 1;
	// 			initG -= 1;
	// 		} else if (g === initG) {
	// 			gDiff = 0;
	// 		};
	// 		if (b > initB) {
	// 			bDiff -= 1;
	// 			initB += 1;
	// 		} else if (b < initB) {
	// 			bDiff -= 1;
	// 			initB -= 1;
	// 		} else if (b === initB) {
	// 			bDiff = 0;
	// 		};
	// 	};
	// 	// colourRef.backgroundColor = 'rgb('+ initR + ',' + initG + ',' + initB + ')';
	// 	// buttonRef.backgroundColor = 'rgb('+ initR + ',' + initG + ',' + initB + ')';
	// }, 10);
	colourRef.backgroundColor = 'rgb('+ r + ',' + g + ',' + b + ')';
};

//fade effect function for transitioning between quotes (either when button is pressed, or after 12 seconds since last change)
function fadeIn(target) {
	var myOpacity = 0.1;
	totalDiv.style.display = 'none';
	var fader = setInterval(function() {
		if (myOpacity >= 1) {
			clearInterval(fader);
		}
		totalDiv.style.opacity = myOpacity;
		myOpacity += myOpacity * 0.1;
		totalDiv.style.display = 'block';
	}, 50);
}

// function to build a string of HTML that is passed into the quote box div
function printQuote() {
	var calledQuote = getRandomQuote(quotes);
	var rawHTML = '';
	var spanHTML = '';

	if (calledQuote.citation !== "None") {
		spanHTML += '<span class="citation">' + calledQuote.citation + '</span>';
		};
	if (calledQuote.year !== "None") {
		spanHTML += '<span class="year">' + calledQuote.year + '</span>';
	};
	

	rawHTML += '<p class="quote">' + calledQuote.quote + '</p>';
	rawHTML += '<p class="source">' + calledQuote.source + spanHTML + '</p>';
	if (calledQuote.genre) {
		rawHTML += '<p class="genre">' + calledQuote.genre + '</p>';
	};
	totalDiv.innerHTML = rawHTML;
	};

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// additionally, the random colour getter function and fader function is called
document.getElementById('loadQuote').addEventListener("click", function() {
	printQuote();
	getRandomColour();
	fadeIn(totalDiv);
}, false);