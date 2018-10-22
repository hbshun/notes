const util = require('util');

const exec = util.promisify(require('child_process').exec);

//require('child_process').exec('lsll && echo $?', function(){console.log(arguments)})
const fn = async function() {
  try {
  const result = await exec('laas');
} catch(e) {console.log(e)}
//  console.log(result);
}

fn();
