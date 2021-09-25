 /* jslint esversion: 8 */
module.exports = (string, word) =>
//export default (string, word) =>
{
  let parsedStr = String(string).toLowerCase();
  let parsedWord = String(word).toLowerCase();
  let count = '';
  let save = 0
  for (let i = 0; i < parsedStr.length; i++)
  {
    if (parsedStr[i] === parsedWord[count.length]) count += parsedStr[i];
    else if (count.length)
    {
      i--;
      count = '';
    }
    if (count.length === parsedWord.length)
    {
      save++;
      count = '';
    }
  }
  if (save > 0) return save;
  return "No match";
}; 