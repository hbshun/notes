'use strict';

const { promisify } = require('util');
const { exec } = require('child_process');

const execAsync = promisify(exec);

const main = async () => {
  const stack = await execAsync('id -u stack');
  console.log(stack);
  const res = exec('npm run build', {}, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('All Works Complete Successfully!');
  });

  res.stdout.on('data', console.log);
};
main().catch(console.error);

