define([], function () {
	function Fib() {
		this.previous = this.current = null;
	}

	Fib.prototype.next = function () {
		if (this.previous === null) {
			return (this.previous = 1);
		}
		if (this.current === null) {
			return (this.current = 1);
		}
		var next = this.current + this.previous;
		this.previous = this.current;
		this.current = next;
		return next;
	};

	Fib.prototype.reset = function () {
		this.current = this.previous = null;
	};

	return Fib;
});
