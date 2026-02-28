/**
 * Question: Best time to buy and sell stock 
 * Example:
 * Input: [7, 1, 5, 3, 6, 4]
 * Output: 5 (Buy on day 2 and sell on day 5)
 */

function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else {
            let profit = price - minPrice;
            maxProfit = Math.max(maxProfit, profit);
        }
    }
    return maxProfit;
}

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log(profit); // Output: 5