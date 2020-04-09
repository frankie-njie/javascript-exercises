const removeFromArray = function(...args) {
    // // the very first item in our list of arguments is the array, we pull it out with args[0]

    // const array = args[0];
    // //create new and empty array

    // const newArray = [];
    // //go through the array using forEach

    // array.forEach((item) => {
    //     // push every element into the new array
    //     // UNLESS it is included in the function arguments
    //     // so we create a new array with every item, except those that should be removed

    //     if (!args.includes(items)) {
    //         newArray.push(item);
    //     }

    // });
    // return newArray;

    var removeFromArray = function(...args) {
        const array = args[0];
        return array.filter(val => !args.includes(val))
    }
}

module.exports = removeFromArray