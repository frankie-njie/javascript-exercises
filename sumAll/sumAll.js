const sumAll = function(min, max) {
    if (min < 0 || max < 0) return "ERROR";
    if (typeof min !== "number" || typeof max !== "number") return "ERROR";
    if (min > max) {
        let min = temp;
        min = max;
        max = temp;
    }
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
}

module.exports = sumAll