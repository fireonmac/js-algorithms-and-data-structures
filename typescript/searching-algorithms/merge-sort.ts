function binarySearch(arr: number[], target: number, offset: number = 0): number {
  const mIdx = Math.floor(arr.length / 2);
  const mVal = arr[mIdx];

  if (mVal === target) return offset + mIdx;
  else if (mVal > target) return binarySearch(arr.slice(0, mIdx), target, offset);
  else if (mVal < target) return binarySearch(arr.slice(mIdx + 1), target, offset + mIdx + 1);
  else return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1 