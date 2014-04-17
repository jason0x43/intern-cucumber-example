//
// Cucumber tests run as functional tests will have access to a WebDriver instance "remote" on the World.
//
define([
	'intern!cucumber!tests/features/functional',
	'require',
	'intern/chai!assert'
], function (registerSupport, require, assert) {
	registerSupport(function () {
		var state;

		this.Before(function(callback) {
			state = {};
			callback();
		});

		this.Given('the relative url $url', function(url, callback) {
			state.url = url;
			callback();
		});

		this.When('I open the page', function(callback) {
			this.remote.get(require.toUrl('./data/basic.html')).then(callback);
		});

		this.Then('I should see "$title" as the page title', function(title, callback) {
			this.remote.elementByTagName('h1').text().then(function (text) {
				assert.strictEqual(text, title);
				callback();
			}, callback.fail);
		});
	});
});
