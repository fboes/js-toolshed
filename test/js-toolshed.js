exports.testGeneralFunctionality = function(test) {
	'use strict';
	test.expect(5);

	var toolshed = require('../src/js-toolshed');

	test.ok(String, 'There is a String.');

	// Sprintf
	test.strictEqual(String('x').sprintf(), 'x', 'sprintf() without any special stuff.');
	test.strictEqual('x'.sprintf(), 'x', 'sprintf() without any special stuff.');
	test.strictEqual(String('x %s y').sprintf(1), 'x 1 y', 'sprintf() with special stuff.');
	test.strictEqual('x %s y'.sprintf(1), 'x 1 y', 'sprintf() with special stuff.');

	test.done();
};
