/**
 * @see https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
 * TODO: learn bitwise operators (XOR)
 */

/**
 * Solution 1
 * Big O => O(n + n) => O(n)
 */
function findOdd(numbers) {
    const occurrences = {}

    numbers.forEach(number => {
        occurrences[number] ? occurrences[number]++ : occurrences[number] = 1
    })

    for (const [key, value] of Object.entries(occurrences)) {
        if (value % 2 > 0) {
            return Number(key)
        }
    }
}
