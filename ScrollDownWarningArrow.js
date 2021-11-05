/**
 * Adds and removes the class "clicked" to elements with the class "clickable".
 * @author Ralf Gunter Rotstein <ralf.rotstein@gmail.com>
 * @copyright Copyright (c) 2021, Ralf Gunter Rotstein
 * @license https://www.gnu.org/licenses/gpl-3.0.html GNU General Public License
 * 
 * @category ScrollDownWarningArrow
 * @package ScrollDownWarningArrow
 * @version 1.0.0
 */
class ScrollDownWarningArrow {
    /**
     * Creates properties and calls initialization method when the document is ready.
	 * @constructor
     */
	constructor(scrollHandler) {
		/**
		 * @property {Object} scrollHandler Interface with the method scrollToTargetY(yPixel).
		 */
		this.scrollHandler = scrollHandler;

		/**
		 * @property {jQuery} $arrow An arrow that indicates the user should scroll down.
		 */
		this.$arrow = null;
		
		/**
		 * @property {jQuery} scrollHandler Object of element clicking the arrow will scroll to.
		 */
		this.$yTarget = null;

		$(document).ready(() => this.initializeArrowAndTarget());
	}

    /**
     * If #scroll-down-warning-arrow exists, sets its event listeners.
	 * @returns {void}
     */
	initializeArrowAndTarget() {
		this.$arrow = $("#scroll-down-warning-arrow");

		if (this.$arrow.length) {
			this.$yTarget = $(".scroll-down-warning-arrow__target").first();

			this.$arrow.on("click", () => this.scrollHandler.scrollToTargetY(this.distanceFromTop(this.$yTarget)));

			$(window).on("scroll", () => this.removeElementWhenAboveScreen(this.$arrow));
		}
	}

    /**
     * Deletes #scroll-down-warning-arrow when the screen scrolls down.
	 * @returns {void}
     */
	removeElementWhenAboveScreen($object) {
		if (this.isAboveScreen($object))
			$object.remove();
	}

    /**
     * False means #scroll-down-warning-arrow is still visible.
	 * @param {jQuery} $object Object of element to check.
	 * @returns {boolean}
     */
	isAboveScreen($object) { return $object.offset().top + $object.height() - $(window).scrollTop() < 0; }

    /**
     * Pixels from the element to the top of the page.
	 * @param {jQuery} $object Object of element whose distance from top to measure.
	 * @returns {number}
     */
	distanceFromTop($object) { return $object.offset().top; }
}



const scrollDownWarningArrow = new ScrollDownWarningArrow(smoothScrolling);