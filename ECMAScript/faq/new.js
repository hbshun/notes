function fenge(len = 30) {
  console.log(Array(len).fill('- ').join(''));
}
function forin(obj) {
  fenge(10);
  console.log(`FORIN start:`);
  for( let field in obj) {
    console.log(`${field}: ${p[field]}`);
  }
}

function Person(name) {
  if(this instanceof Person) {
    this.name = name;
    return this;
  } else {
    console.log(123213);
    return new Person(name);
  }
}

Person.prototype.sayName = function() {
  console.log(`My name is ${this.name}`);
}

let p = new Person('bang');
console.log(p.constructor);
p.sayName();
console.log(Person.prototype.isPrototypeOf(p));

console.log('name' in p, p.hasOwnProperty('name'));
console.log('sayName' in p, p.hasOwnProperty('sayName'));

forin(p);

let py = {
  name: 'py'
};
Object.setPrototypeOf(py, Person.prototype)
py.sayName();
console.log(py instanceof Person);

fenge()

function Man(name, len) {
  Person.call(this);
  this.name = name;
  this.len = len;
}

let m = new Man('bb', 10);
console.log(m.sayName);
forin(m);

fenge();

function Woman(name, height) {
  this.name = name;
  this.height = height;
}
Woman.prototype = new Person();
Woman.prototype.constructor = Woman;

let w = new Woman('yy', 10);
w.sayName();

forin(w);