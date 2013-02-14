/*globals jQuery, $, document, window*/

var Parallax = {
	defaults: {
		slide: '.slide',
		data: 'data-ratio'
	},
	global: {
		ratio: undefined
	},
	/**
	 * Converts string variables to objects, if need be
	 * @public
	 * @param {Array} objs List of strings to be converted into objects
	 * @returns this
	 */
	objectify: function (objs) {
		"use strict";
		var i = 0, obj;

		for (i = 0; i < objs.length; i += 1) {
			obj = this.defaults[objs[i]];
			if (typeof obj === 'string' || obj instanceof jQuery !== true) {
				this.defaults[objs[i]] = $(obj);
			}
		}

		return this;
	},
	/**
	 * Sets up event listeners
	 * @public
	 * @param none
	 * @returns this
	 */
	events: function () {
		"use strict";

		$(document).on('scroll', this.scroll);

		return this;
	},
	/**
	 * Generates the correct ratio
	 * @public
	 * @param {Object} obj The jQuery object in question
	 * @param {String} data The HTML attribute with the ratio
	 */
	ratio: function (obj, data) {
		"use strict";
		var ratio = $(obj).attr(data), to = [];

		/* If there's no ratio, skip */
		if (ratio === undefined || ratio === '') {
			/* Set the global ratio as a fallback */
			if (Parallax.global.ratio === undefined) {
				$(obj).removeAttr(data);
				return 1;
			} else {
				ratio = Parallax.global.ratio;
			}
		}

		/* If the ratio is given as a percent, change to decimal */
		if (ratio.search('%') !== -1) {
			return parseInt(ratio.replace('%', ''), 10) / 100;
		}

		/* If the ratio is given as a traditional ratio, change to decimal */
		if (ratio.search('to') !== -1) {
			to = ratio.split('to');
			return parseInt(to[1], 10) / parseInt(to[0], 10);
		}

		/* If the global ratio is set, use that */
		if (Parallax.global.ratio !== undefined) {
			return Parallax.global.ratio;
		}

		return 1;
	},
	/**
	 * Scrolls the slides
	 * @private
	 * @param {Document} document The context document
	 * @returns this
	 */
	scroll: function () {
		"use strict";
		var scroll = $(document).scrollTop(), ratio = 0, background = false, data = Parallax.defaults.data;

		Parallax.defaults.slide.each(function () {
			/* If there's no background to animate, skip */
			background = ($(this).css('background-image') !== 'none');
			if (background === false) {
				$(this).removeAttr(data);
				return;
			}

			ratio = Parallax.ratio(this, data);

			$(this).css({
				backgroundPosition: '0 ' + (scroll * ratio) + 'px'
			});
		});

		return this;
	},
	/**
	 * Initializes Parallax
	 * @public
	 * @param {Object} defaults The default variables
	 * @returns this
	 */
	initialize: function (defaults) {
		"use strict";
		$.extend(this.defaults, defaults);

		this.objectify(['slide']).events();
		return this;
	}
};