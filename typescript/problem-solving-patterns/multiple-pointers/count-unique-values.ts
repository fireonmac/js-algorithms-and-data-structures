/**
 * Implement a function called countUniqueValues, which accepts a sorted array. 
 * There can be negative numbers in the array, but it will always be sorted.
 */

export  const countUniqueValues = (arr: number[]) => {
  let count = 0;
  let prevVal;

  for (let val of arr) {
    if (prevVal !== val) {
      count++;
      prevVal = val;
    }
  }

  return count;
};

console.log(countUniqueValues([1, 1, 1, 1, 1 , 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4
