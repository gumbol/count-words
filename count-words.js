module.exports = (string, word) =>
{
  let parseStr = String(string).toLowerCase()
  let parseWord = String(word).toLowerCase()
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

