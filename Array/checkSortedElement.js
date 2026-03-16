/**
 * Question: check if an array is sorted in ascending, descending order or unsorted.
 * Example:
 * Input: [4, 3, 2, 1]
 * Output: "DESC"
 * Input: [1, 2, 3, 4]
 * Output: "ASC"
 * Input: [1, 3, 2, 4]
 * Output: "UNSORTED"
 * Note: The function should return "ASC" for ascending order, "DESC" for descending order, and "UNSORTED" for unsorted arrays.
 */

const checkSortedElement = (arr) => {
    if (arr.length <= 1) return "ASC"; // by convention

    let asc = true;
    let desc = true;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) asc = false;
        if (arr[i] > arr[i - 1]) desc = false;
        // early exit if both broken
        if (!asc && !desc) return "UNSORTED";
    }

    if (asc) return "ASC";
    if (desc) return "DESC";
    return "UNSORTED";
};

console.log(checkSortedElement([4,3,2,1]))   // "DESC"
console.log(checkSortedElement([1,2,3,4]))   // "ASC"
console.log(checkSortedElement([1,3,2,4]))   // "UNSORTED"
console.log(checkSortedElement([5,5,5]))     // "ASC" (also valid DESC, but we pick ASC)