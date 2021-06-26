var recursiveFunction = function() {
	var Self = this,
		defaults = {
			'numbersOfLevel': 3,
			'searchParentClass': 'level_1',
			'startSearchByElement': document.querySelector('.level_4'),
			'resultId': document.getElementById('recursiveFunction'),
		};

	Self.init = function() {
		Self.recurseGetParent(defaults.startSearchByElement, defaults.searchParentClass, defaults.numbersOfLevel);
	};
	
	Self.recurseGetParent = function(startSearchByElement, searchParentClass, numbersOfLevel){
		let nextLevel = numbersOfLevel - 1,
			el = startSearchByElement.parentElement;
		if(nextLevel >= 0){
			if (!Library.hasClass(el, searchParentClass)) {
				Self.recurseGetParent(el, searchParentClass, nextLevel);
			}else{
				defaults.resultId.innerText = el.querySelector('span').innerText;				
			}
		}else{
			defaults.resultId.innerText = 'Sorry! Element doesn\'t exist :(';
		}
	};
};
