const ftoc = function(number) {
    //Fahrenheit to Celsius
    return Math.round((number - 32) * (5 / 9) * 10) / 10
}

const ctof = function(number) {
    //Celsius to Fahrenheit
    return Math.round(((number * 9 / 5) + 32) * 10) / 10
}

module.exports = {
    ftoc,
    ctof
}