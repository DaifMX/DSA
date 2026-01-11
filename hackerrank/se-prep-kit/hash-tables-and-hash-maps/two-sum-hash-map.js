// Two Sum - Easy

function findTaskPairForSlot(taskDurations, slotLength) {
    const map = {};
        
    for (let i = 0; i < taskDurations.length; i++) {
        const val = taskDurations[i];
        const residual = slotLength - parseInt(val);

        if (map[residual] !== undefined) return [map[residual], i];
        
        map[val] = i;
    }
        
    return [-1, -1];
}