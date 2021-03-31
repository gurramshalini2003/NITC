(function($) {

	"use strict";
		// fixed-menu
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 50) {
				$('.top-nav').addClass('fixed-menu');
			} else {
				$('.top-nav').removeClass('fixed-menu');
			}
		});
})(window.jQuery);