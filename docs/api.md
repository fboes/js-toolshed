## Classes

<dl>
<dt><a href="#Element">Element</a></dt>
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
<dt><a href="#NodeList">NodeList</a></dt>
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
    * [.matches(selector)](#Element+matches) ⇒ <code>bool</code>
    * [.closest()](#Element+closest) ⇒ <code>[Element](#Element)</code>
    * [.hasClassName(className)](#Element+hasClassName) ⇒ <code>Boolean</code>
    * [.addClassName(className)](#Element+addClassName) ⇒ <code>[Element](#Element)</code>
    * [.removeClassName(className)](#Element+removeClassName) ⇒ <code>[Element](#Element)</code>
    * [.toggleClassName(className, force)](#Element+toggleClassName) ⇒ <code>[Element](#Element)</code>

<a name="Element+matches"></a>

### element.matches(selector) ⇒ <code>bool</code>
The Element.matches() method returns true if the element would be selected by the specified selector string; otherwise, returns false. Already available in Chrome 34, FF 34, Safari 7.

**Kind**: instance method of <code>[Element](#Element)</code>  
**Returns**: <code>bool</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>string</code> | [description] |

<a name="Element+closest"></a>

### element.closest() ⇒ <code>[Element](#Element)</code>
Find closest match to given selector, starting at current element and traversing up. Already available in Chrome 41, FF 35, Safari 9.

**Kind**: instance method of <code>[Element](#Element)</code>  
**Returns**: <code>[Element](#Element)</code> - [description]  
<a name="Element+hasClassName"></a>

### element.hasClassName(className) ⇒ <code>Boolean</code>
Check if element has a given classname in its class attribute

**Kind**: instance method of <code>[Element](#Element)</code>  
**Returns**: <code>Boolean</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| className | <code>[String](#String)</code> | [description] |

<a name="Element+addClassName"></a>

### element.addClassName(className) ⇒ <code>[Element](#Element)</code>
Add classname to given element

**Kind**: instance method of <code>[Element](#Element)</code>  
**Returns**: <code>[Element](#Element)</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| className | <code>[String](#String)</code> | [description] |

<a name="Element+removeClassName"></a>

### element.removeClassName(className) ⇒ <code>[Element](#Element)</code>
Remove classname from given element

**Kind**: instance method of <code>[Element](#Element)</code>  
**Returns**: <code>[Element](#Element)</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| className | <code>[String](#String)</code> | [description] |

<a name="Element+toggleClassName"></a>

### element.toggleClassName(className, force) ⇒ <code>[Element](#Element)</code>
Remove classname from element if present, add classname if not present. If second parameter is set to `true`, the class will be always added, if it is set to `false` it will be always removed.

**Kind**: instance method of <code>[Element](#Element)</code>  
**Returns**: <code>[Element](#Element)</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| className | <code>[String](#String)</code> | [description] |
| force | <code>bool</code> | Optional. If this is present, it will set the class if `true`, else remove that class. |

<a name="EventTarget"></a>

## EventTarget
**Kind**: global class  

* [EventTarget](#EventTarget)
    * [.addEventListener(type, fn)](#EventTarget+addEventListener) ⇒ <code>[EventTarget](#EventTarget)</code>
    * [.removeEventListener(type, fn)](#EventTarget+removeEventListener) ⇒ <code>[EventTarget](#EventTarget)</code>
    * [.addBubbledEventListener(type, selector, fn)](#EventTarget+addBubbledEventListener)

<a name="EventTarget+addEventListener"></a>

### eventTarget.addEventListener(type, fn) ⇒ <code>[EventTarget](#EventTarget)</code>
Add an event. Already available in Chrome 1, Firefox 1, IE 9, Safari 1.

**Kind**: instance method of <code>[EventTarget](#EventTarget)</code>  
**Returns**: <code>[EventTarget](#EventTarget)</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | [description] |
| fn | <code>function</code> | [description] |

<a name="EventTarget+removeEventListener"></a>

### eventTarget.removeEventListener(type, fn) ⇒ <code>[EventTarget](#EventTarget)</code>
Remove an event. Already available in Chrome 1, Firefox 1, IE 9, Safari 1.

**Kind**: instance method of <code>[EventTarget](#EventTarget)</code>  
**Returns**: <code>[EventTarget](#EventTarget)</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | [description] |
| fn | <code>function</code> | [description] |

<a name="EventTarget+addBubbledEventListener"></a>

### eventTarget.addBubbledEventListener(type, selector, fn)
Add event listener to an element, but only react to special sub elements of this element. Useful for having one single event listener for multiple elements.

**Kind**: instance method of <code>[EventTarget](#EventTarget)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Event type to listen for. E.g. `click`. |
| selector | <code>string</code> | Selector like in `.matches()`. E.g. `.button`. |
| fn | <code>function</code> | function(e), where `this` is the filtered element, and `e` the event object |

<a name="String"></a>

## String
**Kind**: global class  

* [String](#String)
    * [.trim()](#String+trim) ⇒ <code>[String](#String)</code>
    * [.sprintf(args)](#String+sprintf) ⇒ <code>[String](#String)</code>
    * [.fromId()](#String+fromId) ⇒ <code>[String](#String)</code>
    * [.toId()](#String+toId) ⇒ <code>[String](#String)</code>
    * [.htmlEncode()](#String+htmlEncode) ⇒ <code>[String](#String)</code>
    * [.paramsToObject(splitter)](#String+paramsToObject) ⇒ <code>[Object](#Object)</code>

<a name="String+trim"></a>

### string.trim() ⇒ <code>[String](#String)</code>
Remove whitespaces around string. Already available in Chrome, FF 3.5, IE 9, Safari 5.

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - [description]  
<a name="String+sprintf"></a>

### string.sprintf(args) ⇒ <code>[String](#String)</code>
Replace `%s`, `%d`, `%f` in given string with parameters

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>scalar</code> | One or morge arguments |

<a name="String+fromId"></a>

### string.fromId() ⇒ <code>[String](#String)</code>
Convert `#string` into `string`

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - [description]  
<a name="String+toId"></a>

### string.toId() ⇒ <code>[String](#String)</code>
Convert `#string` into `string`

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - [description]  
<a name="String+htmlEncode"></a>

### string.htmlEncode() ⇒ <code>[String](#String)</code>
Convert string to XML / HTML safe string

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>[String](#String)</code> - [description]  
<a name="String+paramsToObject"></a>

### string.paramsToObject(splitter) ⇒ <code>[Object](#Object)</code>
Convert String like '?a=b&c=d' into `{a:'b',c:'d'}`. See Window.location.getParameters() for implementation.

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>[Object](#Object)</code> - E.g. `{a:'b',c:'d'}`  

| Param | Type | Description |
| --- | --- | --- |
| splitter | <code>RegExp</code> | term to split key/value-pairs |

<a name="Number"></a>

## Number
**Kind**: global class  
<a name="Number+toFixedString"></a>

### number.toFixedString(digits) ⇒ <code>[String](#String)</code>
Convert a number to a string representation with a fixed width, e.g. by padding it with `0`. See also `.toFixed()` for padding the deicmals of a given number.

**Kind**: instance method of <code>[Number](#Number)</code>  
**Returns**: <code>[String](#String)</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| digits | <code>integer</code> | number of characters |

<a name="Math"></a>

## Math
**Kind**: global class  

* [Math](#Math)
    * [.roundPrecision(val, precision)](#Math.roundPrecision) ⇒ <code>[Number](#Number)</code>
    * [.randomInt(min, max)](#Math.randomInt) ⇒ <code>integer</code>

<a name="Math.roundPrecision"></a>

### Math.roundPrecision(val, precision) ⇒ <code>[Number](#Number)</code>
Round number to a given number of decimals

**Kind**: static method of <code>[Math](#Math)</code>  
**Returns**: <code>[Number](#Number)</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>[Number](#Number)</code> | [description] |
| precision | <code>integer</code> | [description] |

<a name="Math.randomInt"></a>

### Math.randomInt(min, max) ⇒ <code>integer</code>
Get a random number between min (inclusive) and max (inclusive)

**Kind**: static method of <code>[Math](#Math)</code>  
**Returns**: <code>integer</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>integer</code> | [description] |
| max | <code>integer</code> | [description] |

<a name="Array"></a>

## Array
**Kind**: global class  
<a name="Array+pushOnNotEmpty"></a>

### array.pushOnNotEmpty(element) ⇒ <code>[Array](#Array)</code>
Push element only to array if element is not empty

**Kind**: instance method of <code>[Array](#Array)</code>  
**Returns**: <code>[Array](#Array)</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>mixed</code> | [description] |

<a name="Object"></a>

## Object
**Kind**: global class  
<a name="Object+forEachProperty"></a>

### object.forEachProperty(fn) ⇒ <code>[Object](#Object)</code>
Run function on all properties of an object.

**Kind**: instance method of <code>[Object](#Object)</code>  
**Returns**: <code>[Object](#Object)</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | function(value,key,object){}, `this` being the current object |

<a name="Element"></a>

## Element
**Kind**: global class  

* [Element](#Element)
    * [.matches(selector)](#Element+matches) ⇒ <code>bool</code>
    * [.closest()](#Element+closest) ⇒ <code>[Element](#Element)</code>
    * [.hasClassName(className)](#Element+hasClassName) ⇒ <code>Boolean</code>
    * [.addClassName(className)](#Element+addClassName) ⇒ <code>[Element](#Element)</code>
    * [.removeClassName(className)](#Element+removeClassName) ⇒ <code>[Element](#Element)</code>
    * [.toggleClassName(className, force)](#Element+toggleClassName) ⇒ <code>[Element](#Element)</code>

<a name="Element+matches"></a>

### element.matches(selector) ⇒ <code>bool</code>
The Element.matches() method returns true if the element would be selected by the specified selector string; otherwise, returns false. Already available in Chrome 34, FF 34, Safari 7.

**Kind**: instance method of <code>[Element](#Element)</code>  
**Returns**: <code>bool</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>string</code> | [description] |

<a name="Element+closest"></a>

### element.closest() ⇒ <code>[Element](#Element)</code>
Find closest match to given selector, starting at current element and traversing up. Already available in Chrome 41, FF 35, Safari 9.

**Kind**: instance method of <code>[Element](#Element)</code>  
**Returns**: <code>[Element](#Element)</code> - [description]  
<a name="Element+hasClassName"></a>

### element.hasClassName(className) ⇒ <code>Boolean</code>
Check if element has a given classname in its class attribute

**Kind**: instance method of <code>[Element](#Element)</code>  
**Returns**: <code>Boolean</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| className | <code>[String](#String)</code> | [description] |

<a name="Element+addClassName"></a>

### element.addClassName(className) ⇒ <code>[Element](#Element)</code>
Add classname to given element

**Kind**: instance method of <code>[Element](#Element)</code>  
**Returns**: <code>[Element](#Element)</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| className | <code>[String](#String)</code> | [description] |

<a name="Element+removeClassName"></a>

### element.removeClassName(className) ⇒ <code>[Element](#Element)</code>
Remove classname from given element

**Kind**: instance method of <code>[Element](#Element)</code>  
**Returns**: <code>[Element](#Element)</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| className | <code>[String](#String)</code> | [description] |

<a name="Element+toggleClassName"></a>

### element.toggleClassName(className, force) ⇒ <code>[Element](#Element)</code>
Remove classname from element if present, add classname if not present. If second parameter is set to `true`, the class will be always added, if it is set to `false` it will be always removed.

**Kind**: instance method of <code>[Element](#Element)</code>  
**Returns**: <code>[Element](#Element)</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| className | <code>[String](#String)</code> | [description] |
| force | <code>bool</code> | Optional. If this is present, it will set the class if `true`, else remove that class. |

<a name="NodeList"></a>

## NodeList
**Kind**: global class  
<a name="NodeList+forEachNode"></a>

### nodeList.forEachNode(fn) ⇒ <code>[NodeList](#NodeList)</code>
Run function with all Nodes contained in a NodeList.

**Kind**: instance method of <code>[NodeList](#NodeList)</code>  
**Returns**: <code>[NodeList](#NodeList)</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | function(currentNode,index,NodeList){}, `this` being currentNode |

<a name="EventTarget"></a>

## EventTarget
**Kind**: global class  

* [EventTarget](#EventTarget)
    * [.addEventListener(type, fn)](#EventTarget+addEventListener) ⇒ <code>[EventTarget](#EventTarget)</code>
    * [.removeEventListener(type, fn)](#EventTarget+removeEventListener) ⇒ <code>[EventTarget](#EventTarget)</code>
    * [.addBubbledEventListener(type, selector, fn)](#EventTarget+addBubbledEventListener)

<a name="EventTarget+addEventListener"></a>

### eventTarget.addEventListener(type, fn) ⇒ <code>[EventTarget](#EventTarget)</code>
Add an event. Already available in Chrome 1, Firefox 1, IE 9, Safari 1.

**Kind**: instance method of <code>[EventTarget](#EventTarget)</code>  
**Returns**: <code>[EventTarget](#EventTarget)</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | [description] |
| fn | <code>function</code> | [description] |

<a name="EventTarget+removeEventListener"></a>

### eventTarget.removeEventListener(type, fn) ⇒ <code>[EventTarget](#EventTarget)</code>
Remove an event. Already available in Chrome 1, Firefox 1, IE 9, Safari 1.

**Kind**: instance method of <code>[EventTarget](#EventTarget)</code>  
**Returns**: <code>[EventTarget](#EventTarget)</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | [description] |
| fn | <code>function</code> | [description] |

<a name="EventTarget+addBubbledEventListener"></a>

### eventTarget.addBubbledEventListener(type, selector, fn)
Add event listener to an element, but only react to special sub elements of this element. Useful for having one single event listener for multiple elements.

**Kind**: instance method of <code>[EventTarget](#EventTarget)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Event type to listen for. E.g. `click`. |
| selector | <code>string</code> | Selector like in `.matches()`. E.g. `.button`. |
| fn | <code>function</code> | function(e), where `this` is the filtered element, and `e` the event object |

<a name="Document"></a>

## Document
**Kind**: global class  

* [Document](#Document)
    * [.ready(fn)](#Document+ready) ⇒ <code>[Document](#Document)</code>
    * [.getCookieObject()](#Document+getCookieObject) ⇒ <code>[Object](#Object)</code>

<a name="Document+ready"></a>

### document.ready(fn) ⇒ <code>[Document](#Document)</code>
Execute function after DOM is ready; hattip to http://youmightnotneedjquery.com/

**Kind**: instance method of <code>[Document](#Document)</code>  
**Returns**: <code>[Document](#Document)</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | [description] |

<a name="Document+getCookieObject"></a>

### document.getCookieObject() ⇒ <code>[Object](#Object)</code>
Get `document.cookie` as an object with `key=value`. Refer to String.paramsToObject().

**Kind**: instance method of <code>[Document](#Document)</code>  
**Returns**: <code>[Object](#Object)</code> - [description]  
<a name="DateSetFromIsoString"></a>

## DateSetFromIsoString(dateString) ⇒ <code>Date</code>
Convert given UTC string into Date object

**Kind**: global function  
**Returns**: <code>Date</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| dateString | <code>[String](#String)</code> | like '2015-11-06 13:21:00+02:00' |

