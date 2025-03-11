/* 
1. if i use "use strict" then what value is taken ?
*/
function sum(num1, num2){
    "use strict";
    num1 = 3;
    num2 = 4;
    return arguments[0]+arguments[1];
}
console.log(sum(2, 2));

/* 
2.  Destructering 
*/
const number = [1,2,3,4,5];
const [x, ...y] = number;
console.log(x, y);

/* 3. How to swap string element ? */
let str = "React Node Angular Laravel";
let convertToArr = str.split(" ");
let removingThirdElem = convertToArr.splice(0, 1);
let insrt = convertToArr.splice(2, 0, removingThirdElem[0]);
let removeNode = convertToArr.splice(0, 1);
let i = convertToArr.splice(1, 0, removeNode[0]);
let res = convertToArr.join(" ");

console.log(res); // output: Angular Node React Laravel

/* 4. comma operator tricky question */
let x = 10;
let y = (x++, x+1, x*2, ++x);
console.log(y);  // asnwer 24 is wrnog answer is 22

/* 5. console.log true false question */
console.log(0 || 1);  // output: 1  (true)
console.log(1 || 2);  // output: 1  (true)
console.log(0 && 1);  // output: 0  (false)
console.log(1 && 2);  // output: 2  (true)

/* NaN full from : Not a number */
console.log(typeof NaN); // number
console.log(NaN == NaN); // false0

/* 6. This code prints 6 everytime. How to print 1,2,3,4,5,6 ? */
function x(){
    for(var i=1; i<=5; i++){
        setTimeout(()=>{
            console.log(i)
        }, i * 1000);
    }
}
x();