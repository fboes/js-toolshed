var toolshed = require('../build/js-toolshed');


exports.testStringFunctionality = function(test) {
	'use strict';
	test.expect(2+19+4);

	test.ok(String, 'There is a String.');
	test.strictEqual(String('x'), 'x', 'What is a string?');

	// String.sprintf
	test.strictEqual('x'.sprintf(), 'x', 'sprintf() without any special stuff.');
	test.strictEqual('x'.sprintf(), 'x', 'sprintf() without any special stuff.');
	test.strictEqual('x %s y'.sprintf(1), 'x 1 y', 'sprintf() with special stuff.');

	// String.fromId
	test.strictEqual('x'.fromId(), 'x', 'fromId() without any special stuff.');
	test.strictEqual('#x'.fromId(), 'x', 'fromId() doing it\'s magic.');
	test.strictEqual('x#'.fromId(), 'x#', 'fromId() not doing it\'s magic.');

	// String.toId
	test.strictEqual('x'.toId(), '#x', 'toId() doing it\'s stuff.');
	test.strictEqual('X'.toId(), '#x', 'Lower-casing');
	test.strictEqual('X Y'.toId(), '#x-y', 'Lower-casing');
	test.strictEqual('1 X Y'.toId(), '#id1-x-y', 'Lower-casing');
	test.strictEqual('üöä'.toId(), '#id---', 'Lower-casing');

	// String.htmlEncode
	test.strictEqual('x'.htmlEncode(), 'x', 'htmlEncode() without any special stuff.');
	test.strictEqual('<a href="#test">Test</a>'.htmlEncode(), '&lt;a href=&quot;#test&quot;&gt;Test&lt;/a&gt;', 'htmlEncode() doing some encoding.');

	// String.paramsToObject
	var t;
	t = '?a=b&c=d'.paramsToObject();
	test.strictEqual(t.a, 'b', 'Reading parameter.');
	test.strictEqual(t.c, 'd', 'Reading parameter.');

	t = '?i=main&mode=front&sid=de8d49b78a85a322c4155015fdce22c4&enc=+Hello%20&empty'.paramsToObject();
	test.strictEqual(t.i, 'main', 'Reading parameter.');
	test.strictEqual(t.mode, 'front', 'Reading parameter.');
	test.strictEqual(t.enc, '+Hello ', 'Reading parameter.');
	test.strictEqual(t.empty, true, 'Reading parameter.');

	t = '_octo=GH1.1.yyy.xxx; _gat=1; _ga=GA1.2.yyy.xxx; tz=Europe%2FBerlin'.paramsToObject(/\;\s?/);
	test.strictEqual(t._octo, 'GH1.1.yyy.xxx', 'Reading parameter.');
	test.strictEqual(t._gat, '1', 'Reading parameter.');
	test.strictEqual(t._ga, 'GA1.2.yyy.xxx', 'Reading parameter.');
	test.strictEqual(t.tz, 'Europe/Berlin', 'Reading parameter.');

	test.done();
};

exports.testNumberFunctionality = function(test) {
	'use strict';
	test.expect(2+10);

	test.ok(Number, 'There is a Number.');
	test.strictEqual(Number(1), 1, 'What is a Number?');

	// Number.toFixedString
	test.strictEqual(Number(1).toFixedString(), '1', 'toFixedString fixing a 1');
	test.strictEqual(Number(1).toFixedString(2), '01', 'toFixedString fixing a 1');
	test.strictEqual(Number(1).toFixedString(3), '001', 'toFixedString fixing a 1');
	test.strictEqual(Number(99).toFixedString(3), '099', 'toFixedString fixing a 1');
	test.strictEqual(Number(1.1).toFixedString(3), '001', 'toFixedString fixing a 1');
	test.strictEqual(Number(1.1).toFixedString(3,1), '001.1', 'toFixedString fixing a 1');
	test.strictEqual(Number(1).toFixedString(3,1), '001.0', 'toFixedString fixing a 1');
	test.strictEqual(Number(1).toFixedString(3,2), '001.00', 'toFixedString fixing a 1');
	test.strictEqual(Number(-2).toFixedString(3), '-002', 'toFixedString fixing a 1');
	test.strictEqual(Number(0).toFixedString(3), '000', 'toFixedString fixing a 1');

	test.done();
};

