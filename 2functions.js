// Here's how you declare a function:
//  var myAwesomefunction = function (myArgument) {
      // do something!
      //
// }

// myAwesomeFunction(something);

// In JS, functions are variables, just as they are first-class citizens
// You can do stuff like using functions as arguments for other functions:
square = function (a) {
  return a * a;
}

applyOperation = function (f, a) {
  return f(a);
}

console.log(applyOperation(square, 10)); // 100

// A return statement takes a value and returns this value as the result
// of a function.  Whatever come AFTER return will never get executed.
myFunction = function (a) {
  return a * 3;
  explodeComputer(); // This will never be executed.
}

console.log(myFunction(12)); // 36
