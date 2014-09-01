// Chaining
var myArray = [123, 456];
myArray.push(789) // 123, 456, 789

var myString = "abcdef";
myString.replace("a", "z");  // "zbcdef"

// You can chain multiple lnks together as long as they all return something.
// Just follow the:
// something.function1().function2().function3()
// pattern.
// Each link of the chain will take a value, apply a function to it, and then pass
// on its result to the next link:
n = 5;
n.double().square(); // 100
