// Function 1. Checks if there is a number in the last key of the string  

function check(number, length, filler) {
    number = number + "";
    if (number.length < length) {
        for (let i = number.length; i < length; i += 1) {
            number = filler + number;
        }
    }

    return number;
}


// Function 2. Your main function.
function incrementString (str) {
    let original = str.match(/\d+$/);
    if (original != null && original.length == 1) {
        original = check(parseInt(original[0]) + 1, original[0].length, '0');
        str = str.replace(/\d+$/, original);
        return str;
    }

    return str + "1";
}