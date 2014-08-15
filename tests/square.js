define([
	'intern!cucumber!tests/features/square',
	'app/fib',
	'./sequence'
], function (registerSupport, Square, sequenceSupport) {
	registerSupport(function () {
		sequenceSupport.call(this);

		this.Given('a new square counter', function (callback) {
			this.seq = new Square();
			callback();
		});
	});
});
