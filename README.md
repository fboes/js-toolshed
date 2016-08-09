js-toolshed
===========

[![devDependency Status](https://david-dm.org/fboes/js-toolshed/dev-status.svg)](https://david-dm.org/fboes/js-toolshed?type=dev)

Javascript Toolshed adds some basic methods to already existing JS prototypes / objects. You may want to consider if [extending native objects is evil or not](https://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/).

And remember: [You might not need jQuery](docs/no-jquery.md) and use [Vanilla JS](http://vanilla-js.com/) instead.

Installation
------------

Via [Bower](http://bower.io/): `bower install fboes/js-toolshed`

1. Copy [build/js-toolshed.js](build/js-toolshed.js) to your local JS directory.
2. Load Toolshed via `<script src="js-toolshed.js"></script>`.

Documentation
-------------

See the [auto documentation](docs/api.md) for new methods to use.

* `Math` & `Number` get new methods for rounding and styled output of numbers.
* `Array` gets new methods for smart adding of new values and fast manipulation of values.
* `String` gets lots of new methods for outputting various stuff.
* An improved `Date`-object acts as a parser for ISO-formatted dates.
* `Elements` gets methods for class- and event-manipulation like in jQuery.

There is also [a small polyfill](src/js-legacy.js) to give older browsers (IE 8) some new Javascript methods.

* There is a stub `console` for old browsers.
* Added methods for adding `Events`.
* New methods for selecting `Nodes` added.

Compatibility
-------------

[`js-toolshed.js`]((build/js-toolshed.js)) works with:

* Chrome
* Firefox
* Internet Explorer 8+
* Edge

Version
-------

Version: 1.2.4 (2016-08-05)

Legal stuff
-----------

Author: [Frank Boës](http://3960.org)

Copyright & license: See LICENSE.txt
