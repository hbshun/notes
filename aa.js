
'use strict';
let f = (num) => {
	if(num === 1) {
		return 1;
	}
	if(num > 1) {
		let result = 1;
		for(let n = 2; n < num; n++){
			result *= n;
		}
		return result;
	}
}

let value = f(6);
console.log(value);