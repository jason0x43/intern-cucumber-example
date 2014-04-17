//
// The cucumber module can be used as a plugin, in which case the plugin argument denotes a feature file to load.
//
define([
	'intern!cucumber!tests/features/simple',
	'intern/chai!assert'
], function (registerSupport, assert) {
	registerSupport(function () {
		var state;

		this.Before(function(callback) {
			state = {};
			callback();
		});

		this.Given(/^x = 5$/, function(callback) {
			state.x = 5;
			callback();
		});

		this.Given(/^y = (\d+)$/, function(value, callback) {
			state.y = Number(value);
			callback();
		});

		this.Then('I can assert that x != y', function(callback) {
			assert.notStrictEqual(state.x, state.y);
			callback();
		});

		this.Then('I can assert that x == y', function(callback) {
			assert.strictEqual(state.x, state.y);
			callback();
		});
	});
});
