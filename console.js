/* What will be the output? */

/* 1. The == operator performs type coercion. '0' (string) is converted to 0 (number), so 0 == 0 evaluates to true. */
console.log(0 == '0'); // true

/* 2. null == undefined → true (because == treats them as equal) 
null === undefined → false (because === checks both value and type, 
and null is not the same type as undefined) */
console.log(null == undefined);
console.log(null === undefined);

/* 3. [] == [] → false (Each array is a new reference, so they are not the same object in memory.)
      [] == false → true (Empty array is force to an empty string "", which is then force to 0, and 0 == false is true.)
      [] === false → false (Strict equality check fails due to different types.) */
console.log([] == []);
console.log([] == false);
console.log([] === false);

/* 4. "5" - 1 → 4 (String "5" is converted to a number before subtraction.)
      "5" + 1 → "51" (String concatenation occurs because of the + operator.) */
console.log("5" - 1);
console.log("5" + 1);

/* 5.  true + true → 2 (true is treated as 1, so 1 + 1 = 2.)
       true - false → 1 (1 - 0 = 1.)
       false + false → 0 (0 + 0 = 0.) */
console.log(true + true);
console.log(true - false);
console.log(false + false);

/* 6. typeof NaN → "number" (NaN is considered a special type of number.)
       NaN == NaN → false (NaN is not equal to anything, including itself.) */ 
console.log(typeof NaN)
console.log(NaN == NaN)

/* 7.   typeof null → "object" (This is a historical JavaScript bug, but it remains for backward compatibility.)
        null instanceof Object → false (null is not an instance of Object.) */
console.log(typeof null);
console.log(null instanceof Object);


/* 8.   console.log(x); → undefined (Variable x is declared but not assigned a value.)
        console.log(y); → ReferenceError (y is not defined in the code.)
*/
let x;
console.log(x);
console.log(y);

/* 9. 1 < 2 < 3 → true (1 < 2 is true → true < 3 becomes 1 < 3, which is true.)
       3 > 2 > 1 → false (3 > 2 is true → true > 1 becomes 1 > 1, which is false.) */
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
 
/* 10. "10" - -"10" → 20
       -"10" converts "10" into -10, so "10" - (-10) becomes 10 + 10 = 20. */
console.log("10" - -"10");

/* 11.  [] + [] → "" (Empty arrays are converted to empty strings.)
        [] + {} → "[object Object]" ({} is converted to [object Object] and concatenated with "".)
        {} + [] → 0 (Interpreted as an empty block {} followed by +[], which is +"" → 0.)
        {} + {} → "[object Object][object Object]" (Both objects are converted to strings and concatenated.) 
*/
console.log([] + []);
console.log([] + {});
console.log({} + []);
console.log({} + {});

/* 12. Immediately Invoked Function Expression (IIFE):
    undefined (Due to hoisting, var a inside the function is hoisted but remains undefined before assignment.)
*/
var a = 10;
(function() {
    console.log(a);
    var a = 20;
})();

/* 13. ![] → false (because an empty array is truthy, so ![] becomes false).
       [] == false → true (because [] is force to an empty string "", which is then force to 0, and 0 == false is true). 
*/
console.log([] == ![]);

/* 14. output ? */
console.log([1,2,3] + [1,3,4]); // 1,2,31,3,4