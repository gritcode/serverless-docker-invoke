# docker-lambda-file-event

[![Build Status](https://travis-ci.org/gritcode/docker-lambda-file-event.svg?branch=master)](https://travis-ci.org/gritcode/docker-lambda-file-event)

> Thin wrapper for passing a json file for a custom event to docker-lambda


## cli

Install the module globally.  
```javascript
npm i -g gritcode/docker-lambda-file-event
```

Assuming we have a `hello.json` and `hello.js` file in the current working directory.  
```javascript
dlfe hello
```

The handler has to be in the current working directory, but the event.json files do not.  
```javascript
DLFE_PATH=events/ dlfe hello
```

## node.js

Require the module.  
```javascript
const dlfe = require('docker-lambda-file-event');
```

Assuming we have a `/path/to/event/files/hello.json` and `./hello.js` lambda function.  
```javascript
const output = dlfe('/path/to/event/files')('hello');
```
