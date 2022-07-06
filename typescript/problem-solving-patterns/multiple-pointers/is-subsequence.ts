/**
 * Multiple Pointers - isSubsequence
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of
 * the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the
 * second string, without their order changing.
 * 
 * Your solution MUST have AT LEAST the following complexities:
 * Time Complexity - O(N + M)
 * Space Complexity - 0(1)
 */

export function isSubsequence(str1: string, str2: string) {
  let i = 0;
  let j = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
    j++;
  }

  return false;
}

export function isSubsequenceRecursive(str1: string, str2: string): boolean {
  if (str1.length === 0) return true;
  else if (str2.length === 0) return false;
  else if (str1[0] === str2[0]) return isSubsequenceRecursive(str1.slice(1), str2.slice(1));
  else return isSubsequenceRecursive(str1, str2.slice(1));
}

console.log('Iterative')
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'string')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)

console.log('Recursive but not O(1)');
console.log(isSubsequenceRecursive('hello', 'hello world')); // true
console.log(isSubsequenceRecursive('sing', 'string')); // true
console.log(isSubsequenceRecursive('abc', 'abracadabra')); // true
console.log(isSubsequenceRecursive('abc', 'acb')); // false (order matters)


