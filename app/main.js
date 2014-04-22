require([ 'app/fib', 'dojo/dom', 'dojo/on', 'dojo/domReady!' ], function (Fib, dom, on) {
	var value = dom.byId('value'),
		next = dom.byId('next'),
		fib = new Fib();

	on(next, 'click', function () {
		value.innerHTML = fib.next();
	});
});
