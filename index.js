/* eslint import/no-extraneous-dependencies:0 */
const dockerLambda = require('docker-lambda');
const path = require('path');
const YAML = require('yamljs');

module.exports = (f, p) => {
  const severless = YAML.load('./serverless.yml');
  const handler = severless.functions[f].handler;
  const event = require(path.join(process.cwd(), p));
  return dockerLambda({ handler, event });
};
