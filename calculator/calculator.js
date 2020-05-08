function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function sum(array) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        count += array[i];
    }
    return count;
}

function multiply(array) {
    return array.length ? array.reduce((accumulator, nextItem) => accumulator * nextItem) : 0;
}
console.log(multiply(2, 4))

function power(a, b) {
    return Math.pow(a, b);
}

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
}