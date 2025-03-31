
/*  
What is Memoization ?
    Memoization is an optimization technique where we cache a function’s results. 
    If the same inputs come again, it returns the cached result instead of recalculating. 
    It’s used for expensive, repetitive computations like Fibonacci or heavy data processing to save time, 
    but it increases memory usage. 
*/


cache = {};

function calculation(a, b){
    let result = (a + b) * (a + b) * (b + b);
    console.log("calculating the function...", result)
    return result;
}

// let cal = calculation(100, 200);
// console.log(cal);

function memory(a, b){
    const key = a +" : "+ b
    // console.log("key ::::: ", key);
    if(!(key in cache)){
        const result = calculation(a, b);
        cache[key] = result;
        return result;
    }else{
        console.log("cache data given...", cache[key])
        return cache[key];
    } 
}

// First call - Calculation happens
let cal1 = memory(100, 200);
console.log(cal1);

// Second call with same inputs - Cached result is used
let cal2 = memory(100, 200);
console.log(cal2);

// // Third call with different inputs - New calculation happens
// let cal3 = memory(300, 400);
// console.log(cal3);

// // Fourth call with same inputs as cal3 - Cached result is used
// let cal4 = memory(300, 400);
// console.log(cal4);