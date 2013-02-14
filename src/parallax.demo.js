/*globals jQuery, $, document, window*/

var demo = {
	/**
	 * Initializes Parallax demo
	 * @public
	 * @param {Object} opts Demo options
	 * @returns this
	 */
	demo: function (opts) {
		"use strict";
		var defaults = {
			tour: '#tour',
	        top: '#top',
	        duration: 100e2
		};

		$.extend(defaults, opts);
		$.extend(this.defaults, defaults);

		this.objectify(['tour', 'top']);

		$(Parallax.defaults.tour).on('click', this.tour);
	    $(Parallax.defaults.top).on('click', this.top);

		return this;
	},
	/**
	 * Gives a scrolling tour
	 * @private
	 * @param none
	 * @returns this
	 */
	tour: function () {
		"use strict";
		var height = document.height - window.innerHeight;

		$('body').animate({
			scrollTop: height
		}, Parallax.defaults.duration);

		return this;
	},
	/**
	 * Scrolls to the top
	 * @private
	 * @param none
	 * @returns this
	 */
	top: function () {
	    "use strict";

	    $('body').animate({
	        scrollTop: 0
	    }, 1e3);

	    return this;
	}
};

$.extend(Parallax, demo);