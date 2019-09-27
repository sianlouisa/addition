module.exports = function addition(n1, n2) {
	if (typeof n1 !== number && typeof n2 !== number)
		throw new TypeError("Numbers required!");
	return n1 + n2;
};
