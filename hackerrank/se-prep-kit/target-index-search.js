// Binary Search

function binarySearch(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let mid, curr;
                
    while(high >= low) {
        mid = Math.floor(high + low / 2);
        curr = nums[mid];
        
        if (curr === target) return mid;
        
        if (curr < target) low = mid + 1;
    
        else high = mid - 1;
    }
    
    return -1;
}