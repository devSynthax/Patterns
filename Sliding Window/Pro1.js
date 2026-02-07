/**
 *  Question:- Given a string s and integer k, return the maximum number of vowels in any substring of length k.
 *  Example 1: Input: s = "abciiidef", k = 3
 *  Output: 3
 *  Explanation: The substring "iii" contains 3 vowels.
 */

var maxVowels = function(s, k) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxCount = 0;
    let currentCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) {
            currentCount++;
        }
        if (i >= k) {
            if (vowels.has(s[i - k])) {
                currentCount--;
            }
        }
        
        maxCount = Math.max(maxCount, currentCount);
    }
    return maxCount;
}