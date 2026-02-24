/**
 * Question: Merge two sorted arrays
 * Example:
 * Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
 * Output: [1, 2, 2, 3, 5, 6] (The merged array is sorted in non-decreasing order)
 */

function merge(nums1, m, nums2, n) {
  let i = m - 1;      // last valid element in nums1
  let j = n - 1;      // last element in nums2
  let k = m + n - 1;  // last position in nums1

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  return nums1;
}

// Example usage:
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
const mergedArray = merge(nums1, m, nums2, n);
console.log(mergedArray); // Output: [1, 2, 2, 3, 5, 6]