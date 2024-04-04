// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
let oneYenIs = {"GBP" : 0.0052};
let oneDollarIs = {"JPY" : 151.49};

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // return the dollar value
    return valueInDollar;
}
const fromEuroToYen = function(valueInEuro) {
    // Convert the given valueInEuro to yen
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    // return the yen value
    return valueInYen;
}
const fromEuroToPound = function(valueInEuro) {
    // Convert the given valueInEuro to pounds
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    // return the pound value
    return valueInPound;
}

/////////////////////////////

const fromYenToPound = function(valueInYen) {
    // Convert the given valueInEuro to pounds
    let valueInPound = valueInYen * oneYenIs.GBP;
    // return the pound value
    return valueInPound;
}
const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInEuro to pounds
    let valueInYen = valueInDollar * oneDollarIs.JPY;
    // return the pound value
    return valueInYen;
}


// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromEuroToYen, fromEuroToPound, fromYenToPound, fromDollarToYen, oneDollarIs, oneEuroIs, oneYenIs };