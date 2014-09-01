// Anonymous Functions.
// We've seen functions declared like so:
myFunction = function (blah) {
  console.log("Blah, blah, " + blah);
}

console.log(myFunction("blah"));  // blah

// And we've seen that JavaScript treats functions just like variables,
// letting you pass them as arguments to other functions:
square = function (a) {
  return a * a;             // undefined
}

applyOperation = function (f, a) {
  return f(a);
}

console.log(applyOperation(square, 10));  // 100

// And we've also seen that JavaScript has shorter ways of writing things.
// Equivalent Syntax:
shortApplyOperation = function (f,a) {
  return f(a);
}

applyOperation(
  function(a) {
    return a * a;
  },
  10
) // 100
