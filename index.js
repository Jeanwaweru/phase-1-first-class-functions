function receivesAFunction(callback) {
  callback();
}
function returnsANamedFunction() {
  function namedFunction() {
    console.log('Namedfunction');
  }

  return namedFunction;
}
function returnsAnAnonymousFunction() {
  
  return function() {
    console.log('anonymous function!');
  }
}
