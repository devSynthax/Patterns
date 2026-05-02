/**
 * Question :- Question: Intersection of Two Arrays
 * Example:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 * Time Complexity: O(n + m)
 * Space Complexity: O(n)
 * 
 */

const intersection = (nums1, nums2) => {
    const set1 = new Set(nums1);   
    const result = new Set();
    
    for (let num of nums2) {
        if (set1.has(num)) {
            result.add(num);
        }
    }

    return [...result];
};

// Example usage:
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

const result = intersection(nums1, nums2);
console.log(result); // Output: [2]