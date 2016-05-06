module.exports = function(txt) {
	return txt.replace(/-([\da-z])/gi, function( all, letter ) {
		return letter.toUpperCase();
	});
};