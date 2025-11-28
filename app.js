// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
// console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
// module.exports = { sum };

// Now the real practice
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (usd) => usd / oneEuroIs.USD * oneEuroIs.JPY
const fromEuroToDollar = (eur) => eur * oneEuroIs.USD
const fromYenToPound = (yen) => yen / oneEuroIs.JPY * oneEuroIs.GBP

module.exports = {fromDollarToYen,fromEuroToDollar,fromYenToPound};