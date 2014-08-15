//
// This test module contains Cucumber support calls that can be shared by tests. It assumes there will be a `seq`
// property on the World (this) that implements this app's sequence API (next() function and current value).
//
define([
	'intern/chai!assert'
], function (assert) {
	return function () {
		this.When('it is reset', function (callback) {
			this.seq.reset();
			callback();
		});

		this.When('next is called', function (callback) {
			this.seq.next();
			callback();
		});

		this.Then('I assert that the value = $value', function (value, callback) {
			assert.equal(this.seq.current, value);
			callback();
		});

		this.Then('I assert that the value is null', function (callback) {
			assert.isNull(this.seq.current);
			callback();
		});
	};
});
