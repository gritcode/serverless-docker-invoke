module.exports.hello = (event, context, cb) => {
  const name = event.name;
  cb(null, `hello ${name}`);
};
