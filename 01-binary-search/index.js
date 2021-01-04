/**
 * Gets item index in array by its value.
 * @param {Array} list 
 * @param {number} value 
 */
const binarySearch = (list, value) => {
  let first = 0;
  let last = list.length - 1;

  while (first <= last) {
    let middle = first + last;
    let guess = list[middle];

    if (guess === value) {
      return middle;
    } else if (guess > value) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }

  return NaN;
}

const result = binarySearch([
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10
], 5)

const result2 = binarySearch([
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10
], 16)

console.log(result, result2);
