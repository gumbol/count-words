# Count Words
A lightweight vanilla javascript app to count the occurance of a word or a phrase in a string.

## Installation
```code
npm i @tyah/count-words
```
- Cloning repository
```code
git clone https://github.com/gumbol/count-words
```
## Usage
- CommonJS:
```code
const countWords = require("path/to/count-words")
```
- ES modules for the browser:
You'd need to comment module.exports in count-words.js and uncomment exports default.
```code
//module.exports = (string, word) =>
export default (string, word) =>
```
```code
<script type="module">
import countWords from "./path/to/count-words/count-words.js"
</script>
```
### example
```code
console.log(countWords("fooBarFOobazBar fOo f   oo   F   oO", "fobar"))
// -> No match

console.log(countWords("fooBarFOobazBar fOo f   oo   F   oO", "f   oo"))
// -> 2

console.log(countWords("fooBarFOobazBar fOo f   oo   F   oO", "fooBaz"))
// -> 1
```

## Acknowledgement
Inspired by exercises from [Eloquent Javascript](https://eloquentjavascript.net) book by [Marijn Haverbeke](https://github.com/marijnh)