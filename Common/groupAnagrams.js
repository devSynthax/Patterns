/**
 * Question: Given an array of strings, group anagrams together.
 * Example:
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * Output: [["bat"], ["nat","tan"], ["ate","eat","tea"]]
 */

// Time Complexity : O(n · k log k)
const groupAnagrams = (strs) => {
    const anagramsGroups = new Map();

    for(let word of strs) {
        const key = word.split('').sort().join('');

        if(!anagramsGroups.has(key)) {
            anagramsGroups.set(key, []);
        }

        anagramsGroups.get(key).push(word);
    }

    return [...anagramsGroups.values()];
}

const groupAnagramsOptimal = (strs) => {
    const anagramsGroups = new Map();

    for(let word of strs) {
        const count = new Array(26).fill(0);

        for(let char of word) {
            count[char.charCodeAt(0) - 97]++;
        }


        const key = count.join("#");

        if(!anagramsGroups.has(key)) {
            anagramsGroups.set(key, [])
        }

        anagramsGroups.get(key).push(word);
    }

    return [...anagramsGroups.values()];            
}

const result = groupAnagramsOptimal(["eat", "tea", "tan", "ate", "nat", "bat"])
console.log(result);