# Count Words
A lightweight vanilla javascript app to count the occurance of a word or a phrase in a string.

## Installation

NPM Install 
* Using npm
```code
npm i @tyah/count-words
```

* Cloning repository
```code
git clone https://github.com/gumbol/count-words
```

## Getting started

### example
```code
const countWords = require("path/to/repo/count-words")

console.log(countWords("fooBarFOobazBar fOo f   oo   F   oO", "fobar"))
// -> No match

console.log(countWords("fooBarFOobazBar fOo f   oo   F   oO", "f   oo"))
// -> 2

console.log(countWords("fooBarFOobazBar fOo f   oo   F   oO", "fooBaz"))
// -> 1
```

## Acknowledgement
Inspired by exercises from [Eloquent Javascript](https://eloquentjavascript.net) book by [Marijn Haverbeke](https://github.com/marijnh)