exports.testStringFunctionality = function(test) {
	'use strict';
	test.expect(21);

	var toolshed = require('../src/js-toolshed');

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

	test.done();
};
