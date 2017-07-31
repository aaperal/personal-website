/*
 *
 * Whenever a page is loaded,
 * this function checks to make sure
 * the right theme is active.
 *
 */
$(document).ready(
	function() {

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
		
		// makes the logo fade out
		$(anchor).animate({
			opacity: '0.1'
		}, 'slow');
		
		if (sessionStorage.myValue == 'true') {
			
			if($(logo).attr('alt') == 'Sun') {

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

			}
		} else {

			if ($(logo).attr('alt') == 'Moon') {
				
				// changes main img to sun picture
				$(anchor).attr('alt','Sun');
				$(anchor).attr('src','img/Sun.png');

				// changes logo to sun
				$(logo).attr('alt','Sun');
				$(logo).attr('src','img/sun.png');

				// changes text background theme
				$(text).toggleClass('main-text-night');
				$(text).toggleClass('main-text-day');

				// // changes header text
				$(links).toggleClass('night');
				$(links).toggleClass('day');
				$('#time').text('by day');

				// changes navbar to day mode
				$(nav).toggleClass('navbar-night');
				
			}
		}	
			// makes the logo fade in
			$(anchor).animate({
			opacity: '1.0'
		}, 'slow');
	}
)