//
// When cucumber is loaded as a regular module rather than as a plugin, the user must pass it feature text. This lets
// the user retrieve or create the features as required.
//
define([
	'intern!cucumber',
	'require',
	'intern/chai!assert'
], function (registerSupport, require, assert) {
	var feature = ''
		+ 'Feature: Assertions\n'
		+ '  I want to be able to use assert* in my step definitions\n'
		+ '  Scenario: assert_equal\n'
		+ '	   Given x = 5\n'
		+ '	   And y = 5\n'
		+ '	   Then I can assert that x == y\n'
		+ '  Scenario: assert_not_equal\n'
		+ '	   Given x = 5\n'
		+ '	   And y = 7\n'
		+ '	   Then I can assert that x != y';

	registerSupport(function () {
		this.Before(function(callback) {
			this.x = this.y = undefined;
			callback();
		});

		this.Given(/^x = 5$/, function(callback) {
			this.x = 5;
			callback();
		});

		this.Given(/^y = (\d+)$/, function(value, callback) {
			this.y = Number(value);
			callback();
		});

		this.Then('I can assert that x != y', function(callback) {
			assert.notStrictEqual(this.x, this.y);
			callback();
		});

		this.Then('I can assert that x == y', function(callback) {
			assert.strictEqual(this.x, this.y);
			callback();
		});
	}, feature);
});
