function timeConversion(s: string): string {
    // Write your code here
    const time = s.split(':');
    
    const isAM = time[2][2] === 'A';
    const isTwelve = time[0] === '12';
    
    if (isAM) {
        if (isTwelve) {
            return `00:${time[1]}:${time[2][0]}${time[2][1]}`;
        }
        
        return `${time[0]}:${time[1]}:${time[2][0]}${time[2][1]}`;
        
    } else {
        if (isTwelve) {
            return `${time[0]}:${time[1]}:${time[2][0]}${time[2][1]}`;
        }
        
        return `${parseInt(time[0]) + 12}:${time[1]}:${time[2][0]}${time[2][1]}`;
    }
}
