/**
 * Question: Find duplicate elements in an array
 * Example:
 * Input: [1, 2, 3, 4, 2, 5, 1]
 * Output: [1, 2]
 * Note: The output should contain only the duplicate elements, without any repetitions.
 */

const findDuplicate = (nums) => {
    const map = {};
    const result = [];
    
    for(let num of nums) {
        // Count occurrences of each number
        map[num] = (map[num] || 0) + 1
        
        // If the count exceeds 1, it means it's a duplicate, so we add it to the result
        if(map[num] > 1) {
            result.push(num);
        }
    }
    
    return result;
}

// ✅ Test cases
const testCases = [
    { input: [1, 3, 4, 2, 2], expected: [2] },
    { input: [3, 1, 3, 4, 2], expected: [3] },
    { input: [1, 1, 2], expected: [1] },
    { input: [2, 2, 2, 2], expected: [2, 2, 2] }, // repeated pushes
    { input: [1, 2, 3, 4, 5], expected: [] }, // no duplicate
    { input: [4, 3, 2, 7, 8, 2, 3, 1], expected: [2, 3] },
    { input: [], expected: [] }, // edge case
    { input: [1], expected: [] }, // single element
];

// 🧪 Run tests
testCases.forEach(({ input, expected }, index) => {
    const output = findDuplicate(input);
    console.log(`Test ${index + 1}:`);
    console.log("Input:   ", input);
    console.log("Output:  ", output);
    console.log("Expected:", expected);
    console.log("Pass:    ", JSON.stringify(output) === JSON.stringify(expected));
    console.log("------");
});