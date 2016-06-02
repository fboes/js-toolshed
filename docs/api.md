## Classes

<dl>
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
<dt><a href="#Document">Document</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#DateSetFromIsoString">DateSetFromIsoString(dateString)</a> ⇒ <code>Date</code></dt>
<dd><p>Convert given UTC string into Date object</p>
</dd>
</dl>

<a name="String"></a>

## String
**Kind**: global class  

* [String](#String)
    * [.trim()](#String+trim) ⇒ <code>this</code>
    * [.sprintf(args)](#String+sprintf) ⇒ <code>this</code>
    * [.fromId()](#String+fromId) ⇒ <code>this</code>
    * [.toId()](#String+toId) ⇒ <code>this</code>
    * [.htmlEncode()](#String+htmlEncode) ⇒ <code>this</code>
    * [.paramsToObject()](#String+paramsToObject) ⇒ <code>[Object](#Object)</code>

<a name="String+trim"></a>

### string.trim() ⇒ <code>this</code>
Remove whitespaces around string

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>this</code> - [description]  
<a name="String+sprintf"></a>

### string.sprintf(args) ⇒ <code>this</code>
Replace `%s` in given string with parameters

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>this</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>scalar</code> | One or morge arguments |

<a name="String+fromId"></a>

### string.fromId() ⇒ <code>this</code>
Convert `#string` into `string`

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>this</code> - [description]  
<a name="String+toId"></a>

### string.toId() ⇒ <code>this</code>
Convert `#string` into `string`

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>this</code> - [description]  
<a name="String+htmlEncode"></a>

### string.htmlEncode() ⇒ <code>this</code>
Convert string to XML / HTML safe string

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>this</code> - [description]  
<a name="String+paramsToObject"></a>

### string.paramsToObject() ⇒ <code>[Object](#Object)</code>
Convert String like '?a=b&c=d' into `{a:'b',c:'d'}`. See Window.location.getParameters() for implementation.

**Kind**: instance method of <code>[String](#String)</code>  
**Returns**: <code>[Object](#Object)</code> - [description]  
<a name="Number"></a>

## Number
**Kind**: global class  
<a name="Number+toFixedString"></a>

### number.toFixedString(digits) ⇒ <code>string</code>
Convert a number to a string representation with a fixed with, e.g. by padding it with `0`

**Kind**: instance method of <code>[Number](#Number)</code>  
**Returns**: <code>string</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| digits | <code>integer</code> | number of characters |

<a name="Math"></a>

## Math
**Kind**: global class  

* [Math](#Math)
    * [.roundPrecision(val, precision)](#Math.roundPrecision) ⇒ <code>number</code>
    * [.randomInt(min, max)](#Math.randomInt) ⇒ <code>integer</code>

<a name="Math.roundPrecision"></a>

### Math.roundPrecision(val, precision) ⇒ <code>number</code>
Round number to a given number of decimals

**Kind**: static method of <code>[Math](#Math)</code>  
**Returns**: <code>number</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>number</code> | [description] |
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

### array.pushOnNotEmpty(element) ⇒ <code>this</code>
Push element only to array if element is not empty

**Kind**: instance method of <code>[Array](#Array)</code>  
**Returns**: <code>this</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>mixed</code> | [description] |

<a name="Object"></a>

## Object
**Kind**: global class  
<a name="Object+forEachProperty"></a>

### object.forEachProperty(fn) ⇒ <code>this</code>
Run function on all properties of an object.

**Kind**: instance method of <code>[Object](#Object)</code>  
**Returns**: <code>this</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | function(value,key,object){}, `this` being the current object |

<a name="Element"></a>

## Element
**Kind**: global class  

* [Element](#Element)
    * [.closest()](#Element+closest) ⇒ <code>this</code>
    * [.hasClassName(className)](#Element+hasClassName) ⇒ <code>Boolean</code>
    * [.addClassName(className)](#Element+addClassName) ⇒ <code>this</code>
    * [.removeClassName(className)](#Element+removeClassName) ⇒ <code>this</code>
    * [.toggleClassName(className)](#Element+toggleClassName) ⇒ <code>this</code>

<a name="Element+closest"></a>

### element.closest() ⇒ <code>this</code>
Find closest match to given selector, starting at current element and traversing up

**Kind**: instance method of <code>[Element](#Element)</code>  
**Returns**: <code>this</code> - [description]  
<a name="Element+hasClassName"></a>

### element.hasClassName(className) ⇒ <code>Boolean</code>
Check if element has a given classname in its class attribute

**Kind**: instance method of <code>[Element](#Element)</code>  
**Returns**: <code>Boolean</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| className | <code>string</code> | [description] |

<a name="Element+addClassName"></a>

### element.addClassName(className) ⇒ <code>this</code>
Add classname to given element

**Kind**: instance method of <code>[Element](#Element)</code>  
**Returns**: <code>this</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| className | <code>string</code> | [description] |

<a name="Element+removeClassName"></a>

### element.removeClassName(className) ⇒ <code>this</code>
Remove classname from given element

**Kind**: instance method of <code>[Element](#Element)</code>  
**Returns**: <code>this</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| className | <code>string</code> | [description] |

<a name="Element+toggleClassName"></a>

### element.toggleClassName(className) ⇒ <code>this</code>
Remove classname from element if present, add classname if not present

**Kind**: instance method of <code>[Element](#Element)</code>  
**Returns**: <code>this</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| className | <code>string</code> | [description] |

<a name="NodeList"></a>

## NodeList
**Kind**: global class  
<a name="NodeList+forEachNode"></a>

### nodeList.forEachNode(fn) ⇒ <code>this</code>
Run function with all Nodes contained in a NodeList.

**Kind**: instance method of <code>[NodeList](#NodeList)</code>  
**Returns**: <code>this</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | function(currentNode,index,NodeList){}, `this` being currentNode |

<a name="Document"></a>

## Document
**Kind**: global class  
<a name="Document+ready"></a>

### document.ready(fn) ⇒ <code>this</code>
Execute function after DOM is ready; hattip to http://youmightnotneedjquery.com/

**Kind**: instance method of <code>[Document](#Document)</code>  
**Returns**: <code>this</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | [description] |

<a name="DateSetFromIsoString"></a>

## DateSetFromIsoString(dateString) ⇒ <code>Date</code>
Convert given UTC string into Date object

**Kind**: global function  
**Returns**: <code>Date</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| dateString | <code>string</code> | like '2015-11-06 13:21:00+02:00' |

