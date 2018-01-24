var quotes = [
		{
			quote:"Moral indignation is jealousy with a halo.",
			source:"H. G. Wells",
			year:"(1866-1946)",
			citation:"None"
		},
		{
			quote:"Glory is fleeting, but obscurity is forever.",
			source:"Napoleon Bonaparte",
			year:"(1769-1821)",
			citation:"None",
			genre: 'Life'
		},
		{
			quote:"The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.",
			source:"Bertrand Russell",
			year:"(1872-1970)",
			citation:"None",
			genre: 'Life'
		},
		{
			quote:"Victory goes to the player who makes the next-to-last mistake.",
			source:"Chessmaster Savielly Grigorievitch Tartakower",
			year:"(1887-1956)",
			citation:"None",
			genre: 'Life'
		},
		{
			quote:"Don't be so humble - you are not that great.",
			source:"Golda Meir",
			year:"(1898-1978)",
			citation:"None",
			genre: 'Life'
		},
		{
			quote:"His ignorance is encyclopedic",
			source:"Abba Eban",
			year:"(1915-2002)",
			citation:"None",
			genre: 'Humour'
		},
		{
			quote:"If a man does his best, what else is there?",
			source:"General George S. Patton",
			year:"(1885-1945)",
			citation:"None",
			genre: 'Life'
		},
		{
			quote:"Political correctness is tyranny with manners.",
			source:"Charlton Heston",
			year:"(1924-2008)",
			citation:"None",
			genre: 'Politics'
		},
		{
			quote:"You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
			source:"Ayn Rand",
			year:"(1905-1982)",
			citation:"None",
			genre: 'Life'
		},
		{
			quote:"When one person suffers from a delusion it is called insanity; when many people suffer from a delusion it is called religion.",
			source:"Robert Pirsig",
			year:"(1948-)",
			citation:"None",
			genre:"Religion"
		},
		{
			quote:"Sex and religion are closer to each other than either might prefer.",
			source:"Saint Thomas More",
			year:"(1478-1535)",
			citation:"None",
			genre: 'Philosophy'
		},
		{
			quote:"The greater danger for most of us lies not in setting our aim too high and falling short, but in setting our aim too low, and achieving our mark.",
			source:"Michelangelo di Lodovico Buonarroti Simoni",
			year:"(1475-1564)",
			citation:"None",
			genre: 'Life'
		},
		{
			quote:"I can write better than anybody who can write faster, and I can write faster than anybody who can write better.",
			source:"A. J. Liebling",
			year:"(1904-1963)",
			citation:"None",
			genre: 'Humour'
		},
		{
			quote:"People demand freedom of speech to make up for the freedom of thought which they avoid.",
			source:"Soren Aabye Kierkegaard",
			year:"(1813-1855)",
			citation:"None",
			genre: 'Politics'
		},
		{
			quote:"Give me chastity and continence, but not yet.",
			source:"Saint Augustine",
			year:"(354-430)",
			citation:"None",
			genre: 'Religion'
		},
		{
			quote:"Not everything that can be counted counts, and not everything that counts can be counted.",
			source:"Albert Einstein",
			year:"(1879-1955)",
			citation:"None",
			genre: 'Science'
		},
		{
			quote:"Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.",
			source:"Albert Einstein",
			year:"(1879-1955)",
			citation:"None",
			genre: 'Science'
		},
		{
			quote:"A lie gets halfway around the world before the truth has a chance to get its pants on.",
			source:"Sir Winston Churchill",
			year:"(1874-1965)",
			citation:"None",
			genre: 'Politics'
		},
		{
			quote:"You may not be interested in war, but war is interested in you.",
			source:"Leon Trotsky",
			year:"(1879-1940)",
			citation:"None",
			genre: 'Politics'
		},
		{
			quote:"I do not feel obliged to believe that the same God who has endowed us with sense, reason, and intellect has intended us to forgo their use.",
			source:"Galileo Galilei",
			year:"(1564-1642)",
			citation:"None",
			genre: 'Science'
		},
		{
			quote:"We are all atheists about most of the gods humanity has ever believed in. Some of us just go one god further.",
			source:"Richard Dawkins",
			year:"(1941-)",
			citation:"None",
			genre: 'Religion'
		},
		{
			quote:"The artist is nothing without the gift, but the gift is nothing without work.",
			source:"Emile Zola",
			year:"(1840-1902)",
			citation:"None",
			genre: 'Art'
		},
		{
			quote:"This book fills a much-needed gap.",
			source:"Moses Hadas",
			year:"(1900-1966)",
			citation:"None"
		},
		{
			quote:"The full use of your powers along lines of excellence.",
			source:"definition of happiness by John F. Kennedy",
			year:"(1917-1963)",
			citation:"None"
		},
		{
			quote:"I'm living so far beyond my income that we may almost be said to be living apart.",
			source:"E. E. Cummings",
			year:"(1894-1962)",
			citation:"None",
			genre: 'Humour'
		},
		{
			quote:"Give me a museum and I'll fill it.",
			source:"Pablo Picasso",
			year:"(1881-1973)",
			citation:"None",
			genre: 'Art'
		},
		{
			quote:"Assassins!",
			source:"Arturo Toscanini",
			year:"(1867-1957)",
			citation:"to his orchestra",
			genre: 'Music'
		},
		{
			quote:"I'll moider da bum.",
			source:"Heavyweight boxer Tony Galento",
			year:"None",
			citation:"when asked what he thought of William Shakespeare",
			genre: 'Humour'
		},
		{
			quote:"In theory, there is no difference between theory and practice. But in practice, there is.",
			source:"Yogi Berra",
			year:"None",
			citation:"None",
			genre: 'Philosophy'
		},
		{
			quote:"I find that the harder I work, the more luck I seem to have.",
			source:"Thomas Jefferson",
			year:"(1743-1826)",
			citation:"None",
			genre: 'Life'
		},
		{
			quote:"Each problem that I solved became a rule which served afterwards to solve other problems.",
			source:"Rene Descartes",
			year:"(1596-1650)",
			citation:"None",
			genre: 'Philosophy'
		},
		{
			quote:"In the End, we will remember not the words of our enemies, but the silence of our friends.",
			source:"Martin Luther King Jr.",
			year:"(1929-1968)",
			citation:"None",
			genre: 'Politics'
		},
		{
			quote:"Whether you think that you can, or that you can't, you are usually right.",
			source:"Henry Ford",
			year:"(1863-1947)",
			citation:"None",
			genre: 'Life'
		},
		{
			quote:"Do, or do not. There is no 'try'.",
			source:"Yoda",
			year:"None",
			citation:"The Empire Strikes Back",
			genre: 'Movies/Life'
		},
		{
			quote:"The only way to get rid of a temptation is to yield to it.",
			source:"Oscar Wilde",
			year:"(1854-1900)",
			citation:"None",
			genre: 'Humour'
		},
		{
			quote:"Don't stay in bed, unless you can make money in bed.",
			source:"George Burns",
			year:"(1896-1996)",
			citation:"None",
			genre: 'Business'
		},
		{
			quote:"I don't know why we are here, but I'm pretty sure that it is not in order to enjoy ourselves.",
			source:"Ludwig Wittgenstein",
			year:"(1889-1951)",
			citation:"None"
		},
		{
			quote:"There are no facts, only interpretations.",
			source:"Friedrich Nietzsche",
			year:"(1844-1900)",
			citation:"None",
			genre: 'Philosophy'
		},
		{
			quote:"Nothing in the world is more dangerous than sincere ignorance and conscientious stupidity.",
			source:"Martin Luther King Jr.",
			year:"(1929-1968)",
			citation:"None",
			genre: 'Politics'
		},
		{
			quote:"The use of COBOL cripples the mind; its teaching should, therefore, be regarded as a criminal offense.",
			source:"Edsgar Dijkstra",
			year:"(1930-2002)",
			citation:"None"
		},
		{
			quote:"C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg.",
			source:"Bjarne Stroustrup",
			year:"None",
			citation:"None",
			genre: 'Computer Science'
		},
		{
			quote:"A mathematician is a device for turning coffee into theorems.",
			source:"Paul Erdos",
			year:"(1913-1996)",
			citation:"None",
			genre: 'Science'
		},
		{
			quote:"Problems worthy of attack prove their worth by fighting back.",
			source:"Paul Erdos",
			year:"(1913-1996)",
			citation:"None",
			genre: 'Life'
		},
		{
			quote:"Happiness equals reality minus expectations.",
			source:"Tom Magliozzi",
			year:"(1937-2014)",
			citation:"None",
			genre: 'Life'
		},
		{
			quote:"Try to learn something about everything and everything about something.",
			source:"Thomas Henry Huxley",
			year:"(1825-1895)",
			citation:"None",
			genre: 'Education'
		},
		{
			quote:"Dancing is silent poetry.",
			source:"Simonides",
			year:"(556-468bc)",
			citation:"None",
			genre: 'Performing Arts'
		},
		{
			quote:"The only difference between me and a madman is that I'm not mad.",
			source:"Salvador Dali",
			year:"(1904-1989)",
			citation:"None",
			genre: 'Art'
		},
		{
			quote:"If you can't get rid of the skeleton in your closet, you'd best teach it to dance.",
			source:"George Bernard Shaw",
			year:"(1856-1950)",
			citation:"None",
			genre: 'Life'
		},
		{
			quote:"But at my back I always hear Time's winged chariot hurrying near.",
			source:"Andrew Marvell",
			year:"(1621-1678)",
			citation:"None"
		},
		{
			quote:"Good people do not need laws to tell them to act responsibly, while bad people will find a way around the laws.",
			source:"Plato",
			year:"(427-347 B.C.)",
			citation:"None"
		},
		{
			quote:"The power of accurate observation is frequently called cynicism by those who don't have it.",
			source:"George Bernard Shaw",
			year:"(1856-1950)",
			citation:"None"
		},
		{
			quote:"Whenever I climb I am followed by a dog called 'Ego'.",
			source:"Friedrich Nietzsche",
			year:"(1844-1900)",
			citation:"None"
		},
		{
			quote:"Everybody pities the weak; jealousy you have to earn.",
			source:"Arnold Schwarzenegger",
			year:"(1947-)",
			citation:"None"
		},
		{
			quote:"Celibacy is the most unusual of all the perversions.",
			source:"Oscar Wilde",
			year:"(1854-1900)",
			citation:"None"
		},
		{
			quote:"If there were no priests, people would be more religious.",
			source:"Voltaire",
			year:"(1694-1778)",
			citation:"None",
			genre:"Religion"
		},
		{
			quote:"Against stupidity, the gods themselves contend in vain.",
			source:"Friedrich von Schiller",
			year:"(1759-1805)",
			citation:"None"
		},
		{
			quote:"We have art to save ourselves from the truth.",
			source:"Friedrich Nietzsche",
			year:"(1844-1900)",
			citation:"None"
		},
		{
			quote:"Never interrupt your enemy when he is making a mistake.",
			source:"Napoleon Bonaparte",
			year:"(1769-1821)",
			citation:"None"
		},
		{
			quote:"I have never killed anyone, but I have read some obituary notices with great satisfaction.",
			source:"Clarence Darrow",
			year:"(1857-1938)",
			citation:"None"
		},
		{
			quote:"I think 'Hail to the Chief' has a nice ring to it.",
			source:"John F. Kennedy",
			year:"(1917-1963)",
			citation:"when asked what is his favorite song"
		},
		{
			quote:"I have nothing to declare except my genius.",
			source:"Oscar Wilde",
			year:"(1854-1900)",
			citation:"upon arriving at U.S. customs 1882"
		},
		{
			quote:"Human history becomes more and more a race between education and catastrophe.",
			source:"H. G. Wells",
			year:"(1866-1946)",
			citation:"None"
		},
		{
			quote:"Talent does what it can; genius does what it must.",
			source:"Edward George Bulwer-Lytton",
			year:"(1803-1873)",
			citation:"None"
		},
		{
			quote:"The difference between 'involvement' and 'commitment' is like an eggs-and-ham breakfast: the chicken was 'involved' - the pig was 'committed'.",
			source:"unknown",
			year:"None",
			citation:"None"
		},
		{
			quote:"Women might be able to fake orgasms. But men can fake a whole relationship.",
			source:"Sharon Stone",
			year:"None",
			citation:"None"
		},
		{
			quote:"If you are going through hell, keep going.",
			source:"Sir Winston Churchill",
			year:"(1874-1965)",
			citation:"None"
		},
		{
			quote:"Life isn't about waiting for the storm to pass; it's about learning to dance in the rain.",
			source:"Vivian Greene",
			year:"None",
			citation:"None"
		},
		{
			quote:"He who has a 'why' to live, can bear with almost any 'how'.",
			source:"Friedrich Nietzsche",
			year:"(1844-1900)",
			citation:"None"
		},
		{
			quote:"Many wealthy people are little more than janitors of their possessions.",
			source:"Frank Lloyd Wright",
			year:"(1868-1959)",
			citation:"None"
		},
		{
			quote:"I'm all in favor of keeping dangerous weapons out of the hands of fools. Let's start with typewriters.",
			source:"Frank Lloyd Wright",
			year:"(1868-1959)",
			citation:"None"
		},
		{
			quote:"Some cause happiness wherever they go; others, whenever they go.",
			source:"Oscar Wilde",
			year:"(1854-1900)",
			citation:"None"
		},
		{
			quote:"God is a comedian playing to an audience too afraid to laugh.",
			source:"Voltaire",
			year:"(1694-1778)",
			citation:"None"
		},
		{
			quote:"He is one of those people who would be enormously improved by death.",
			source:"H. H. Munro 'Saki'",
			year:"(1870-1916)",
			citation:"None"
		},
		{
			quote:"I am ready to meet my Maker. Whether my Maker is prepared for the great ordeal of meeting me is another matter.",
			source:"Sir Winston Churchill",
			year:"(1874-1965)",
			citation:"None"
		},
		{
			quote:"I shall not waste my days in trying to prolong them.",
			source:"Ian L. Fleming",
			year:"(1908-1964)",
			citation:"None"
		},
		{
			quote:"If you can count your money, you don't have a billion dollars.",
			source:"J. Paul Getty",
			year:"(1892-1976)",
			citation:"None"
		},
		{
			quote:"Facts are the enemy of truth.",
			source:"Don Quixote",
			year:"None",
			citation:"Man of La Mancha"
		},
		{
			quote:"When you do the common things in life in an uncommon way, you will command the attention of the world.",
			source:"George Washington Carver",
			year:"(1864-1943)",
			citation:"None"
		},
		{
			quote:"How wrong it is for a woman to expect the man to build the world she wants, rather than to create it herself.",
			source:"Anais Nin",
			year:"(1903-1977)",
			citation:"None"
		},
		{
			quote:"I have not failed. I've just found 10,000 ways that won't work.",
			source:"Thomas Alva Edison",
			year:"(1847-1931)",
			citation:"None"
		},
		{
			quote:"I begin by taking. I shall find scholars later to demonstrate my perfect right.",
			source:"Frederick II the Great",
			year:"None",
			citation:"None"
		},
		{
			quote:"Maybe this world is another planet's Hell.",
			source:"Aldous Huxley",
			year:"(1894-1963)",
			citation:"None"
		},
		{
			quote:"Blessed is the man, who having nothing to say, abstains from giving wordy evidence of the fact.",
			source:"George Eliot",
			year:"(1819-1880)",
			citation:"None"
		},
		{
			quote:"Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.",
			source:"Sir Arthur Conan Doyle",
			year:"(1859-1930)",
			citation:"Sherlock Holmes"
		},
		{
			quote:"Black holes are where God divided by zero.",
			source:"Steven Wright",
			year:"None",
			citation:"None"
		},
		{
			quote:"I've had a wonderful time, but this wasn't it.",
			source:"Groucho Marx",
			year:"(1895-1977)",
			citation:"None"
		},
		{
			quote:"It's kind of fun to do the impossible.",
			source:"Walt Disney",
			year:"(1901-1966)",
			citation:"None"
		},
		{
			quote:"We didn't lose the game; we just ran out of time.",
			source:"Vince Lombardi",
			year:"None",
			citation:"None"
		},
		{
			quote:"The optimist proclaims that we live in the best of all possible worlds, and the pessimist fears this is true.",
			source:"James Branch Cabell",
			year:"None",
			citation:"None"
		},
		{
			quote:"A friendship founded on business is better than a business founded on friendship.",
			source:"John D. Rockefeller",
			year:"(1874-1960)",
			citation:"None"
		},
		{
			quote:"All are lunatics, but he who can analyze his delusion is called a philosopher.",
			source:"Ambrose Bierce",
			year:"(1842-1914)",
			citation:"None"
		},
		{
			quote:"You can only find truth with logic if you have already found truth without it.",
			source:"Gilbert Keith Chesterton",
			year:"(1874-1936)",
			citation:"None"
		},
		{
			quote:"An inconvenience is only an adventure wrongly considered; an adventure is an inconvenience rightly considered.",
			source:"Gilbert Keith Chesterton",
			year:"(1874-1936)",
			citation:"None"
		},
		{
			quote:"I have come to believe that the whole world is an enigma, a harmless enigma that is made terrible by our own mad attempt to interpret it as though it had an underlying truth.",
			source:"Umberto Eco",
			year:"None",
			citation:"None"
		},
		{
			quote:"Be nice to people on your way up because you meet them on your way down.",
			source:"Jimmy Durante",
			year:"None",
			citation:"None"
		},
		{
			quote:"The true measure of a man is how he treats someone who can do him absolutely no good.",
			source:"Samuel Johnson",
			year:"(1709-1784)",
			citation:"None"
		},
		{
			quote:"A people that values its privileges above its principles soon loses both.",
			source:"Dwight D. Eisenhower",
			year:"(1890-1969)",
			citation:"Inaugural Address January 20 1953"
		},
		{
			quote:"The significant problems we face cannot be solved at the same level of thinking we were at when we created them.",
			source:"Albert Einstein",
			year:"(1879-1955)",
			citation:"None",
			genre: 'Science'
		},
		{
			quote:"Basically, I no longer work for anything but the sensation I have while working.",
			source:"Albert Giacometti",
			year:"None",
			citation:"None",
			genre: 'Art'
		},
		{
			quote:"There's a limit to how many times you can read how great you are and what an inspiration you are, but I'm not there yet.",
			source:"Randy Pausch",
			year:"(1960-2008)",
			citation:"None"
		},
		{
			quote:"It is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring.",
			source:"Carl Sagan",
			year:"(1934-1996)",
			citation:"None"
		},
		{
			quote:"All truth passes through three stages. First, it is ridiculed. Second, it is violently opposed. Third, it is accepted as being self-evident.",
			source:"Arthur Schopenhauer",
			year:"(1788-1860)",
			citation:"None"
		},
		{
			quote:"Many a man's reputation would not know his character if they met on the street.",
			source:"Elbert Hubbard",
			year:"(1856-1915)",
			citation:"None"
		},
		{
			quote:"There is more stupidity than hydrogen in the universe, and it has a longer shelf life.",
			source:"Frank Zappa",
			year:"None",
			citation:"None"
		},
		{
			quote:"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
			source:"Antoine de Saint Exupery",
			year:"None",
			citation:"None"
		},
		{
			quote:"Life is pleasant. Death is peaceful. It's the transition that's troublesome.",
			source:"Isaac Asimov",
			year:"None",
			citation:"None"
		},
		{
			quote:"If you want to make an apple pie from scratch, you must first create the universe.",
			source:"Carl Sagan",
			year:"(1934-1996)",
			citation:"None"
		},
		{
			quote:"It is much more comfortable to be mad and know it, than to be sane and have one's doubts.",
			source:"G. B. Burgin",
			year:"None",
			citation:"None"
		},
		{
			quote:"Once is happenstance. Twice is coincidence. Three times is enemy action.",
			source:"Auric Goldfinger",
			year:"(1908-1964)",
			citation:"Goldfinger by Ian L. Fleming"
		},
		{
			quote:"To love oneself is the beginning of a lifelong romance",
			source:"Oscar Wilde",
			year:"(1854-1900)",
			citation:"None"
		},
		{
			quote:"Knowledge speaks, but wisdom listens.",
			source:"Jimi Hendrix",
			year:"None",
			citation:"None"
		},
		{
			quote:"A clever man commits no minor blunders.",
			source:"Goethe",
			year:"(1749-1832)",
			citation:"None"
		},
		{
			quote:"Unable to suppress love, the Church wanted at least to disinfect it, and it created marriage.",
			source:"Charles Baudelaire",
			year:"(1821-1867)",
			citation:"None"
		},
		{
			quote:"Argue for your limitations, and sure enough they're yours.",
			source:"Richard Bach",
			year:"None",
			citation:"None"
		},
		{
			quote:"A witty saying proves nothing.",
			source:"Voltaire",
			year:"(1694-1778)",
			citation:"None"
		},
		{
			quote:"Sleep is an excellent way of listening to an opera.",
			source:"James Stephens",
			year:"(1882-1950)",
			citation:"None"
		},
		{
			quote:"The nice thing about being a celebrity is that if you bore people they think it's their fault.",
			source:"Henry Kissinger",
			year:"(1923-)",
			citation:"None"
		},
		{
			quote:"Education is a progressive discovery of our own ignorance.",
			source:"Will Durant",
			year:"None",
			citation:"None"
		},
		{
			quote:"I have often regretted my speech, never my silence.",
			source:"Xenocrates",
			year:"(396-314 B.C.)",
			citation:"None"
		},
		{
			quote:"It was the experience of mystery -- even if mixed with fear -- that engendered religion.",
			source:"Albert Einstein",
			year:"(1879-1955)",
			citation:"None",
			genre:"Religion"
		},
		{
			quote:"If everything seems under control, you're just not going fast enough.",
			source:"Mario Andretti",
			year:"None",
			citation:"None"
		},
		{
			quote:"I do not consider it an insult, but rather a compliment to be called an agnostic. I do not pretend to know where many ignorant men are sure -- that is all that agnosticism means.",
			source:"Clarence Darrow",
			year:"(1925)",
			citation:"Scopes trial"
		},
		{
			quote:"Obstacles are those frightful things you see when you take your eyes off your goal.",
			source:"Henry Ford",
			year:"(1863-1947)",
			citation:"None"
		},
		{
			quote:"I'll sleep when I'm dead.",
			source:"Warren Zevon",
			year:"(1947-2003)",
			citation:"None"
		},
		{
			quote:"There are people in the world so hungry, that God cannot appear to them except in the form of bread.",
			source:"Mahatma Gandhi",
			year:"(1869-1948)",
			citation:"None"
		},
		{
			quote:"When you gaze long into the abyss, the abyss also gazes into you.",
			source:"Friedrich Nietzsche",
			year:"(1844-1900)",
			citation:"None"
		},
		{
			quote:"The instinct of nearly all societies is to lock up anybody who is truly free. First, society begins by trying to beat you up. If this fails, they try to poison you. If this fails too, they finish by loading honors on your head.",
			source:"Jean Cocteau",
			year:"(1889-1963)",
			citation:"None"
		},
		{
			quote:"Everyone is a genius at least once a year; a real genius has his original ideas closer together.",
			source:"Georg Lichtenberg",
			year:"(1742-1799)",
			citation:"None"
		},
		{
			quote:"Success usually comes to those who are too busy to be looking for it",
			source:"Henry David Thoreau",
			year:"(1817-1862)",
			citation:"None"
		},
		{
			quote:"While we are postponing, life speeds by.",
			source:"Seneca",
			year:"(3BC - 65AD)",
			citation:"None"
		},
		{
			quote:"Where are we going, and why am I in this handbasket?",
			source:"Bumper Sticker",
			year:"None",
			citation:"None"
		},
		{
			quote:"God, please save me from your followers!",
			source:"Bumper Sticker",
			year:"None",
			citation:"None"
		},
		{
			quote:"Fill what's empty, empty what's full, and scratch where it itches.",
			source:"the Duchess of Windsor",
			year:"None",
			citation:"when asked what is the secret to a long and happy life"
		},
		{
			quote:"First they ignore you, then they laugh at you, then they fight you, then you win.",
			source:"Mahatma Gandhi",
			year:"(1869-1948)",
			citation:"None"
		},
		{
			quote:"Luck is the residue of design.",
			source:"Branch Rickey former owner of the Brooklyn Dodger Baseball Team",
			year:"None",
			citation:"None"
		},
		{
			quote:"Tragedy is when I cut my finger. Comedy is when you walk into an open sewer and die.",
			source:"Mel Brooks",
			year:"None",
			citation:"None"
		},
		{
			quote:"Most people would sooner die than think; in fact, they do so.",
			source:"Bertrand Russell",
			year:"(1872-1970)",
			citation:"None"
		},
		{
			quote:"Wit is educated insolence.",
			source:"Aristotle",
			year:"(384-322 B.C.)",
			citation:"None"
		},
		{
			quote:"My advice to you is get married: if you find a good wife you'll be happy; if not, you'll become a philosopher.",
			source:"Socrates",
			year:"(470-399 B.C.)",
			citation:"None"
		},
		{
			quote:"Advice is what we ask for when we already know the answer but wish we didn't",
			source:"Erica Jong",
			year:"(1942-)",
			citation:"None"
		},
		{
			quote:"Show me a woman who doesn't feel guilty and I'll show you a man.",
			source:"Erica Jong",
			year:"(1942-)",
			citation:"None"
		},
		{
			quote:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
			source:"Maya Angelou",
			year:"(1928-)",
			citation:"None"
		},
		{
			quote:"Egotist: a person more interested in himself than in me.",
			source:"Ambrose Bierce",
			year:"(1842-1914)",
			citation:"None"
		},
		{
			quote:"A narcissist is someone better looking than you are.",
			source:"Gore Vidal",
			year:"None",
			citation:"None"
		},
		{
			quote:"Wise men make proverbs, but fools repeat them.",
			source:"Samuel Palmer",
			year:"(1805-80)",
			citation:"None"
		},
		{
			quote:"It has become appallingly obvious that our technology has exceeded our humanity.",
			source:"Albert Einstein",
			year:"(1879-1955)",
			citation:"None",
			genre: 'Science'
		},
		{
			quote:"The secret of success is to know something nobody else knows.",
			source:"Aristotle Onassis",
			year:"(1906-1975)",
			citation:"None"
		},
		{
			quote:"Sometimes when reading Goethe I have the paralyzing suspicion that he is trying to be funny.",
			source:"Guy Davenport",
			year:"None",
			citation:"None"
		},
		{
			quote:"When you have to kill a man, it costs nothing to be polite.",
			source:"Sir Winston Churchill",
			year:"(1874-1965)",
			citation:"None"
		},
		{
			quote:"Any man who is under 30, and is not a liberal, has no heart; and any man who is over 30, and is not a conservative, has no brains.",
			source:"Sir Winston Churchill",
			year:"(1874-1965)",
			citation:"None"
		},
		{
			quote:"The opposite of a correct statement is a false statement. The opposite of a profound truth may well be another profound truth.",
			source:"Niels Bohr",
			year:"(1885-1962)",
			citation:"None"
		},
		{
			quote:"We all agree that your theory is crazy, but is it crazy enough?",
			source:"Niels Bohr",
			year:"(1885-1962)",
			citation:"None"
		},
		{
			quote:"When I am working on a problem I never think about beauty. I only think about how to solve the problem. But when I have finished, if the solution is not beautiful, I know it is wrong.",
			source:"Buckminster Fuller",
			year:"(1895-1983)",
			citation:"None"
		},
		{
			quote:"In science one tries to tell people, in such a way as to be understood by everyone, something that no one ever knew before. But in poetry, it's the exact opposite.",
			source:"Paul Dirac",
			year:"(1902-1984)",
			citation:"None"
		},
		{
			quote:"I would have made a good Pope.",
			source:"Richard M. Nixon",
			year:"(1913-1994)",
			citation:"None"
		},
		{
			quote:"In any contest between power and patience, bet on patience.",
			source:"W.B. Prescott",
			year:"None",
			citation:"None"
		},
		{
			quote:"Anyone who considers arithmetical methods of producing random digits is, of course, in a state of sin.",
			source:"John von Neumann",
			year:"(1903-1957)",
			citation:"None"
		},
		{
			quote:"The mistakes are all waiting to be made.",
			source:"chessmaster Savielly Grigorievitch Tartakower",
			year:"(1887-1956)",
			citation:"on the game's opening position"
		},
		{
			quote:"It is unbecoming for young men to utter maxims.",
			source:"Aristotle",
			year:"(384-322 B.C.)",
			citation:"None"
		},
		{
			quote:"Grove giveth and Gates taketh away.",
			source:"Bob Metcalfe",
			year:"None",
			citation:"inventor of Ethernet on the trend of hardware speedups not being able to keep up with software demands"
		},
		{
			quote:"Reality is merely an illusion, albeit a very persistent one.",
			source:"Albert Einstein",
			year:"(1879-1955)",
			citation:"None",
			genre: 'Philosophy'
		},
		{
			quote:"One of the symptoms of an approaching nervous breakdown is the belief that one's work is terribly important.",
			source:"Bertrand Russell",
			year:"(1872-1970)",
			citation:"None"
		},
		{
			quote:"A little inaccuracy sometimes saves a ton of explanation.",
			source:"H. H. Munro (Saki)",
			year:"(Saki)",
			citation:"None"
		},
		{
			quote:"There are two ways of constructing a software design; one way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.",
			source:"C. A. R. Hoare",
			year:"None",
			citation:"None"
		},
		{
			quote:"Make everything as simple as possible, but not simpler.",
			source:"Albert Einstein",
			year:"(1879-1955)",
			citation:"None",
			genre: 'Science'
		},
		{
			quote:"What do you take me for, an idiot?",
			source:"General Charles de Gaulle",
			year:"(1890-1970)",
			citation:"when a journalist asked him if he was happy"
		},
		{
			quote:"I heard someone tried the monkeys-on-typewriters bit trying for the plays of W. Shakespeare but all they got was the collected works of Francis Bacon.",
			source:"Bill Hirst",
			year:"None",
			citation:"None"
		},
		{
			quote:"Three o'clock is always too late or too early for anything you want to do.",
			source:"Jean-Paul Sartre",
			year:"(1905-1980)",
			citation:"None"
		},
		{
			quote:"A doctor can bury his mistakes but an architect can only advise his clients to plant vines.",
			source:"Frank Lloyd Wright",
			year:"(1868-1959)",
			citation:"None"
		},
		{
			quote:"It is dangerous to be sincere unless you are also stupid.",
			source:"George Bernard Shaw",
			year:"(1856-1950)",
			citation:"None"
		},
		{
			quote:"If you haven't got anything nice to say about anybody, come sit next to me.",
			source:"Alice Roosevelt Longworth",
			year:"(1884-1980)",
			citation:"None"
		},
		{
			quote:"A man can't be too careful in the choice of his enemies.",
			source:"Oscar Wilde",
			year:"(1854-1900)",
			citation:"None"
		},
		{
			quote:"Forgive your enemies, but never forget their names.",
			source:"John F. Kennedy",
			year:"(1917-1963)",
			citation:"None"
		},
		{
			quote:"Logic is in the eye of the logician.",
			source:"Gloria Steinem",
			year:"None",
			citation:"None"
		},
		{
			quote:"No one can earn a million dollars honestly.",
			source:"William Jennings Bryan",
			year:"(1860-1925)",
			citation:"None"
		},
		{
			quote:"Everything has been figured out, except how to live.",
			source:"Jean-Paul Sartre",
			year:"(1905-1980)",
			citation:"None"
		},
		{
			quote:"Well-timed silence hath more eloquence than speech.",
			source:"Martin Fraquhar Tupper",
			year:"None",
			citation:"None"
		},
		{
			quote:"Thank you for sending me a copy of your book - I'll waste no time reading it.",
			source:"Moses Hadas",
			year:"(1900-1966)",
			citation:"None"
		},
		{
			quote:"From the moment I picked your book up until I laid it down I was convulsed with laughter. Some day I intend reading it.",
			source:"Groucho Marx",
			year:"(1895-1977)",
			citation:"None"
		},
		{
			quote:"It is better to have a permanent income than to be fascinating.",
			source:"Oscar Wilde",
			year:"(1854-1900)",
			citation:"None"
		},
		{
			quote:"When ideas fail, words come in very handy.",
			source:"Goethe",
			year:"(1749-1832)",
			citation:"None"
		},
		{
			quote:"In the end, everything is a gag.",
			source:"Charlie Chaplin",
			year:"(1889-1977)",
			citation:"None"
		},
		{
			quote:"The nice thing about egotists is that they don't talk about other people.",
			source:"Lucille S. Harper",
			year:"None",
			citation:"None"
		},
		{
			quote:"You got to be careful if you don't know where you're going, because you might not get there.",
			source:"Yogi Berra",
			year:"None",
			citation:"None"
		},
		{
			quote:"I love Mickey Mouse more than any woman I have ever known.",
			source:"Walt Disney",
			year:"(1901-1966)",
			citation:"None"
		},
		{
			quote:"He who hesitates is a damned fool.",
			source:"Mae West",
			year:"(1892-1980)",
			citation:"None"
		},
		{
			quote:"Good teaching is one-fourth preparation and three-fourths theater.",
			source:"Gail Godwin",
			year:"None",
			citation:"None"
		},
		{
			quote:"University politics are vicious precisely because the stakes are so small.",
			source:"Henry Kissinger",
			year:"(1923-)",
			citation:"None"
		},
		{
			quote:"The graveyards are full of indispensable men.",
			source:"Charles de Gaulle",
			year:"(1890-1970)",
			citation:"None"
		},
		{
			quote:"You can pretend to be serious; you can't pretend to be witty.",
			source:"Sacha Guitry",
			year:"(1885-1957)",
			citation:"None"
		},
		{
			quote:"Behind every great fortune there is a crime.",
			source:"Honore de Balzac",
			year:"(1799-1850)",
			citation:"None"
		},
		{
			quote:"If women didn't exist, all the money in the world would have no meaning.",
			source:"Aristotle Onassis",
			year:"(1906-1975)",
			citation:"None"
		},
		{
			quote:"I am not young enough to know everything.",
			source:"Oscar Wilde",
			year:"(1854-1900)",
			citation:"None"
		},
		{
			quote:"Bigamy is having one wife too many. Monogamy is the same.",
			source:"Oscar Wilde",
			year:"(1854-1900)",
			citation:"None"
		},
		{
			quote:"The object of war is not to die for your country but to make the other bastard die for his.",
			source:"General George Patton",
			year:"(1885-1945)",
			citation:"None"
		},
		{
			quote:"Sometimes a scream is better than a thesis.",
			source:"Ralph Waldo Emerson",
			year:"(1803-1882)",
			citation:"None"
		},
		{
			quote:"There is no sincerer love than the love of food.",
			source:"George Bernard Shaw",
			year:"(1856-1950)",
			citation:"None"
		},
		{
			quote:"I don't even butter my bread; I consider that cooking.",
			source:"Katherine Cebrian",
			year:"None",
			citation:"None"
		},
		{
			quote:"I have an existential map; it has 'you are here' written all over it.",
			source:"Steven Wright",
			year:"None",
			citation:"None"
		},
		{
			quote:"Mr. Wagner has beautiful moments but bad quarters of an hour.",
			source:"Gioacchino Rossini",
			year:"(1792-1868)",
			citation:"None"
		},
		{
			quote:"Manuscript: something submitted in haste and returned at leisure.",
			source:"Oliver Herford",
			year:"(1863-1935)",
			citation:"None"
		},
		{
			quote:"I have read your book and much like it.",
			source:"Moses Hadas",
			year:"(1900-1966)",
			citation:"None"
		},
		{
			quote:"The covers of this book are too far apart.",
			source:"Ambrose Bierce",
			year:"(1842-1914)",
			citation:"None"
		},
		{
			quote:"Everywhere I go I'm asked if I think the university stifles writers. My opinion is that they don't stifle enough of them.",
			source:"Flannery O'Connor",
			year:"(1925-1964)",
			citation:"None"
		},
		{
			quote:"Too many pieces of music finish too long after the end.",
			source:"Igor Stravinsky",
			year:"(1882-1971)",
			citation:"None"
		},
		{
			quote:"Anything that is too stupid to be spoken is sung.",
			source:"Voltaire",
			year:"(1694-1778)",
			citation:"None"
		},
		{
			quote:"When choosing between two evils, I always like to try the one I've never tried before.",
			source:"Mae West",
			year:"(1892-1980)",
			citation:"None"
		},
		{
			quote:"I don't know anything about music. In my line you don't have to.",
			source:"Elvis Presley",
			year:"(1935-1977)",
			citation:"None"
		},
		{
			quote:"No Sane man will dance.",
			source:"Cicero",
			year:"(106-43 B.C.)",
			citation:"None"
		},
		{
			quote:"Hell is a half-filled auditorium.",
			source:"Robert Frost",
			year:"(1874-1963)",
			citation:"None"
		},
		{
			quote:"Show me a sane man and I will cure him for you.",
			source:"Carl Gustav Jung",
			year:"(1875-1961)",
			citation:"None"
		},
		{
			quote:"Vote early and vote often.",
			source:"Al Capone",
			year:"(1899-1947)",
			citation:"None"
		},
		{
			quote:"If I were two-faced would I be wearing this one?",
			source:"Abraham Lincoln",
			year:"(1809-1865)",
			citation:"None"
		},
		{
			quote:"Few things are harder to put up with than a good example.",
			source:"Mark Twain",
			year:"(1835-1910)",
			citation:"None"
		},
		{
			quote:"Hell is other people.",
			source:"Jean-Paul Sartre",
			year:"(1905-1980)",
			citation:"None"
		},
		{
			quote:"Now I am become death, the destroyer of worlds.",
			source:"Robert J. Oppenheimer",
			year:"(1904-1967)",
			citation:"citing from the Bhagavad Gita after witnessing the world's first nuclear explosion"
		},
		{
			quote:"Happiness is good health and a bad memory.",
			source:"Ingrid Bergman",
			year:"(1917-1982)",
			citation:"None"
		},
		{
			quote:"Friends may come and go, but enemies accumulate.",
			source:"Thomas Jones",
			year:"None",
			citation:"None"
		},
		{
			quote:"You can get more with a kind word and a gun than you can with a kind word alone.",
			source:"Al Capone",
			year:"(1899-1947)",
			citation:"None"
		},
		{
			quote:"The gods too are fond of a joke.",
			source:"Aristotle",
			year:"(384-322 B.C.)",
			citation:"None"
		},
		{
			quote:"Distrust any enterprise that requires new clothes.",
			source:"Henry David Thoreau",
			year:"(1817-1862)",
			citation:"None"
		},
		{
			quote:"The difference between pornography and erotica is lighting.",
			source:"Gloria Leonard",
			year:"None",
			citation:"None"
		},
		{
			quote:"It is time I stepped aside for a less experienced and less able man.",
			source:"Professor Scott Elledge",
			year:"None",
			citation:"on his retirement from Cornell"
		},
		{
			quote:"Every day I get up and look through the Forbes list of the richest people in America. If I'm not there, I go to work.",
			source:"Robert Orben",
			year:"None",
			citation:"None"
		},
		{
			quote:"The cynics are right nine times out of ten.",
			source:"Henry Louis Mencken",
			year:"(1880-1956)",
			citation:"None"
		},
		{
			quote:"There are some experiences in life which should not be demanded twice from any man, and one of them is listening to the Brahms Requiem.",
			source:"George Bernard Shaw",
			year:"(1856-1950)",
			citation:"None"
		},
		{
			quote:"And I looked, and behold a pale horse: and his name that sat on him was Death, and Hell followed with him.",
			source:"Revelation 6:8",
			year:"None",
			citation:"None"
		},
		{
			quote:"Attention to health is life's greatest hindrance.",
			source:"Plato",
			year:"(427-347 B.C.)",
			citation:"None"
		},
		{
			quote:"Plato was a bore.",
			source:"Friedrich Nietzsche",
			year:"(1844-1900)",
			citation:"None"
		},
		{
			quote:"Nietzsche was stupid and abnormal.",
			source:"Leo Tolstoy",
			year:"(1828-1910)",
			citation:"None"
		},
		{
			quote:"I'm not going to get into the ring with Tolstoy.",
			source:"Ernest Hemingway",
			year:"(1899-1961)",
			citation:"None"
		},
		{
			quote:"Hemingway was a jerk.",
			source:"Harold Robbins",
			year:"None",
			citation:"None"
		},
		{
			quote:"Men are not disturbed by things, but the view they take of things.",
			source:"Epictetus",
			year:"(55-135 A.D.)",
			citation:"None"
		},
		{
			quote:"How can I lose to such an idiot?",
			source:"A shout from chessmaster Aaron Nimzovich",
			year:"(1886-1935)",
			citation:"None"
		},
		{
			quote:"Not only is there no God, but try finding a plumber on Sunday.",
			source:"Woody Allen",
			year:"(1935-)",
			citation:"None"
		},
		{
			quote:"I don't feel good.",
			source:"The last words of Luther Burbank",
			year:"(1849-1926)",
			citation:"None"
		},
		{
			quote:"Nothing is wrong with California that a rise in the ocean level wouldn't cure.",
			source:"Ross MacDonald",
			year:"(1915-1983)",
			citation:"None"
		},
		{
			quote:"Men have become the tools of their tools.",
			source:"Henry David Thoreau",
			year:"(1817-1862)",
			citation:"None"
		},
		{
			quote:"I have never let my schooling interfere with my education.",
			source:"Mark Twain",
			year:"(1835-1910)",
			citation:"None"
		},
		{
			quote:"It is now possible for a flight attendant to get a pilot pregnant.",
			source:"Richard J. Ferris president of United Airlines",
			year:"None",
			citation:"None"
		},
		{
			quote:"I never miss a chance to have sex or appear on television.",
			source:"Gore Vidal",
			year:"None",
			citation:"None"
		},
		{
			quote:"I don't want to achieve immortality through my work; I want to achieve immortality through not dying.",
			source:"Woody Allen",
			year:"(1935-)",
			citation:"None"
		},
		{
			quote:"Men and nations behave wisely once they have exhausted all the other alternatives.",
			source:"Abba Eban",
			year:"(1915-2002)",
			citation:"None"
		},
		{
			quote:"A consensus means that everyone agrees to say collectively what no one believes individually.",
			source:"Abba Eban",
			year:"(1915-2002)",
			citation:"None"
		},
		{
			quote:"To sit alone with my conscience will be judgment enough for me.",
			source:"Charles William Stubbs",
			year:"None",
			citation:"None"
		},
		{
			quote:"Sanity is a madness put to good uses.",
			source:"George Santayana",
			year:"(1863-1952)",
			citation:"None"
		},
		{
			quote:"Imitation is the sincerest form of television.",
			source:"Fred Allen",
			year:"(1894-1956)",
			citation:"None"
		},
		{
			quote:"Always do right- this will gratify some and astonish the rest.",
			source:"Mark Twain",
			year:"(1835-1910)",
			citation:"None"
		},
		{
			quote:"In America, anybody can be president. That's one of the risks you take.",
			source:"Adlai Stevenson",
			year:"(1900-1965)",
			citation:"None"
		},
		{
			quote:"Copy from one, it's plagiarism; copy from two, it's research.",
			source:"Wilson Mizner",
			year:"(1876-1933)",
			citation:"None"
		},
		{
			quote:"Why don't you write books people can read?",
			source:"Nora Joyce to her husband James",
			year:"(1882-1941)",
			citation:"None"
		},
		{
			quote:"Some editors are failed writers, but so are most writers.",
			source:"T. S. Eliot",
			year:"(1888-1965)",
			citation:"None"
		},
		{
			quote:"Criticism is prejudice made plausible.",
			source:"Henry Louis Mencken",
			year:"(1880-1956)",
			citation:"None"
		},
		{
			quote:"It is better to be quotable than to be honest.",
			source:"Tom Stoppard",
			year:"None",
			citation:"None"
		},
		{
			quote:"Being on the tightrope is living; everything else is waiting.",
			source:"Karl Wallenda",
			year:"None",
			citation:"None"
		},
		{
			quote:"Opportunities multiply as they are seized.",
			source:"Sun Tzu",
			year:"None",
			citation:"None"
		},
		{
			quote:"A scholar who cherishes the love of comfort is not fit to be deemed a scholar.",
			source:"Lao-Tzu",
			year:"(570?-490? BC)",
			citation:"None"
		},
		{
			quote:" The best way to predict the future is to invent it.",
			source:"Alan Kay",
			year:"None",
			citation:"None"
		},
		{
			quote:"Never mistake motion for action.",
			source:"Ernest Hemingway",
			year:"(1899-1961)",
			citation:"None"
		},
		{
			quote:"I contend that we are both atheists. I just believe in one fewer god than you do. When you understand why you dismiss all the other possible gods, you will understand why I dismiss yours.",
			source:"Sir Stephen Henry Roberts",
			year:"(1901-1971)",
			citation:"None"
		},
		{
			quote:"Hell is paved with good samaritans.",
			source:"William M. Holden",
			year:"None",
			citation:"None"
		},
		{
			quote:"The longer I live the more I see that I am never wrong about anything, and that all the pains that I have so humbly taken to verify my notions have only wasted my time.",
			source:"George Bernard Shaw",
			year:"(1856-1950)",
			citation:"None"
		},
		{
			quote:"Silence is argument carried out by other means.",
			source:"Ernesto 'Che' Guevara",
			year:"(1928-1967)",
			citation:"None"
		},
		{
			quote:"Well done is better than well said.",
			source:"Benjamin Franklin",
			year:"(1706-1790)",
			citation:"None"
		},
		{
			quote:"The average person thinks he isn't.",
			source:"Father Larry Lorenzoni",
			year:"None",
			citation:"None"
		},
		{
			quote:"Heav'n hath no rage like love to hatred turn'd, Nor Hell a fury, like a woman scorn'd.",
			source:"William Congreve",
			year:"(1670-1729)",
			citation:"None"
		},
		{
			quote:"A husband is what is left of the lover after the nerve has been extracted.",
			source:"Helen Rowland",
			year:"(1876-1950)",
			citation:"None"
		},
		{
			quote:"Learning is what most adults will do for a living in the 21st century.",
			source:"Lewis Perelman",
			year:"None",
			citation:"None"
		},
		{
			quote:"Dogma is the sacrifice of wisdom to consistency.",
			source:"Lewis Perelman",
			year:"None",
			citation:"None"
		},
		{
			quote:"Sometimes it is not enough that we do our best; we must do what is required.",
			source:"Sir Winston Churchill",
			year:"(1874-1965)",
			citation:"None"
		},
		{
			quote:"The man who goes alone can start today; but he who travels with another must wait till that other is ready.",
			source:"Henry David Thoreau",
			year:"(1817-1862)",
			citation:"None"
		},
		{
			quote:"There is a country in Europe where multiple-choice tests are illegal.",
			source:"Sigfried Hulzer",
			year:"None",
			citation:"None"
		},
		{
			quote:"Ask her to wait a moment - I am almost done.",
			source:"Carl Friedrich Gauss",
			year:"(1777-1855)",
			citation:"while working when informed that his wife is dying"
		},
		{
			quote:"A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.",
			source:"Sir Winston Churchill",
			year:"(1874-1965)",
			citation:"None"
		},
		{
			quote:"I think there is a world market for maybe five computers.",
			source:"Thomas Watson",
			year:"(1874-1956)",
			citation:"Chairman of IBM 1943",
			genre:"Computer Science"
		},
		{
			quote:"I think it would be a good idea.",
			source:"Mahatma Gandhi",
			year:"(1869-1948)",
			citation:"when asked what he thought of Western civilization"
		},
		{
			quote:"The only thing necessary for the triumph of evil is for good men to do nothing.",
			source:"Edmund Burke",
			year:"(1729-1797)",
			citation:"None"
		},
		{
			quote:"I'm not a member of any organized political party, I'm a Democrat!",
			source:"Will Rogers",
			year:"(1879-1935)",
			citation:"None"
		},
		{
			quote:"If stupidity got us into this mess, then why can't it get us out?",
			source:"Will Rogers",
			year:"(1879-1935)",
			citation:"None"
		},
		{
			quote:"The backbone of surprise is fusing speed with secrecy.",
			source:"Von Clausewitz",
			year:"(1780-1831)",
			citation:"None"
		},
		{
			quote:"Democracy does not guarantee equality of conditions - it only guarantees equality of opportunity.",
			source:"Irving Kristol",
			year:"None",
			citation:"None"
		},
		{
			quote:"There is no reason anyone would want a computer in their home.",
			source:"Ken Olson",
			year:"(1977)",
			citation:"president chairman and founder of Digital Equipment Corp",
			genre:"Computer Science"
		},
		{
			quote:"The concept is interesting and wellformed, but in order to earn better than a 'C', the idea must be feasible.",
			source:"A Yale University management professor in response to student Fred Smith's paper proposing reliable overnight delivery service. Smith went on to found Federal Express Corp.",
			year:"None",
			citation:"None"
		},
		{
			quote:"Who the hell wants to hear actors talk?",
			source:"H. M. Warner",
			year:"(1881-1958)",
			citation:"founder of Warner Brothers in 1927"
		},
		{
			quote:"We don't like their sound, and guitar music is on the way out.",
			source:"Decca Recording Co. rejecting the Beatles",
			year:"(1962)",
			citation:"None"
		},
		{
			quote:"Everything that can be invented has been invented.",
			source:"Charles H. Duell Commissioner U.S. Office of Patents",
			year:"(1899)",
			citation:"None"
		},
		{
			quote:"Denial ain't just a river in Egypt.",
			source:"Mark Twain",
			year:"(1835-1910)",
			citation:"None"
		},
		{
			quote:"A pint of sweat saves a gallon of blood.",
			source:"General George S. Patton",
			year:"(1885-1945)",
			citation:"None"
		},
		{
			quote:"After I'm dead I'd rather have people ask why I have no monument than why I have one.",
			source:"Cato the Elder",
			year:"(234-149 BC)",
			citation:"None"
		},
		{
			quote:"He can compress the most words into the smallest idea of any man I know.",
			source:"Abraham Lincoln",
			year:"(1809-1865)",
			citation:"None"
		},
		{
			quote:"Don't let it end like this. Tell them I said something.",
			source:"last words of Pancho Villa",
			year:"(1877-1923)",
			citation:"None"
		},
		{
			quote:"The right to swing my fist ends where the other man's nose begins.",
			source:"Oliver Wendell Holmes",
			year:"(1841-1935)",
			citation:"None"
		},
		{
			quote:"The difference between fiction and reality? Fiction has to make sense.",
			source:"Tom Clancy",
			year:"None",
			citation:"None"
		},
		{
			quote:"It's not the size of the dog in the fight, it's the size of the fight in the dog.",
			source:"Mark Twain",
			year:"(1835-1910)",
			citation:"None"
		},
		{
			quote:"It is better to be feared than loved, if you cannot be both.",
			source:"Niccolo Machiavelli",
			year:"(1469-1527)",
			citation:"None"
		},
		{
			quote:"Whatever is begun in anger ends in shame.",
			source:"Benjamin Franklin",
			year:"(1706-1790)",
			citation:"None"
		},
		{
			quote:"The President has kept all of the promises he intended to keep.",
			source:"Clinton aide George Stephanopolous",
			year:"None",
			citation:"speaking on Larry King Live"
		},
		{
			quote:"We're going to turn this team around 360 degrees.",
			source:"Jason Kidd",
			year:"None",
			citation:"upon his drafting to the Dallas Mavericks"
		},
		{
			quote:"Half this game is ninety percent mental.",
			source:"Yogi Berra",
			year:"None",
			citation:"None"
		},
		{
			quote:"There is only one nature: the division into science and engineering is a human imposition, not a natural one. Indeed, the division is a human failure; it reflects our limited capacity to comprehend the whole.",
			source:"Bill Wulf",
			year:"None",
			citation:"None"
		},
		{
			quote:"There's many a bestseller that could have been prevented by a good teacher.",
			source:"Flannery O'Connor",
			year:"(1925-1964)",
			citation:"None"
		},
		{
			quote:"He has all the virtues I dislike and none of the vices I admire.",
			source:"Sir Winston Churchill",
			year:"(1874-1965)",
			citation:"None"
		},
		{
			quote:"Write drunk; edit sober.",
			source:"Ernest Hemingway",
			year:"(1899-1961)",
			citation:"None"
		},
		{
			quote:"I criticize by creation - not by finding fault.",
			source:"Cicero",
			year:"(106-43 B.C.)",
			citation:"None"
		},
		{
			quote:"Love is friendship set on fire.",
			source:"Jeremy Taylor",
			year:"None",
			citation:"None"
		},
		{
			quote:"God gave men both a penis and a brain, but unfortunately not enough blood supply to run both at the same time.",
			source:"Robin Williams",
			year:"None",
			citation:"None"
		},
		{
			quote:"My occupation now, I suppose, is jail inmate.",
			source:"Unibomber Theodore Kaczynski",
			year:"None",
			citation:"when asked in court what his current profession was"
		},
		{
			quote:"Woman was God's second mistake.",
			source:"Friedrich Nietzsche",
			year:"(1844-1900)",
			citation:"None"
		},
		{
			quote:"This isn't right, this isn't even wrong.",
			source:"Wolfgang Pauli",
			year:"(1900-1958)",
			citation:"upon reading a young physicist's paper"
		},
		{
			quote:"For centuries, theologians have been explaining the unknowable in terms of the-not-worth-knowing.",
			source:"Henry Louis Mencken",
			year:"(1880-1956)",
			citation:"None"
		},
		{
			quote:"Pray, v.: To ask that the laws of the universe be annulled on behalf of a single petitioner confessedly unworthy.",
			source:"Ambrose Bierce",
			year:"(1842-1914)",
			citation:"None"
		},
		{
			quote:"Every normal man must be tempted at times to spit upon his hands, hoist the black flag, and begin slitting throats.",
			source:"Henry Louis Mencken",
			year:"(1880-1956)",
			citation:"None"
		},
		{
			quote:"Now, now my good man, this is no time for making enemies.",
			source:"Voltaire",
			year:"(1694-1778)",
			citation:"on his deathbed in response to a priest asking that he renounce Satan."
		},
		{
			quote:"Fill the unforgiving minute with sixty seconds worth of distance run.",
			source:"Rudyard Kipling",
			year:"(1865-1936)",
			citation:"None"
		},
		{
			quote:"He would make a lovely corpse.",
			source:"Charles Dickens",
			year:"(1812-1870)",
			citation:"None"
		},
		{
			quote:"I've just learned about his illness. Let's hope it's nothing trivial.",
			source:"Irvin S. Cobb",
			year:"None",
			citation:"None"
		},
		{
			quote:"I worship the quicksand he walks in.",
			source:"Art Buchwald",
			year:"None",
			citation:"None"
		},
		{
			quote:"Wagner's music is better than it sounds.",
			source:"Mark Twain",
			year:"(1835-1910)",
			citation:"None"
		},
		{
			quote:"A poem is never finished, only abandoned.",
			source:"Paul Valery",
			year:"(1871-1945)",
			citation:"None"
		},
		{
			quote:"We are not retreating - we are advancing in another Direction.",
			source:"General Douglas MacArthur",
			year:"(1880-1964)",
			citation:"None"
		},
		{
			quote:"With or without religion, good people can behave well and bad people can do evil; but for good people to do evil, that takes religion.",
			source:"Steven Weinberg",
			year:"(1933-)",
			citation:"None",
			genre:"Religion"
		},
		{
			quote:"If you were plowing a field, which would you rather use? Two strong oxen or 1024 chickens?",
			source:"Seymour Cray",
			year:"(1925-1996)",
			citation:"father of supercomputing",
			genre:"Computer Science"
		},
		{
			quote:"#3 pencils and quadrille pads.",
			source:"Seymoure Cray",
			year:"(1925-1996)",
			citation:"when asked what CAD tools he used to design the Cray I supercomputer; he also recommended using the back side of the pages so that the grid lines were not so dominant.",
			genre:"Computer Science"
		},
		{
			quote:"Interesting - I use a Mac to help me design the next Cray.",
			source:"Seymoure Cray",
			year:"(1925-1996)",
			citation:"when he was told that Apple Inc. had recently bought a Cray supercomputer to help them design the next Mac.",
			genre:"Computer Science"
		},
		{
			quote:"Your Highness, I have no need of this hypothesis.",
			source:"Pierre Laplace",
			year:"(1749-1827)",
			citation:"to Napoleon on why his works on celestial mechanics make no mention of God."
		},
		{
			quote:"I choose a block of marble and chop off whatever I don't need.",
			source:"Francois-Auguste Rodin",
			year:"(1840-1917)",
			citation:"when asked how he managed to make his remarkable statues"
		},
		{
			quote:"The man who does not read good books has no advantage over the man who cannot read them.",
			source:"Mark Twain",
			year:"(1835-1910)",
			citation:"None"
		},
		{
			quote:"The truth is more important than the facts.",
			source:"Frank Lloyd Wright",
			year:"(1868-1959)",
			citation:"None"
		},
		{
			quote:"Research is what I'm doing when I don't know what I'm doing.",
			source:"Wernher Von Braun",
			year:"(1912-1977)",
			citation:"None"
		},
		{
			quote:"There are only two tragedies in life: one is not getting what one wants, and the other is getting it.",
			source:"Oscar Wilde",
			year:"(1854-1900)",
			citation:"None"
		},
		{
			quote:"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
			source:"Albert Einstein",
			year:"(1879-1955)",
			citation:"None",
			genre: 'Life'
		}
]
