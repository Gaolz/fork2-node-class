module.exports = Class = function(argv) {
  if (typeof argv['initialize'] === 'undefined')
    return function(){};
  
  var constructor = argv['initialize'];
  return constructor;
}

