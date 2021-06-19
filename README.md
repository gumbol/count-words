# Count Words
A lightweight vanilla javascript code to count the occurance of a word or a phrase in a string.

## Use

```code
npm i @tyah/count-words
```
### examples
```code
const countWords = require("./count-words-v1")
console.log(countWords("fooBarFOobazBar fOo", "foo")
// -> 3

console.log(countWords("fooBarFOobazBar fOo f  oo   F   oO", "f   oo")
// -> 2

console.log(countWords("fooBarFOobazBar fOo f  oo   F   oO", "fooBaz")
// -> 1
```

## Acknowledgement
Inspired by exercises from [Eloquent Javascript](https://eloquentjavascript.net) book by [Marijn Haverbeke](https://github.com/marijnh)
