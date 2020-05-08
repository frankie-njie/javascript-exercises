const palindromes = function(string) {
    finalString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
    return (finalString.split("").reverse().join("") === finalString);
}

module.exports = palindromes