const servers = require('./s.json').servers;

console.log(servers.length);
servers.forEach(s => {
  if(!s.flavor){
    console.log(s, s.id);
  }
})

// const flavors = require('./flavor.json').flavors;

// flavors.forEach(f => {
//   console.log(f.id);
// });