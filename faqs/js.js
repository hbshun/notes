console.log('script start')

async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end') 
}
async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
}).then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })

console.log('script end')

function fibonacci(n, ac1 = 1, ac2  = 1) {
  console.log(fibonacci.arguments)
  if (n<2) return ac2;
  return fibonacci(n-1, ac2, ac1 + ac2);
}
let start = new Date();
console.log(fibonacci(45));
console.log(new Date() - start);



let p = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(1);
  })
});
p.then(function() {
  console.log(111, arguments);
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(2);
    })
  })
}).then(function() {
  console.log(222, arguments);
  return 'my second promise'
  
}).then(function() {
  console.log(333, arguments);

}).catch(function() {
  console.error(999, arguments);
})