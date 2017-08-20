## Classes

<dl>
<dt><a href="#Element">Element</a></dt>
<dd></dd>
<dt><a href="#NodeList">NodeList</a></dt>
<dd></dd>
<dt><a href="#EventTarget">EventTarget</a></dt>
<dd></dd>
<dt><a href="#String">String</a></dt>
<dd></dd>
<dt><a href="#Number">Number</a></dt>
<dd></dd>
<dt><a href="#Math">Math</a></dt>
<dd></dd>
<dt><a href="#Array">Array</a></dt>
<dd></dd>
<dt><a href="#Object">Object</a></dt>
<dd></dd>
<dt><a href="#Element">Element</a></dt>
<dd></dd>
<dt><a href="#EventTarget">EventTarget</a></dt>
<dd></dd>
<dt><a href="#Document">Document</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#DateSetFromIsoString">DateSetFromIsoString(dateString)</a> ⇒ <code>Date</code></dt>
<dd><p>Convert given UTC string into Date object</p>
</dd>
</dl>

<a name="Element"></a>

## Element
**Kind**: global class  

* [Element](#Element)
    * [.matches(selector)](#Element+matches) ⇒ <code>Boolean</code>
    * [.closest()](#Element+closest) ⇒ [<code>Element</code>](#Element)
    * [.hasClassName(className)](#Element+hasClassName) ⇒ <code>Boolean</code>
    * [.addClassName(className)](#Element+addClassName) ⇒ [<code>Element</code>](#Element)
    * [.removeClassName(className)](#Element+removeClassName) ⇒ [<code>Element</code>](#Element)
    * [.toggleClassName(className, force)](#Element+toggleClassName) ⇒ [<code>Element</code>](#Element)

<a name="Element+matches"></a>

### element.matches(selector) ⇒ <code>Boolean</code>
The Element.matches() method returns true if the element would be selected by the specified selector string; otherwise, returns false. Already available in Chrome 34, FF 34, Safari 7.

**Kind**: instance method of [<code>Element</code>](#Element)  
**Returns**: <code>Boolean</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| selector | [<code>String</code>](#String) | [description] |

<a name="Element+closest"></a>

### element.closest() ⇒ [<code>Element</code>](#Element)
Find closest match to given selector, starting at current element and traversing up. Already available in Chrome 41, FF 35, Safari 9.

**Kind**: instance method of [<code>Element</code>](#Element)  
**Returns**: [<code>Element</code>](#Element) - [description]  
<a name="Element+hasClassName"></a>

### element.hasClassName(className) ⇒ <code>Boolean</code>
Check if element has a given classname in its class attribute

**Kind**: instance method of [<code>Element</code>](#Element)  
**Returns**: <code>Boolean</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| className | [<code>String</code>](#String) | [description] |

<a name="Element+addClassName"></a>

### element.addClassName(className) ⇒ [<code>Element</code>](#Element)
Add classname to given element

**Kind**: instance method of [<code>Element</code>](#Element)  
**Returns**: [<code>Element</code>](#Element) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| className | [<code>String</code>](#String) | [description] |

<a name="Element+removeClassName"></a>

### element.removeClassName(className) ⇒ [<code>Element</code>](#Element)
Remove classname from given element

**Kind**: instance method of [<code>Element</code>](#Element)  
**Returns**: [<code>Element</code>](#Element) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| className | [<code>String</code>](#String) | [description] |

<a name="Element+toggleClassName"></a>

### element.toggleClassName(className, force) ⇒ [<code>Element</code>](#Element)
Remove classname from element if present, add classname if not present. If second parameter is set to `true`, the class will be always added, if it is set to `false` it will be always removed.

**Kind**: instance method of [<code>Element</code>](#Element)  
**Returns**: [<code>Element</code>](#Element) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| className | [<code>String</code>](#String) | [description] |
| force | <code>Boolean</code> | Optional. If this is present, it will set the class if `true`, else remove that class. |

<a name="NodeList"></a>

## NodeList
**Kind**: global class  
<a name="NodeList+forEach"></a>

### nodeList.forEach(fn) ⇒ [<code>NodeList</code>](#NodeList)
[forEach description]

**Kind**: instance method of [<code>NodeList</code>](#NodeList)  
**Returns**: [<code>NodeList</code>](#NodeList) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | function(currentNode,index,NodeList){}, `this` being currentNode |

<a name="EventTarget"></a>

## EventTarget
**Kind**: global class  

* [EventTarget](#EventTarget)
    * [.addEventListener(type, fn)](#EventTarget+addEventListener) ⇒ [<code>EventTarget</code>](#EventTarget)
    * [.removeEventListener(type, fn)](#EventTarget+removeEventListener) ⇒ [<code>EventTarget</code>](#EventTarget)
    * [.addBubbledEventListener(type, selector, useCapture, fn)](#EventTarget+addBubbledEventListener)

<a name="EventTarget+addEventListener"></a>

### eventTarget.addEventListener(type, fn) ⇒ [<code>EventTarget</code>](#EventTarget)
Add an event. Already available in Chrome 1, Firefox 1, IE 9, Safari 1.

**Kind**: instance method of [<code>EventTarget</code>](#EventTarget)  
**Returns**: [<code>EventTarget</code>](#EventTarget) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| type | [<code>String</code>](#String) | [description] |
| fn | <code>function</code> | [description] |

<a name="EventTarget+removeEventListener"></a>

### eventTarget.removeEventListener(type, fn) ⇒ [<code>EventTarget</code>](#EventTarget)
Remove an event. Already available in Chrome 1, Firefox 1, IE 9, Safari 1.

**Kind**: instance method of [<code>EventTarget</code>](#EventTarget)  
**Returns**: [<code>EventTarget</code>](#EventTarget) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| type | [<code>String</code>](#String) | [description] |
| fn | <code>function</code> | [description] |

<a name="EventTarget+addBubbledEventListener"></a>

### eventTarget.addBubbledEventListener(type, selector, useCapture, fn)
Add event listener to an element, but only react to special sub elements of this element. Useful for having one single event listener for multiple elements.

**Kind**: instance method of [<code>EventTarget</code>](#EventTarget)  

| Param | Type | Description |
| --- | --- | --- |
| type | [<code>String</code>](#String) | Event type to listen for. E.g. `click`. |
| selector | [<code>String</code>](#String) | Selector like in `.matches()`. E.g. `.button`. |
| useCapture | <code>Boolean</code> | Like in `addEventListener()` |
| fn | <code>function</code> | function(e), where `this` is the filtered element, and `e` the event object |

<a name="String"></a>

## String
**Kind**: global class  

* [String](#String)
    * [.trim()](#String+trim) ⇒ [<code>String</code>](#String)
    * [.sprintf(args)](#String+sprintf) ⇒ [<code>String</code>](#String)
    * [.fromId()](#String+fromId) ⇒ [<code>String</code>](#String)
    * [.asciify()](#String+asciify) ⇒ [<code>String</code>](#String)
    * [.toId()](#String+toId) ⇒ [<code>String</code>](#String)
    * [.htmlEncode()](#String+htmlEncode) ⇒ [<code>String</code>](#String)
    * [.paramsToObject(splitter)](#String+paramsToObject) ⇒ [<code>Object</code>](#Object)

<a name="String+trim"></a>

### string.trim() ⇒ [<code>String</code>](#String)
Remove whitespaces around string. Already available in Chrome, FF 3.5, IE 9, Safari 5.

**Kind**: instance method of [<code>String</code>](#String)  
**Returns**: [<code>String</code>](#String) - [description]  
<a name="String+sprintf"></a>

### string.sprintf(args) ⇒ [<code>String</code>](#String)
Replace `%s`, `%d`, `%f` in given string with parameters.

**Kind**: instance method of [<code>String</code>](#String)  
**Returns**: [<code>String</code>](#String) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>scalar</code> | One or morge arguments |

<a name="String+fromId"></a>

### string.fromId() ⇒ [<code>String</code>](#String)
Convert `#string` into `string`.

**Kind**: instance method of [<code>String</code>](#String)  
**Returns**: [<code>String</code>](#String) - [description]  
<a name="String+asciify"></a>

### string.asciify() ⇒ [<code>String</code>](#String)
Remove any special characters from string and convert into lowercase.

**Kind**: instance method of [<code>String</code>](#String)  
**Returns**: [<code>String</code>](#String) - [description]  
<a name="String+toId"></a>

### string.toId() ⇒ [<code>String</code>](#String)
Convert `String` into `#string`.

**Kind**: instance method of [<code>String</code>](#String)  
**Returns**: [<code>String</code>](#String) - [description]  
<a name="String+htmlEncode"></a>

### string.htmlEncode() ⇒ [<code>String</code>](#String)
Convert string to XML / HTML safe string.

**Kind**: instance method of [<code>String</code>](#String)  
**Returns**: [<code>String</code>](#String) - [description]  
<a name="String+paramsToObject"></a>

### string.paramsToObject(splitter) ⇒ [<code>Object</code>](#Object)
Convert String like '?a=b&c=d' into `{a:'b',c:'d'}`. See Window.location.getParameters() for implementation.

**Kind**: instance method of [<code>String</code>](#String)  
**Returns**: [<code>Object</code>](#Object) - E.g. `{a:'b',c:'d'}`  

| Param | Type | Description |
| --- | --- | --- |
| splitter | <code>RegExp</code> | term to split key/value-pairs |

<a name="Number"></a>

## Number
**Kind**: global class  
<a name="Number+toFixedString"></a>

### number.toFixedString(digits) ⇒ [<code>String</code>](#String)
Convert a number to a string representation with a fixed width, e.g. by padding it with `0`. See also `.toFixed()` for padding the decimals of a given number.

**Kind**: instance method of [<code>Number</code>](#Number)  
**Returns**: [<code>String</code>](#String) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| digits | <code>integer</code> | number of characters |

<a name="Math"></a>

## Math
**Kind**: global class  

* [Math](#Math)
    * [.roundPrecision(val, precision)](#Math.roundPrecision) ⇒ [<code>Number</code>](#Number)
    * [.randomInt(min, max)](#Math.randomInt) ⇒ <code>integer</code>

<a name="Math.roundPrecision"></a>

### Math.roundPrecision(val, precision) ⇒ [<code>Number</code>](#Number)
Round number to a given number of decimals.

**Kind**: static method of [<code>Math</code>](#Math)  
**Returns**: [<code>Number</code>](#Number) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| val | [<code>Number</code>](#Number) | [description] |
| precision | <code>integer</code> | [description] |

<a name="Math.randomInt"></a>

### Math.randomInt(min, max) ⇒ <code>integer</code>
Get a random number between min (inclusive) and max (inclusive).

**Kind**: static method of [<code>Math</code>](#Math)  
**Returns**: <code>integer</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>integer</code> | [description] |
| max | <code>integer</code> | [description] |

<a name="Array"></a>

## Array
**Kind**: global class  
<a name="Array+pushOnNotEmpty"></a>

### array.pushOnNotEmpty(element) ⇒ [<code>Array</code>](#Array)
Push element only to array if element is not empty.

**Kind**: instance method of [<code>Array</code>](#Array)  
**Returns**: [<code>Array</code>](#Array) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>mixed</code> | [description] |

<a name="Object"></a>

## Object
**Kind**: global class  
<a name="Object+forEachProperty"></a>

### object.forEachProperty(fn) ⇒ [<code>Object</code>](#Object)
Run function on all properties of an object.

**Kind**: instance method of [<code>Object</code>](#Object)  
**Returns**: [<code>Object</code>](#Object) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | function(value,key,object){}, `this` being the current object |

<a name="Element"></a>

## Element
**Kind**: global class  

* [Element](#Element)
    * [.matches(selector)](#Element+matches) ⇒ <code>Boolean</code>
    * [.closest()](#Element+closest) ⇒ [<code>Element</code>](#Element)
    * [.hasClassName(className)](#Element+hasClassName) ⇒ <code>Boolean</code>
    * [.addClassName(className)](#Element+addClassName) ⇒ [<code>Element</code>](#Element)
    * [.removeClassName(className)](#Element+removeClassName) ⇒ [<code>Element</code>](#Element)
    * [.toggleClassName(className, force)](#Element+toggleClassName) ⇒ [<code>Element</code>](#Element)

<a name="Element+matches"></a>

### element.matches(selector) ⇒ <code>Boolean</code>
The Element.matches() method returns true if the element would be selected by the specified selector string; otherwise, returns false. Already available in Chrome 34, FF 34, Safari 7.

**Kind**: instance method of [<code>Element</code>](#Element)  
**Returns**: <code>Boolean</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| selector | [<code>String</code>](#String) | [description] |

<a name="Element+closest"></a>

### element.closest() ⇒ [<code>Element</code>](#Element)
Find closest match to given selector, starting at current element and traversing up. Already available in Chrome 41, FF 35, Safari 9.

**Kind**: instance method of [<code>Element</code>](#Element)  
**Returns**: [<code>Element</code>](#Element) - [description]  
<a name="Element+hasClassName"></a>

### element.hasClassName(className) ⇒ <code>Boolean</code>
Check if element has a given classname in its class attribute

**Kind**: instance method of [<code>Element</code>](#Element)  
**Returns**: <code>Boolean</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| className | [<code>String</code>](#String) | [description] |

<a name="Element+addClassName"></a>

### element.addClassName(className) ⇒ [<code>Element</code>](#Element)
Add classname to given element

**Kind**: instance method of [<code>Element</code>](#Element)  
**Returns**: [<code>Element</code>](#Element) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| className | [<code>String</code>](#String) | [description] |

<a name="Element+removeClassName"></a>

### element.removeClassName(className) ⇒ [<code>Element</code>](#Element)
Remove classname from given element

**Kind**: instance method of [<code>Element</code>](#Element)  
**Returns**: [<code>Element</code>](#Element) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| className | [<code>String</code>](#String) | [description] |

<a name="Element+toggleClassName"></a>

### element.toggleClassName(className, force) ⇒ [<code>Element</code>](#Element)
Remove classname from element if present, add classname if not present. If second parameter is set to `true`, the class will be always added, if it is set to `false` it will be always removed.

**Kind**: instance method of [<code>Element</code>](#Element)  
**Returns**: [<code>Element</code>](#Element) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| className | [<code>String</code>](#String) | [description] |
| force | <code>Boolean</code> | Optional. If this is present, it will set the class if `true`, else remove that class. |

<a name="EventTarget"></a>

## EventTarget
**Kind**: global class  

* [EventTarget](#EventTarget)
    * [.addEventListener(type, fn)](#EventTarget+addEventListener) ⇒ [<code>EventTarget</code>](#EventTarget)
    * [.removeEventListener(type, fn)](#EventTarget+removeEventListener) ⇒ [<code>EventTarget</code>](#EventTarget)
    * [.addBubbledEventListener(type, selector, useCapture, fn)](#EventTarget+addBubbledEventListener)

<a name="EventTarget+addEventListener"></a>

### eventTarget.addEventListener(type, fn) ⇒ [<code>EventTarget</code>](#EventTarget)
Add an event. Already available in Chrome 1, Firefox 1, IE 9, Safari 1.

**Kind**: instance method of [<code>EventTarget</code>](#EventTarget)  
**Returns**: [<code>EventTarget</code>](#EventTarget) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| type | [<code>String</code>](#String) | [description] |
| fn | <code>function</code> | [description] |

<a name="EventTarget+removeEventListener"></a>

### eventTarget.removeEventListener(type, fn) ⇒ [<code>EventTarget</code>](#EventTarget)
Remove an event. Already available in Chrome 1, Firefox 1, IE 9, Safari 1.

**Kind**: instance method of [<code>EventTarget</code>](#EventTarget)  
**Returns**: [<code>EventTarget</code>](#EventTarget) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| type | [<code>String</code>](#String) | [description] |
| fn | <code>function</code> | [description] |

<a name="EventTarget+addBubbledEventListener"></a>

### eventTarget.addBubbledEventListener(type, selector, useCapture, fn)
Add event listener to an element, but only react to special sub elements of this element. Useful for having one single event listener for multiple elements.

**Kind**: instance method of [<code>EventTarget</code>](#EventTarget)  

| Param | Type | Description |
| --- | --- | --- |
| type | [<code>String</code>](#String) | Event type to listen for. E.g. `click`. |
| selector | [<code>String</code>](#String) | Selector like in `.matches()`. E.g. `.button`. |
| useCapture | <code>Boolean</code> | Like in `addEventListener()` |
| fn | <code>function</code> | function(e), where `this` is the filtered element, and `e` the event object |

<a name="Document"></a>

## Document
**Kind**: global class  

* [Document](#Document)
    * [.ready(fn)](#Document+ready) ⇒ [<code>Document</code>](#Document)
    * [.getCookieObject()](#Document+getCookieObject) ⇒ [<code>Object</code>](#Object)

<a name="Document+ready"></a>

### document.ready(fn) ⇒ [<code>Document</code>](#Document)
Execute function after DOM is ready; hattip to http://youmightnotneedjquery.com/

**Kind**: instance method of [<code>Document</code>](#Document)  
**Returns**: [<code>Document</code>](#Document) - [description]  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | [description] |

<a name="Document+getCookieObject"></a>

### document.getCookieObject() ⇒ [<code>Object</code>](#Object)
Get `document.cookie` as an object with `key=value`. Refer to String.paramsToObject().

**Kind**: instance method of [<code>Document</code>](#Document)  
**Returns**: [<code>Object</code>](#Object) - [description]  
<a name="DateSetFromIsoString"></a>

## DateSetFromIsoString(dateString) ⇒ <code>Date</code>
Convert given UTC string into Date object

**Kind**: global function  
**Returns**: <code>Date</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| dateString | [<code>String</code>](#String) | like '2015-11-06 13:21:00+02:00' |

