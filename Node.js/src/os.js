const os = require('os');

console.log(os.EOL);
console.log(os.arch())
console.log(os.constants)
console.log(os.cpus())
console.log(os.endianness())
console.log(os.freemem())
// console.log(os.getPriority()) Added in v10.10.0
// console.log(os.setPriority()) Added in v10.10.0
console.log(os.networkInterfaces());

console.log(os.homedir());
console.log(os.hostname());
console.log(os.loadavg());
console.log(os.platform());
console.log(os.release());
console.log(os.tmpdir());
console.log(os.totalmem());
console.log(os.type());
console.log(os.uptime());
console.log(os.userInfo());

  const iptable={},
    ifaces=os.networkInterfaces();
for (var dev in ifaces) {
  ifaces[dev].forEach(function(details,alias){
    if (details.family=='IPv4') {
      iptable[dev+(alias?':'+alias:'')]=details.address;
    }
  });
}
console.log(iptable);