/**
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
 */

{
  const sumZero = (arr: number[]): [number, number] | undefined => {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const [leftNum, rightNum] = [arr[left], arr[right]];
      const sum = leftNum + rightNum;
  
      if (sum === 0) {
        return [leftNum, rightNum];
      } else if (leftNum < rightNum) {
        left--;
      } else {
        right++;
      }
    }
  }
  
  console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
  console.log(sumZero([-2, 0, 1, 3])); // undefined
  console.log(sumZero([1, 2, 3])); // undefined
}
