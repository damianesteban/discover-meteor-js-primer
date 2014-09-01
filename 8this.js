// Apparently, "this" is complicated.
// The "this" keyword lets you access the object on which you're
// currently working; just like a chameleon, "this" keeps changing
// based on its surroundings.
//
// Here's one example with console.log(), which prints any object
// to the browser's console.
myFunction = function (a, b) {
  console.log(this);
  // do something
};

// Assigning "this" to another variable:
thisFunction = function (a, b) {
  var myObject = this;
  // do something
};

// The above pattern lets you safely re-use myObjet
// throughout your code, since unlike "this", its value
// won't change depending on the context.

// TODO: Go over "this".
