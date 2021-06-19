# Count Words
A lightweight vanilla javascript app to count the occurance of a word or a phrase in a string.

## Getting started

Install either by 
* Using npm
```code
npm i @tyah/count-words
```

* Cloning the repository
```code
git clone https://github.com/gumbol/count-words
```

### examples
```code
const countWords = require("./count-words-v1")
console.log(countWords("fooBarFOobazBar fOo f  oo   F   oO", "fobar")
// -> No match

console.log(countWords("fooBarFOobazBar fOo f  oo   F   oO", "f   oo")
// -> 2

console.log(countWords("fooBarFOobazBar fOo f  oo   F   oO", "fooBaz")
// -> 1
```

## Acknowledgement
Inspired by exercises from [Eloquent Javascript](https://eloquentjavascript.net) book by [Marijn Haverbeke](https://github.com/marijnh)