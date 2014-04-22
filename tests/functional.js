//
// Cucumber tests run as functional tests will have access to a WebDriver instance "remote" on the World.
//
define([
	'intern!cucumber!tests/features/app',
	'require',
	'intern/chai!assert'
], function (registerSupport, require, assert) {
	registerSupport(function () {
		var state = {};

		this.Given('the relative url $url', function(url, callback) {
			state.url = url;
			callback();
		});

		this.Given('a running app', function(callback) {
			assert.isDefined(state.url);
			callback();
		});

		this.When('I open the page', function(callback) {
			this.remote.get(require.toUrl(state.url)).then(callback);
		});

		this.When('I click "$buttonId"', function(buttonId, callback) {
			// defensively call 'end' on the remote to reset the context
			this.remote.end().elementById(buttonId).click().then(function () {
				callback();
			}, function (error) {
				callback.fail(new Error('Couldn\'t find "' + buttonId + '" button: ' + error.message));
			});
		});

		this.Then('I should see "$title" as the page title', function(title, callback) {
			var self = this;
			this.remote.end().elementByTagName('h1').text().then(function (text) {
				// use the 'assert' convenience method to ensure that callback or callback.fail is called
				self.assert(callback, function () {
					assert.strictEqual(text, title);
				});
			}, function (error) {
				// fail with an Error so the stack trace is useful
				callback.fail(new Error(error.message));
			});
		});

		this.Then('I should see "$value" in the output field', function(value, callback) {
			var self = this;
			this.remote.end().elementById('value').text().then(function (text) {
				self.assert(callback, function () {
					assert.equal(text, value);
				});
			}, function (error) {
				callback.fail(new Error(error.message));
			});
		});
	});
});
