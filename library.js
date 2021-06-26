var Library = (function () {
	
	let hasClass = function(el, clasName) {
		return el.className && new RegExp("(\\s|^)" + clasName + "(\\s|$)").test(el.className);
	}

	return {
		hasClass: hasClass,
	}
}());