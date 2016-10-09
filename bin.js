#!/usr/bin/env node

const dlfe = require('./index.js')();

const fn = process.argv[2];
const handler = process.argv[3];

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

// Spawns synchronously, uses current dir – will throw if it fails
const result = dlfe(fn, handler);

const output = (isObject(result)) ? format(result) : result;

console.dir(output, { depth: null, colors: true });
