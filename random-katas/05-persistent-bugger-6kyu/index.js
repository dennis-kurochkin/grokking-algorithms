/**
 * Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
 * which is the number of times you must multiply the digits in num until you reach a single digit.
 *
 * @see https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
 */

/**
 * Solution 1
 * Time Complexity: O(n * (n + n)) => O(n^2)
 * Space Complexity: O(n + 1) => O(n)
 */
function persistence(num) {
  let currentNum = num
  let result = 0

  while (currentNum >= 10) {
    currentNum = [...`${currentNum}`].reduce((output, numberStr) => output * Number(numberStr), 1)
    result++
  }

  return result
}

/**
 * Solution 2
 * Time Complexity: O(n * (n + n)) => O(n^2)
 * Space Complexity: O(1)
 */
function persistence(num) {
  let result = 0

  while (num >= 10) {
    num = [...`${num}`].reduce((output, numberStr) => output * Number(numberStr), 1)
    result++
  }

  return result
}
