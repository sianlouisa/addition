module.exports = function addition(n1, n2) {
	if (isNaN(n1) || isNaN(n2)) {
		throw new TypeError("Numbers required!");
	} else {
		return n1 + n2;
	}
};
