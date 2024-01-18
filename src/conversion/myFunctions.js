//Definitions:
// In all of these example functions and their tests, the following definitions should be used:
//"long":  any string which has a length of 7 or more.
//"odd": any number n for which n % 2 !== 0

/** return the first "long" string in the given array, or undefined if none is found.
 * @param {string[]} inputStrings
 * @return {string|undefined}
 */
function findFirstLongString(inputStrings) {
    const result = inputStrings.find((string) => string.length > 6)  
        return result 
    
}

/** return the first odd number in the given array of numbers, or undefined if none is found.
 * @param {number[]} inputNumbers
 * @return {number|undefined}
 */
function findFirstOddNumber(inputNumbers) {
    const result = inputNumbers.find((number) => number % 2 !== 0)
    return result
};

/** return the LAST "long" string in the given array of strings, or undefined if none is found.
 * @param {string[]} inputStrings
 * @return {string|undefined}
 */
function findLastLongString(inputStrings) {
    const result = inputStrings.findLast((string) => string.length > 6)  
        return result 
}

/** Given an array of strings of various lengths,
 * return a new array containing only the "long" strings from the input array
 * @param {string[]} inputStrings
 * @returns {string[]}
 * */
function findAllLongStrings(inputStrings) {
    const result = inputStrings.filter((string) => string.length > 6)  
        return result 
}

/** given an array of numbers, return a new array containing all the odd numbers in the input array.  Returns an empty array if none are found.
 * @param {number[]} inputNumbers
 * @return {number[]}
 */
function findAllOddNumbers(inputNumbers) {
    const result = inputNumbers.filter((number) => number % 2 !== 0)
    return result
}

/** Given an array of mixed types of value
 * return a new array containing only those elements of type string.
 * @param {any[]} inputArray
 * @returns {string[]}
 * */
function findAllTheStrings(inputArray) {
    const result = inputArray.filter((item) => typeof item === "string")
    return result
}

/** Given an array of people objects,
 * return a new array containing only those people objects whose firstName OR secondName (or both) is long.
 * @param {{firstName: string, secondName:string}[]} inputObjects
 * @returns {{firstName: string, secondName:string}[]}
 * */
function findAllPeopleWithALongName(inputObjects) {
    const result = inputObjects.filter((element) => element.firstName.length > 6 || element.secondName.length > 6)
   return result;
}

/** given an array of numbers return true if all of them are odd, else false.
 * @param {number[]} inputNumbers
 * @return {boolean}
 */
function areAllNumbersOdd(inputNumbers) {
    return inputNumbers.every((number) => number % 2 !== 0)

}

/** Given an array of strings of various lengths,
 * return true if all of the strings are "long", else false
 * @param {string[]} inputStrings
 * @returns {boolean}
 * */
function areAllStringsLong(inputStrings) {
    return inputStrings.every((string) => string.length > 6)
}

export {
    findFirstLongString,
    findFirstOddNumber,
    findLastLongString,
    findAllLongStrings,
    findAllOddNumbers,
    findAllTheStrings,
    findAllPeopleWithALongName,
    areAllNumbersOdd,
    areAllStringsLong,
};
