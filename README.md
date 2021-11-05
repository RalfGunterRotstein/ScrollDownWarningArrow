# ScrollDownWarningArrow
A **jQuery** script and some **CSS** styles that make a SVG blink, scroll the screen down if clicked, and disappear when the screen scrolls down.

How to use it:
1. Put an inline **SVG** with the ID **"scroll-down-warning-arrow"** where you want it to show.
2. Define its size, color and blink rate in the file **style.css**.

You can see it working at [Scroll Down Warning Arrow – Ralf’s Portfolio](http://ralf.infinityfreeapp.com/scroll-down-warning-arrow/).

Requires an interface with the method "scrollToTargetY(targetYInPixels)". I’ve used [my own](https://github.com/RalfGunterRotstein/SmoothScrolling).