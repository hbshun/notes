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

let strs = `global.Array                         global.ArrayBuffer                   global.Atomics                       global.Boolean
global.Buffer                        global.DTRACE_HTTP_CLIENT_REQUEST    global.DTRACE_HTTP_CLIENT_RESPONSE   global.DTRACE_HTTP_SERVER_REQUEST
global.DTRACE_HTTP_SERVER_RESPONSE   global.DTRACE_NET_SERVER_CONNECTION  global.DTRACE_NET_STREAM_END         global.DataView
global.Date                          global.Error                         global.EvalError                     global.Float32Array
global.Float64Array                  global.Function                      global.GLOBAL                        global.Infinity
global.Int16Array                    global.Int32Array                    global.Int8Array                     global.Intl
global.JSON                          global.Map                           global.Math                          global.NaN
global.Number                        global.Object                        global.Promise                       global.Proxy
global.RangeError                    global.ReferenceError                global.Reflect                       global.RegExp
global.Set                           global.SharedArrayBuffer             global.String                        global.Symbol
global.SyntaxError                   global.TypeError                     global.URIError                      global.Uint16Array
global.Uint32Array                   global.Uint8Array                    global.Uint8ClampedArray             global.WeakMap
global.WeakSet                       global.WebAssembly                   global._                             global.assert
global.async_hooks                   global.buffer                        global.child_process                 global.clearImmediate
global.clearInterval                 global.clearTimeout                  global.cluster                       global.console
global.crypto                        global.decodeURI                     global.decodeURIComponent            global.dgram
global.dns                           global.domain                        global.encodeURI                     global.encodeURIComponent
global.escape                        global.eval                          global.events                        global.fs
global.global                        global.http                          global.http2                         global.https
global.isFinite                      global.isNaN                         global.module                        global.net
global.os                            global.parseFloat                    global.parseInt                      global.path
global.perf_hooks                    global.process                       global.punycode                      global.querystring
global.readline                      global.repl                          global.require                       global.root
global.setImmediate                  global.setInterval                   global.setTimeout                    global.stream
global.string_decoder                global.tls                           global.tty                           global.undefined
global.unescape                      global.url                           global.util                          global.v8
global.vm                            global.zlib`

const keys = [];

strs.split('\n').forEach(str => {
  str.split(' ').filter(s => s).forEach(s => {
    keys.push(s.slice(7));
  });
})
console.log(keys.toString());

