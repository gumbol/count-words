/*   function min(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) return "NaN";
  let parsenum1 = Number(num1)
  let parsenum2 = Number(num2)
  if (parsenum1 <= parsenum2) return parsenum1;
  else return parsenum2;
}

console.log(min("+2", "+2")); 



function isEven(num) {
  if(isNaN(num)) return "NaN";
  if(num % 1 != 0) return "Not a whole number"  
  if (num < 0) return "Not a positive number";
  else if (num == 0) return true;
  else if (num == 1) return false;
  else if (isEven(num - 2) === true) return true;
  else return false;
}
 
console.log(isEven("10.00000")); 


function countBs (string)
{
  let parseStr = String(string)
  let bCount = 0;
  for (let i = 0; i < parseStr.length; i++)
    if (parseStr[i] === "B") bCount++;
  
  return bCount;
}

console.log(countBs(0938200+"B b"))


function countChar(string, letter)
{
  let parseStr = String(string)
  let parseLtr = String(letter)
  let bCount = 0;
  for (let i = 0; i < parseStr.length; i++)
    if (parseStr[i] === parseLtr) bCount++;
  
    return bCount;
}


console.log(countChar(0000, 0))
*/


function countWords (string, word)
{
  let parseStr = String(string)
  let parseWord = String(word)
  let count = '';
  let save = 0
  for (let i = 0; i < parseStr.length; i++)
  {
    if (parseStr[i] === parseWord[count.length]) count += parseStr[i];
    else if (count.length)
    {
      i--;
      count = '';
    }
    if (count.length === parseWord.length)
    {
      save++;
      count = '';
    }
  }
  if (save > 0) return save;
  return "no match"
}
console.log(countWords("roadr rbro ther 2200 0 brother", 00))