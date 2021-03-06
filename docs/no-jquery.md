Ways to work without jQuery
===========================
Your basic operations in Javascript:

* Querying for elements and traversing the DOM
* Attaching events to elements
* Reading and changing attributes of elements (e.g. classes or `data`-attributes)
* AJAX calls

For effects just alter classes of elements and use CSS3 animations.

Your ressources for building stuff are:

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API) for exact API references.
* [Can I Use](http://caniuse.com/) for checking browser compatibility.

Keep in mind that most advanced stuff only works properly in Chrome, Firefox, Safari and IE9+. For older browsers you will find some polyfills in [js-legacy.js](../src/js-legacy.js).

How to do stuff
---------------------
 
Patrick Kunka summed up his experience in [A Year Without jQuery](http://blog.wearecolony.com/a-year-without-jquery/). You may also want to take a look at [YOU MIGHT NOT NEED JQUERY](http://youmightnotneedjquery.com/).

### Querying for elements

* [`Document.getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
* [`Document.getElementsByTagName()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName)
* [`Document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) and [`Document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) which is [widely supported](http://caniuse.com/#feat=queryselector)
* [`Element.matches()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches) which is [not widely supported](http://caniuse.com/#feat=matchesselector)
* [`Element.closest()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest) which is [not widely supported](http://caniuse.com/#feat=element-closest)

### Altering attributes:

* [`Element.hasAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute)
* [`Element.getAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)
* [`Element.setAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
* [`Element.removeAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute)
* [`Element.classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) for altering `class` attributes, which is [not supported in <= IE9](http://caniuse.com/#feat=classlist)

### Event handling

* [`EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
* [`EventTarget.removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

### Cookie- & request-handling

* [Cookies](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)

### Other stuff

* [Parsing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) & [stringifying JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
* …and extensions of native protoypes in [js-toolshed.js](../src/js-toolshed.js).

How to build stuff
------------------

1. Add `use strict` to activate [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode). This will make your browser mark common mistakes as errors, so they are easier to find.
2. Use [ESLint](http://eslint.org/) to keep your programming clean.
3. Use `uglify` to compress your code for production environments.
