define([], function () {
	function Square() {
		this.count = this.current = null;
	}

	Square.prototype.next = function () {
		if (this.count === null) {
			this.count = 0;
		}
		this.count += 1;
		this.current = this.count * this.count;
		return this.current;
	};

	Square.prototype.reset = function () {
		this.current = this.count = null;
	};

	return Square;
});
