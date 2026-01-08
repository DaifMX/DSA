// Array Manipulation

function mergeHighDefinitionIntervals(intervals) {
    if (!intervals.length) return [];
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    const res = [intervals[0]];
    
    if (intervals.length === 1) return res;
    
    for (let i = 1; i < intervals.length; i++) {        
        const lastInterval = res[res.length - 1];
        const start_LastInterval = lastInterval[0];
        const end_LastInterval = lastInterval[1];
        
        const currInterval = intervals[i];
        const start_CurrInterval = currInterval[0];
        const end_CurrInterval = currInterval[1];
        
        if (start_CurrInterval <= end_LastInterval) {
            res[res.length - 1] = [start_LastInterval, Math.max(end_CurrInterval, end_LastInterval)];
        } else {
            res.push(intervals[i]);
        }
    }
    
    return res;
}