/**
 * Write a function called same, which accepts two arrays.
 * The function shuld return true if every value in the array has it's corresponding value squared in the second array.
 * The frequency of values must be the same
 */

namespace Same {
  const getFrequencyCounter = (arr: number[]) => arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {} as {[index: string]: number});
  
  const same = (arr1: number[], arr2: number[]) => {
    if (arr1.length !== arr2.length) {
      return false;
    }
    
    const frequencyCounter1 = getFrequencyCounter(arr1);
    const frequencyCounter2 = getFrequencyCounter(arr2);
    
    const distinctNumbers1 = Object.keys(frequencyCounter1);
    const distinctNumbers2 = Object.keys(frequencyCounter2);
  
    if (distinctNumbers1.length !== distinctNumbers2.length) {
      return false;
    }
  
    const result = distinctNumbers1.reduce((acc, val) => {
      const num = parseInt(val);
      const powNum = num ** 2;
  
      if (frequencyCounter1[num] !== frequencyCounter2[powNum]) {
        acc = false; 
      }
  
      return acc;
    }, true);
  
    return result;
  }
  
  console.log(same([1, 2, 3], [4, 1, 9])) // true
  console.log(same([1, 2, 3], [1, 9])) // false
  console.log(same([1, 2, 3], [4, 4, 1])) // false (must be same frequency)
  
  console.log(same([1, 1, 3], [1, 1, 9])); // true
  console.log(same([1, 1, 3, 1], [1, 1, 9])); // false
  console.log(same([3, 2, 1], [1, 9, 4])); // true
  console.log(same([1, 5, 5, 1], [25, 25, 1])); // false
  console.log(same([1, 5, 5, 1], [25, 25, 1, 1])); // true    
}
