/**
 * @see https://www.codewars.com/kata/5389864ec72ce03383000484/train/javascript
 */

/**
 * Solution 1
 * Time complexity: Big O => O(n + m + 5) => O(n + m) => O(n)
 * Space complexity: Big O => O(n)
 */
function autocomplete(input, dictionary) {
  const matcher = new RegExp(`^${input.replace(/[^a-z]/gi, '')}.*`, 'i')
  return dictionary.filter(elem => matcher.test(elem)).slice(0, 5)
}

/**
 * Solution 2
 * Time complexity: Big O => O(m * n) => O(nm)
 * Space complexity: Big O => O(1)
 */
function autocomplete(input, dictionary) {
  return dictionary.filter(elem => new RegExp(`^${input.replace(/[^a-z]/gi, '')}.*`, 'i').test(elem)).slice(0, 5)
}
