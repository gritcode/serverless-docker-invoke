# serverless-docker-invoke

> Like serverless invoke, but with docker-lambda

Pretty much just a thin wrapper for passing a json file for a custom event to [docker-lambda](https://github.com/lambci/docker-lambda).  


## cli

**Install**  
`npm i -g gritcode/serverless-docker-invoke`

**Run**  
`docker-invoke -f <function> -p <event.json>`


## node.js

```javascript
const dockerInvoke = require('serverless-docker-invoke');
const output = dockerInvoke(functionName, eventFile);
```
