/**
 * @see https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
 *
 * Instructions:
 *
 * Trolls are attacking your comment section!
 * A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
 *
 * Your task is to write a function that takes a string and return a new string with all vowels removed.
 *
 * For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
 *
 * Note: for this kata y isn't considered a vowel.
 */

/**
 * Solution 1
 * Big O => O(1 + n + 1) => O(n)
 */
function disemvowel(str) {
    return str.split('').filter(v => !/[aeiou]/i.test(v)).join('')
}

/**
 * Solution 2
 * replace method is O(n)
 * Big O => O(n)
 */
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '')
}
