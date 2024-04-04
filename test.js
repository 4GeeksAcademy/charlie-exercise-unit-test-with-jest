// Import the function sum from the app.js file
const { sum, oneEuroIs } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * oneEuroIs.USD; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yen = fromEuroToYen(3.5);

    const expected = 3.5 * oneEuroIs.JPY; 
    
    // This is the comparison for the unit test
     expect(yen).toBe(expected); 
})

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pounds = fromEuroToPound(3.5);

    const expected = 3.5 * oneEuroIs.GBP; 
    
    // This is the comparison for the unit test
     expect(pounds).toBe(expected); 
})