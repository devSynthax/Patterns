/**
 * Question: check anagram strings
 * Example:
 * Input: "listen", "silent"
 * Output: true (The strings are anagrams of each other)
 */

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  s = s.toLowerCase();
  t = t.toLowerCase();
  const count = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++; // increment for s
    count[t.charCodeAt(i) - 97]--; // decrement for t
  }

  for (let i = 0; i < 26; i++) {
    if (count[i] !== 0) return false;
  }

  return true;
}



const validAnagram = (str1, str2) => {
    const clean = str => str.toLowerCase().replace(/[^a-z]/g, '');
    str1 = clean(str1);
    str2 = clean(str2);

    if(str1.length !== str2.length) return false;
    let count = {}
    for(let char of str1) {
        count[char] = (count[char] || 0) + 1
    }
    
    for(let char of str2) {
        if(!count[char]) return false;
        count[char]--;
    }
    
    return true;
}


console.log(validAnagram("Dormitory", "Dirtyroom")); // true


// Example usage:
const str1 = "listen";
const str2 = "silent";
const result = isAnagram(str1, str2);
console.log(result); // Output: true