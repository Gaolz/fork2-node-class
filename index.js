module.exports = Class = function(argv) {
  if (typeof argv['initialize'] === 'undefined')
    return function(){};
  
  var constructor = argv['initialize'];
  for (var method in argv) {
    if (argv.hasOwnProperty(method) && method !== 'initialize')
      constructor.prototype[method] = argv[method];
  }
  return constructor;
}