exports.testMathFunctionality = function(test) {
	'use strict';
	test.expect(1+10+2);

	test.ok(Math, 'There is a Math.');

	//Math.roundPrecision = function (val, precision)
	test.strictEqual(Math.roundPrecision(0,1), 0, 'roundPrecision does stuff');
	test.strictEqual(Math.roundPrecision(0,2), 0, 'roundPrecision does stuff');
	test.strictEqual(Math.roundPrecision(0.01,2), 0.01, 'roundPrecision does stuff');
	test.strictEqual(Math.roundPrecision(0.01,1), 0, 'roundPrecision does stuff');
	test.strictEqual(Math.roundPrecision(0.01,0), 0, 'roundPrecision does stuff');
	test.strictEqual(Math.roundPrecision(0.12345678,0), 0, 'roundPrecision does stuff');
	test.strictEqual(Math.roundPrecision(0.12345678,1), 0.1, 'roundPrecision does stuff');
	test.strictEqual(Math.roundPrecision(0.12345678,2), 0.12, 'roundPrecision does stuff');
	test.strictEqual(Math.roundPrecision(0.12345678,6), 0.123457, 'roundPrecision does stuff');
	test.strictEqual(Math.roundPrecision(0.12345678,7), 0.1234568, 'roundPrecision does stuff');

	//Math.randomInt = function (min, max)
	test.ok(Math.randomInt(0,1) <= 1, 'randomInt makes random numbers');
	test.ok(Math.randomInt(0,1) >= 0, 'randomInt makes random numbers');

	test.done();
};

exports.testArrayFunctionality = function(test) {
	'use strict';
	test.expect(1+8);

	test.ok(Array, 'There is a Array.');
	var t;

	// Array.pushOnNotEmpty
	t = [];
	test.strictEqual(t.length, 0, 'Array is empty.');
	t.push('x');
	test.strictEqual(t.length, 1, 'Array has one element.');
	t.pushOnNotEmpty('x');
	test.strictEqual(t.length, 2, 'Array has 2 elements.');
	t.pushOnNotEmpty(null);
	test.strictEqual(t.length, 2, 'Array still has 2 elements.');
	t.pushOnNotEmpty(undefined);
	test.strictEqual(t.length, 2, 'Array still has 2 elements.');
	t.pushOnNotEmpty('');
	test.strictEqual(t.length, 2, 'Array still has 2 elements.');
	t.pushOnNotEmpty(0);
	test.strictEqual(t.length, 3, 'Array now has 3 elements.');
	t.pushOnNotEmpty(false);
	test.strictEqual(t.length, 4, 'Array now has 4 elements.');

	test.done();
};

exports.testObjectFunctionality = function(test) {
	'use strict';
	test.expect(1+6);

	test.ok(Object, 'There is a Object.');
	var t;

	// Object.forEachProperty = function (fn) {
	t = {
		x: 1,
		y: 2
	};
	test.strictEqual(t.x, 1, 'Object value.');
	test.strictEqual(t.y, 2, 'Object value.');

	t.forEachProperty(function(value,key){
		this[key] = value + 1;
	});
	test.strictEqual(t.x, 2, 'Object value.');
	test.strictEqual(t.y, 3, 'Object value.');

	t.forEachProperty(function(value,key){
		t[key] = value + 1;
	});
	test.strictEqual(t.x, 3, 'Object value.');
	test.strictEqual(t.y, 4, 'Object value.');

	test.done();
};

exports.testDateSetFromIsoStringFunctionality = function(test) {
	'use strict';
	//test.expect(21);

	test.ok(DateSetFromIsoString, 'There is a DateSetFromIsoString.');

	var t;

	t = DateSetFromIsoString("2015-11-06 13:21:00+02:00");
	test.strictEqual(t.getDate(), 6, 'Checking date & time & timezone.');
	test.strictEqual(t.getFullYear(), 2015, 'Checking date & time & timezone.');

	t = DateSetFromIsoString("2015-11-06 13:21:00+00:00");
	test.strictEqual(t.getDate(), 6, 'Checking date & time & timezone 0.');
	test.strictEqual(t.getFullYear(), 2015, 'Checking date & time & timezone 0.');

	t = DateSetFromIsoString("2015-11-06 13:32:00");
	test.strictEqual(t.getDate(), 6, 'Checking date & time.');
	test.strictEqual(t.getFullYear(), 2015, 'Checking date & time.');

	t = DateSetFromIsoString("2015-11-06");
	test.strictEqual(t.getDate(), 6, 'Checking date.');
	test.strictEqual(t.getFullYear(), 2015, 'Checking date.');

console.log(t);
	test.done();
};
