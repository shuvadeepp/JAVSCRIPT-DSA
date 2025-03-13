/* :::::::::::::::::::::: Example 1: Sum of Numbers ::::::::::::::::::::::  */
const numbers = [10, 20, 30, 40];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 100


/* :::::::::::::::::::::: Example 2: Find Maximum Value ::::::::::::::::::::::  */
const numbers = [5, 12, 8, 130, 44];
const max = numbers.reduce((acc, num) => (num > acc ? num : acc), numbers[0]);
console.log(max); // Output: 130


/* :::::::::::::::::::::: Example 3: Count Occurrences of Elements ::::::::::::::::::::::  */
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(count);
// Output: { apple: 3, banana: 2, orange: 1 }


/* :::::::::::::::::::::: Example 4: Flatten an Array ::::::::::::::::::::::  */
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.reduce((acc, arr) => acc.concat(arr), []);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]


/* :::::::::::::::::::::: Example 5: Sum of Object Property Values ::::::::::::::::::::::  */
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];

const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice); // Output: 1800