window.onload = function () {
	var trackEvent = document.querySelectorAll("[data-trackevent]"),
			trackPage = document.querySelectorAll("[data-trackpageview]");

	// if is TrackEvent
	if (trackEvent.length > 0) {

		for (var x = 0; x < trackEvent.length; x++) {

			trackEvent[x].addEventListener("click", function(e) {

				var data = this.dataset.trackevent;

				var tag = data.split("/");

				// check for ga
				if (typeof ga !== 'undefined') {
					ga('send', 'event', tag[0], tag[1], tag[2]);
				}

				// check for _gaq
				if (typeof _gaq !== 'undefined') {
					_gaq.push(['_trackEvent', tag[0], tag[1], tag[2]]);
				}

			}); // end addEventListener

		} // endfor

	} // end if

	// if is trackPage
	if (trackPage.length > 0) {

		for (var x = 0; x < trackPage.length; x++) {

			trackPage[x].addEventListener("click", function(e) {

				var tag = this.dataset.trackpageview;

				// check for ga
				if (typeof ga !== 'undefined') {
					ga('send', 'pageview', tag);
				}

				// check for _gaq
				if (typeof _gaq !== 'undefined') {
					_gaq.push(['_trackPageview', tag]);
				}

			}); // end addEventListener

		} // endfor

	} // end if

} // end onload