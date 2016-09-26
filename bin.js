#!/usr/bin/env node

/* eslint import/no-extraneous-dependencies:0 */
const dockerLambda = require('docker-lambda');
const dlfe = require('./index.js')();

const fn = process.argv[2];
const handler = process.argv[3];

// Spawns synchronously, uses current dir – will throw if it fails
process.stdout.write(dlfe(fn, handler));
