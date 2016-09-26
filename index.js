/* eslint import/no-extraneous-dependencies:0 */
const dockerLambda = require('docker-lambda');
const path = require('path');

// console.log('process.cwd()', process.cwd());

module.exports = options => (fn = 'read', h) => {
  const handler = h || `handler.${fn}`;
  const eventPath = options || process.env.DLFE_PATH || '';
  const event = require(path.join(process.cwd(), eventPath, `${fn}.json`));
  return dockerLambda({ handler, event });
}
