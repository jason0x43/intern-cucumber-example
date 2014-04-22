//
// The cucumber module can be used as a plugin, in which case the plugin argument denotes a feature file to load.
//
define([
	'intern!cucumber!tests/features/fib',
	'app/fib',
	'./sequence'
], function (registerSupport, Fib, sequenceSupport) {
	registerSupport(function () {
		// Call the sequence support function, making sure to give it the same context as this support function.
		// Additional support functions can be mixed in this way as well.
		sequenceSupport.call(this);

		this.Given('a new fib counter', function(callback) {
			this.seq = new Fib();
			callback();
		});
	});
});
