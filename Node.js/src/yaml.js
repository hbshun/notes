const fs = require('fs');
const yaml = require('js-yaml');


const content = fs.readFileSync('./test/test.yaml', 'utf8');
const json = yaml.safeLoad(content)
console.log(json);
console.log(yaml.safeLoad('\n'));
