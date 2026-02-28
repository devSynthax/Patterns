/**
 * Question: Maximum number of vowels in substring of size K
 * Example 1: Input: s = "abciiidef", k = 3
 * Output: 3
 * Explanation: The substring "iii" contains 3 vowels.
 */

const maxVowels = (str, k) => {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let countVowels = 0;
    
    for(let i = 0; i < k; i++) {
        if(vowels.has(str[i])) countVowels++;
    }
    
    let maxCount = countVowels;
    for(let i = k; i < str.length; i++) {
        if(vowels.has(str[i])) countVowels++;
        if(vowels.has(str[i - k])) countVowels--;
        maxCount = Math.max(countVowels, maxCount);
    }
    
    return maxCount;
}

console.log(maxVowels("abciiidef", 3)); // 3  ("iii")
console.log(maxVowels("leetcode", 3));  // 2  ("lee")