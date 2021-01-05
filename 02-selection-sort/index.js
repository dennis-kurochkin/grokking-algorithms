const arr = [
  9, 2, 4, 6, 7, 3, 5, 12, 67, 34, 2, 0, 6, 45, 3, 65, 23, 16, 56, -30
];

const findLeastItemIndex = (arr = []) => {
  return arr.reduce((leastItemIndex, item, index, arr) => item < arr[leastItemIndex] ? index : leastItemIndex, 0);
}

/**
 * Selection sort (сортировка выбором) with my implementation
 * @param {Array} arr 
 */
const sortAscending = (arr = []) => {
  const givenArray = [...arr];
  const newArray = [];

  arr.forEach(() => {
    const lastItemIndex = findLeastItemIndex(givenArray);

    newArray.push(givenArray[lastItemIndex]);
    givenArray.splice(lastItemIndex, 1);
  });

  return newArray;
}

console.log(sortAscending(arr));
