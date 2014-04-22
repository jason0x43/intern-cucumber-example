//
// The cucumber module can be used as a plugin, in which case the plugin argument denotes a feature file to load.
//
define([
	'intern!cucumber!tests/features/fib',
	'app/fib',
	'intern/chai!assert'
], function (registerSupport, Fib, assert) {
	registerSupport(function () {
		var fib;

		this.Given('a new fib counter', function(callback) {
			fib = new Fib();
			callback();
		});

		this.When('it is reset', function(callback) {
			fib.reset();
			callback();
		});

		this.When('next is called', function(callback) {
			fib.next();
			callback();
		});

		this.Then('I assert that the value = $value', function(value, callback) {
			assert.equal(fib.current, value);
			callback();
		});

		this.Then('I assert that the value is null', function(callback) {
			assert.isNull(fib.current);
			callback();
		});
	});
});
