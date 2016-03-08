js-toolshed
===========

Javascript Toolshed adds some basic methods to already existing JS prototypes / objects.

You may also want to take a look at [YOU MIGHT NOT NEED JQUERY](http://youmightnotneedjquery.com/).


Installation
------------

Via [Bower](http://bower.io/): `bower install fboes/js-toolshed`

1. Copy [build/js-toolshed.js](build/js-toolshed.js) to your local JS directory.
2. Load Toolshed via `<script src="js-toolshed.js"></script>`

Documentation
-------------

See the [inline documentation](src/js-toolshed.js) for new methods to use.

* `Math`- & `Number`-methods for rounding and styled output of numbers
* `Array`-methods for smart adding of new values and fast manipulation of values
* `String`-methods
* An improved `Date`-object acting as a parser for ISO-formatted dates
* `Elemente`-methods for class- and event-manipulation
* A stub `console` to remove warnings in old browsers for missing console

There is also [a small polyfill](src/js-legacy.js) to give older browsers some new Javascript methods.


Version
-------

Version: 1.1.0 (2016-03-08)

Legal stuff
-----------

Author: [Frank Boës](http://3960.org)

Copyright & license: See LICENSE.txt
