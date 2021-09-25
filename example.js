const countWords = require('./');

console.log(countWords("fooBarFOobazBar fOo f   oo   F   oO", "fobar"));
// -> No match

console.log(countWords("fooBarFOobazBar fOo f   oo   F   oO", "f   oo"));
// -> 2

console.log(countWords("fooBarFOobazBar fOo f   oo   F   oO", "fooBaz"));
// -> 1