/* eslint import/no-extraneous-dependencies: 0 */
const { test } = require('tap');
const exec = require('child_process').exec;
const path = require('path');
const dockerInvoke = require('./../../');

const expected = 'hello gritcode';

process.chdir(path.join(process.cwd(), './test/fixtures'));

// node module
test('accepts query parameters', t => {
  const data = dockerInvoke('greet', 'hello.json');
  t.strictSame(data, expected);
  t.end();
});

// cli
test('accepts query parameters', t => {
  const cmd = './../../bin.js -f greet -p hello.json';
  exec(cmd, (error, stdout) => {
    // strip ansi (colors)
    t.strictSame(stdout.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, ''), `'${expected}'\n`);
    t.end();
  });
});
