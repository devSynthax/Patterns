/**
 * Question: Count vowels/consonants
 * Example:
 * Input: "hello world"
 * Output: Vowels: 3, Consonants: 7 (The string contains 3 vowels and 7 consonants)
 */

function countVowelsAndConsonants(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;
    for (const char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.match(/[a-zA-Z]/)) {
            consonantCount++;
        }
    }
    return { vowelCount, consonantCount };
}

// Example usage:
const input = "hello world";
const result = countVowelsAndConsonants(input);
console.log(`Vowels: ${result.vowelCount}, Consonants: ${result.consonantCount}`); // Output: Vowels: 3, Consonants: 7