/**
 * Question: check the frequency of each element in an array.
 * Example:
 * Input: [1, 2, 2, 3, 3, 3]
 * Output: {1: 1, 2: 2, 3: 3}
 * Input: ['a', 'b', 'a', 'c', 'b', 'a']
 * Output: {'a': 3, 'b': 2, 'c': 1}
 * Note: The function should return an object where the keys are the unique elements from the array and the values are their corresponding frequencies.
 */

const countElementFrequency = (arr) => {
    if(!arr.length) return 0;
    let frequencyCount = {}
    
    for(let item of arr) {
        frequencyCount[item] = (frequencyCount[item] || 0 ) + 1;
    }
    
    return frequencyCount;
}

console.log(countElementFrequency(["a", "b", "a", "c", "b", "a"]))
// Output: { a: 3, b: 2, c: 1 }
console.log(countElementFrequency([1, 2, 2, 3, 3, 3]))
// Output: { '1': 1, '2': 2, '3': 3 }