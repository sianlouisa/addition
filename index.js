module.exports = function addition(n1, n2) {
	if (typeof n1 !== Number && typeof n2 !== Number)
		throw new TypeError("Numbers required!");
	return n1 + n2;
};
