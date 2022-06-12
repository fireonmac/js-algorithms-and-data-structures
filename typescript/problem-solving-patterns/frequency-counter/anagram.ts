/**
 * Given two string, write a function to determine if the second string is an anagram of first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema fomred from iceman.
 */

namespace Anagram {
  const getFrequencyCounter = (str: string) => str.split('').reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc; 
  }, {} as {[index: string]: number});

  const validAnagram = (str1: string, str2: string) => {
    if (str1.length !== str2.length) {
      return false;
    }

    const frequencyCounter1 = getFrequencyCounter(str1);
    const frequencyCounter2 = getFrequencyCounter(str2);

    const distinctChars1 = Object.keys(frequencyCounter1);
    const distinctChars2 = Object.keys(frequencyCounter2);

    if (distinctChars1.length !== distinctChars2.length) {
      return false;
    }

    const result = distinctChars1.reduce((acc, val) => {
      if (frequencyCounter1[val] !== frequencyCounter2[val]) {
        return false;
      }

      return acc;
    }, true);

    return result;
  }

  console.log(validAnagram('', '')) // true
  console.log(validAnagram('aaz', 'zza')) // false
  console.log(validAnagram('anagram', 'nagaram')) // true
  console.log(validAnagram('rat', 'car')) // false
  console.log(validAnagram('awesome', 'awesom')) // false
  console.log(validAnagram('qwerty', 'qeywrt')) // true
  console.log(validAnagram('texttwisttime', 'timetwisttext')) // true
}
