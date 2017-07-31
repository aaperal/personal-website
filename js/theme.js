/*
 * PARAM: file path to a text file that contains
 * lines of "jobs" or "roles"
 *
 * Returns a random line from the indicated text file.
 *
 */
function returnLine(filePath) {

	var lines;
	var randomNumber = 0;
	var lastRandomNumber = 0 ;
	$.ajax({
		url: filePath
	}).done(function(content) {
		lines = content.replace(/\r\n|\r/g, '\n').trim().split('\n');
		if (lines && lines.length) {
				while (randomNumber === lastRandomNumber) {
					randomNumber = parseInt(Math.random() * lines.length);

					if (lines.length === 1 ) { break; }
				}

				lastRandomNumber = randomNumber;
				
				$('#role').text(lines[randomNumber]);
				
				

		}

	});

}

/*
 *
 * This will wait for the button click to 
 * change the theme of the website
 * between night and day.
 *
 */
$(document).ready(
	$('#theme-button, #nav-logo').click(function(){

		// gets the main img
		var anchor = $('#theme-button').children()[0];  
		//retrieves navbar
		var nav = document.getElementById('navigation');
		// gets the logo
		var logo = $('#nav-logo').children()[0];
		// retrieves main text element
		var text = document.getElementById('main-text');
		// gets header & link text
		var links = document.getElementById('nav-links');

		if ($(logo).attr('alt') == 'Sun') {			

	 		// changes main img to moon picture
			$(anchor).attr('alt','Moon');
			$(anchor).attr('src','img/moon.png');

			// changes logo to moon
			$(logo).attr('alt','Moon');
			$(logo).attr('src','img/moon.png');
			
			// changes text background theme
			$(text).toggleClass('main-text-day');
			$(text).toggleClass('main-text-night');

			// changes header and links text
			$(links).toggleClass('day');
			$(links).toggleClass('night');
			$('#time').text('by night');

			// changes navbar to night mode
			$(nav).toggleClass('navbar-night');

			// function that changes random header on home page
			returnLine('docs/nightdescs.txt');

			// true means night theme active
			sessionStorage.myValue = true;

		} else {

			// changes main img to sun picture
			$(anchor).attr('alt','Sun');
			$(anchor).attr('src','img/sun.png');

			// changes logo to sun
			$(logo).attr('alt','Sun');
			$(logo).attr('src','img/sun.png');

			// changes text background theme
			$(text).toggleClass('main-text-night');
			$(text).toggleClass('main-text-day');

			// changes header text
			$(links).toggleClass('night');
			$(links).toggleClass('day');
			$('#time').text('by day');

			// changes navbar back to day mode
			$(nav).toggleClass('navbar-night');
			
			// function that chooses random 'day' roles
			returnLine('docs/daydescs.txt');

			// day theme active
			sessionStorage.myValue = false;
		}

	

	})

);
