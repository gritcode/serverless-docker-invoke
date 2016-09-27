#!/usr/bin/env node

const dlfe = require('./index.js')();

const fn = process.argv[2];
const handler = process.argv[3];

// Spawns synchronously, uses current dir – will throw if it fails
process.stdout.write(dlfe(fn, handler));
