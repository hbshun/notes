
const ejs = require('ejs');
console.log(ejs.render );

let str = "Hello <%- client %>";
const html = ejs.render(str, {client: '<%= test %>'});

console.log(html);