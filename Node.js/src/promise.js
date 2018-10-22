

const P = require('bluebird');



const p2 = new P((resolve, reject) => {
  console.log(123);
  resolve(6666);
  console.log(132123)
});
p2.then(console.log);

setTimeout(function() {
  console.log('timeout 0');
}, 0)
process.nextTick(function(){
  console.log('nextTick')
})

const p = new Promise((resolve, reject) => {
  resolve('p');
});
let pp = p.then(() => {
  throw new Error('then error');
}, () => {
  console.log('then 2');
})
console.log(pp === p);
console.log(7788, p.state);
p.catch((e) => {
  console.error('ERROR!!!!', e);
})