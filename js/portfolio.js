'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(initializePage);

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	//check screen size on load and resize
	checkSize();
	$(window).resize(checkSize);

	// Add smooth scrolling to sidebar links
	$(".menuOption > a").click(smoothScroll);
	$(".menuOption > ul > li > a").click(smoothScroll);

	//Change active list item
	$(".menuOption").click(activateItem);

	$(".btn").click(removeFocus);
}

/* ---------------------------------------------------
	NavBar functions
----------------------------------------------------- */

//Change active list item
function activateItem () {
	// If this isn't already active
	if (!$(this).hasClass("active")) {
		// Remove the class from anything that is active
		$(".menuOption").removeClass("active");
		// And make this active
		$(this).addClass("active");
	}
}

function removeFocus() {
	$(this).blur();
}

//check which navigation bar to use, mobile or full version
function checkSize() {
 	if ($("#sideHeader").css("display") == "none") {

		$('#navbar').removeClass('sideBarContainer');
		$('#navbar').addClass('navbar navbar-custom navbar-fixed-top');
		$('#optionsList').addClass('collapse navbar-collapse');
		$('#optionsListType').removeClass('list-unstyled components');
		$('#optionsListType').addClass('nav navbar-nav');

	} else {
		$('#navbar').removeClass('navbar navbar-custom navbar-fixed-top');
		$('#navbar').addClass('sideBarContainer');
		$('#optionsList').removeClass('collapse navbar-collapse');
		$('#optionsListType').removeClass('nav navbar-nav');
		$('#optionsListType').addClass('list-unstyled components');
	}

	console.log($("#navbar").parent().html());
}

// Add smooth scrolling animation
function smoothScroll (event) {
	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		var hash = this.hash;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){

			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		});
	}
}


/* ---------------------------------------------------
	Collpased NavBar functions
----------------------------------------------------- */
function open_menu() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("menuHeader").style.display = "none";
}
function close_menu() {
    document.getElementById("mySidebar").style.width = "300px"; 
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("menuHeader").style.display = "block";
}

