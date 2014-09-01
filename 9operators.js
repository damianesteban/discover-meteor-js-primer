// Operators
// = is the assignment operator.  This means that:
// a = 12;
// means "assign the value 12 to a".
// To compare two values, you would use ==
// a == 12;
// JavaScript also features the === operator, which compares both
// value and type (i.e. string, integer, etc.):
var a = 12;
console.log(a == 12); // true
console.log(a === 12); // false

// NOTE: According to this tutorial, the statements should return what
// what is indicated above.  However, the second statement also returns true.

// Here is JavaScript's unequality operator:
a = 12;
1 !== 11; // true

// The "!" operator can also be used independently to get the opposite of
// a boolean value:
b = true;
!b; // false

// The "!" operator ALWAYS returns a boolean value, even if
// what comes afetr is not a boolean value:
a = 12;
!a; // false

// This means that if you want to convert a variable to voolean you can just
// use the "!" operator twice (once to force the variable to boolean,
// a second time to revert the value back):
a = 12;
!!a; // true

// Or:
a = 0;
!!a; // false

