js-toolshed
===========

[![devDependency Status](https://david-dm.org/fboes/js-toolshed/dev-status.svg)](https://david-dm.org/fboes/js-toolshed#info=devDependencies)

Javascript Toolshed adds some basic methods to already existing JS prototypes / objects.

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
* `Elemente` gets methods for class- and event-manipulation like in jQuery.

There is also [a small polyfill](src/js-legacy.js) to give older browsers some new Javascript methods.

* There is a stub `console` for old browsers.

Version
-------

Version: 1.2.2 (2016-06-02)

Legal stuff
-----------

Author: [Frank Boës](http://3960.org)

Copyright & license: See LICENSE.txt
