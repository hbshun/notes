/**
 * Created by admin on 2016/3/22.
 */

//assert

//buffer

//child_process

//cluster

//console

//crypto
const crypto = require('crypto');
const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
  .update('I love cupcakes')
  .digest('hex');
console.log(hash);


//dns
const dns = require('dns');

dns.lookup('bbyy.me', (err, addresses, family) => {
  console.log('addresses:', addresses);
});

//Error
console.log(Error);

//events
const EventEmitter = require('events');

//fs
const fs = require('fs');
console.log(__dirname);
console.log(__filename);

//global
/**
 * __dirname
 * __filename
 * exports
 * module
 * global
 * process
 * console
 * require() require.main/require.cache/require.resolve
 * setInterval(cb, ms)
 * setTimeout(cb, ms)
 * clearInterval(t)
 * clearTimeout(t)
 */
console.log(require);

//http

//https

//net
const net = require('net');
console.log(net);
console.log(net.isIPv4('192.168.1.1000'));

//os
const os = require('os');
console.log(os.type());

//path
const path = require('path');
console.log(path.delimiter);

//process

//punycode
require('punycode');

//querystring
require('querystring');

//readline
require('readline');

//stream

//timers Locked
/**
 * clearImmediate(immediateObject)
 * clearInterval(intervalObject)
 * clearTimeout(timeoutObject)
 * ref()
 */


//TLS/SSL


//TTY


//UDP/Datagram Sockets
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
  var address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(41234);

//URL

//util
const util = require('util');

//v8
const v8 = require('v8');
console.log(v8.getHeapStatistics());

//vm

//zlib 压缩/解压
const zlib = require('zlib');


//c/c++ addon