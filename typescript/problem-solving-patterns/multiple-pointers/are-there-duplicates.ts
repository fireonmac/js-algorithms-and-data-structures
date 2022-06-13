/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any
 * duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 */


export type Letters = string | number;

export const sort = (arr: Array<Letters>) => {
  const sliced = [...arr];
  const compareFunc = (a: Letters, b: Letters) => {
    if (a < b) return -1;
    else if (a > b) return 1;
    else if (a === b) return 0;
    else return -1;
  };

  sliced.sort(compareFunc);

  return sliced; 
}


const areThereDuplicates = (...arr: Array<Letters>) => {
  const sorted = sort(arr);
  
  let start = 0;
  let next = start + 1;

  while (next < arr.length) {
    if (sorted[start] === sorted[next]) {
      return true;
    }

    start++;
    next++;
  }

  return false;
};

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true
