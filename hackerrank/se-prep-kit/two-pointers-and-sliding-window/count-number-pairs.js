// Two Pointers - Easy

function countAffordablePairs(prices, budget) {
    // Write your code here
    let uniquePairs = 0;
    
    for (let i = 0; i < prices.length; i++) {
        for (let j = 0; j < prices.length; j++) {
            if (i < j) {    
                const val_i = prices[i];
                const val_j = prices[j];
                
                if ((val_i + val_j) <= budget) uniquePairs++;
            }
        }
    }
    
    return uniquePairs;
}