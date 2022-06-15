/**
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The  function should calculate the maximum sum of n consecutive elements in the array.
 */

export const maxSubarraySum = (arr: number[], n: number) => {
  let maxSum = -Infinity;
  let tempSum = 0;

  if (arr.length === 0 || n === 0 || arr.length < n) {
    return null;
  }

  tempSum = arr.slice(0, n).reduce((a, b) => a + b);
  maxSum = tempSum;
  
  for (let i = n; i < arr.length; i++) {
    tempSum += arr[i] - arr[i - n];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

// # naive solution
// export const maxSubarraySum = (arr: number[], n: number) => {
//   let max = -Infinity;

//   if (n === 0 || arr.length === 0 || arr.length < n) {
//     return null;
//   }

//   for (let i = 0; i <= arr.length - n; i++) {
//     let temp = 0;
    
//     for (let j = 0; j < n; j++) {
//       temp += arr[i + j];
//     }

//     if (max < temp) {
//       max = temp;
//     }
//   }

//   return max;
// };

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null

