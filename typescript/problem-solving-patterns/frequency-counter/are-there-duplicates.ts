/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any
 * duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 */


export const getFrequencyCounter = (arr: Array<number | string>) => arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {} as {[index: string]: number})

export const areThereDuplicates = (...arr: Array<number | string>) => {
  const fc = getFrequencyCounter(arr);

  for (let [k, v] of Object.entries(fc)) {
    if (v > 1) {
      return true;
    }
  }

  return false;
} 

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true
