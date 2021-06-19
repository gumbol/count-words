# Count Words
A vanilla javascript code to count the occurance of a word in a string.
The function takes two arguments a string and a word to search for

## Features
* Extract a given word from a string ignoring spaces or letter case. 

count a word or a phrase regardless if ther

```code
const countWords = require("./count-words-v1")
console.log(countWords("fooBarFOobazBar fOo", "foo")
// -> 3

console.log(countWords("fooBarFOobazBar fOo f  oo   F   oO", "f   oo")
// -> 2
```

## Acknowledgement
Inspired by exercises from [Eloquent Javascript](https://eloquentjavascript.net) book by [Marijn Haverbeke](https://github.com/marijnh)
