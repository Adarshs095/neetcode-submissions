class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let i = 0
        let j = 1
        while(j < prices.length) {
            if (prices[j] > prices[i]) {
                maxProfit = Math.max(maxProfit, prices[j] - prices[i])
            } else {
                i = j
            }
            j++
        }
        return maxProfit
    }
}
