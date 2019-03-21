function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.print = function(){
  console.log(`x: ${this.x}, y: ${this.y}`);
}
Point.prototype.dist = function(p) {
  p = p || new Point(0,0);
  const length = Math.sqrt((this.x - p.x)**2 + (this.y- p.y)**2);
  console.log(`The length from ${p.x},${p.y} to ${this.x},${this.y} is ${length}`);
}

let p32 = new Point(2,2);

p32.print();
p32.dist(new Point(8, 8))
