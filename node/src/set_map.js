

const set = new Set();

set.add(1);
set.add([]);

const map = new Map([...set]);
console.log(map);