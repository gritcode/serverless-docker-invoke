#!/usr/bin/env node

const argv = require('yargs').argv;
const dockerInvoke = require('./index.js');

const result = dockerInvoke(argv.f, argv.p);

const isObject = value =>
  Object.prototype.toString.call(value) === '[object Object]';

const isJson = str => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

// JSON.parse result.body
const format = obj => {
  obj.body = (isJson(obj.body)) ? JSON.parse(obj.body) : obj.body;
  return obj;
};

const output = (isObject(result)) ? format(result) : result;

console.dir(output, { depth: null, colors: true });
