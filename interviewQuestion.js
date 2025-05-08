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
/* 7. correct this answer */
function showMessage(marks){
    // const message = marks ?? "Absent";
    const message = marks || "Absent";
    console.log(`Mark ${message}`);
}
showMessage(29);
showMessage(0);
showMessage(50);

/* 8. sum this using reduce function */
const numbers = [10, 20, 30, 40];
const sum = numbers.reduce((acc, numb) => acc + numb, 0);
console.log(sum);

/* 9.  This code prints 6 everytime. How to print 1,2,3,4,5,6 ? using closur method. */
function x(){
    function closur(x){
        setTimeout(()=>{
            console.log(x)
        }, i * 1000)
    }
    for (var i = 1; i <= 5; i++) {
        closur(i)
    }
}
x();

/* 10. What will be the output or below code ? */
function x(){
    let a= 10;
    function y(){
        console.log(a);
    }
    a = 500;
    return y;
}
var z = x(); 
z(); // output: 500

/* 11. What’s the output of below logic  */
function getData(){
    console.log("running no error because of hoisted");
}

var getData1 =() =>{
    console.log("err because of arrow function is not hoisted");
}
// error because of getData1 is arrow func cannot access top of call.

/* 12. What’s the output of below code  */
let arr= [1,2,3,4,5,6,7];
arr.forEach((n) => {
    if(n % 2 == 0){
        break;
    }
    console.log(n);
});
// error because of break cannot work in forEach() and map().

/* 13. Whats the output of below code  */
setTimeout(() => console.log(1), 0);
console.log(2);
new Promise(res => {
 console.log(3)
 res();
}).then(() => console.log(4));
console.log(5);
// output: 2, 3, 5, 4, 1

/* 14. Output of below logic ? */
async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
    await new Promise(resolve => setTimeout(resolve, 0));
    console.log("C");
}
console.log("D");
foo();
console.log("E")
// output: D,A,E,B,C

/* 15. Output of below logic ?  */
function job(){
    return new Promise((res, rej)=>{
        rej();
    })
}

let promise = job();

promise.then(()=>{
    console.log("111111111")
}).then(()=>{
    console.log("222222222")
}).catch(()=>{
    console.log("333333333")
}).then(()=>{
    console.log("444444444")
})

/* 16. Test your basics on comparision ? */
let a = 3;
let b = new Number(3);
let c = 3;
console.log(a === b)

/* 17. explain example of promises: */
function fetchData(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("data fatching...");
        }, 2000)
    })
}

async function getData(){
    log("starting...");
    const data = await fetchData();
    console.log(data);
    log("ending...");
}
getData();


/* 18. what is the answer */
let a = {
    name: "shuvadeep",
}
let b = {
    ...a
}

b.name="raja";
log(a.name)

/* 19.  */
const chain = (a) => (b) => (c) => (d) => a + b + c + d;
log(chain(4)(6)(8)(10))

/* 20. write a code to output shows will this flatten array [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ] */
var input = [1, 2, [3, 4, [5, 6], 7, 8], 9, 10];
var output = input.flat(Infinity);
log(output) // Output:  [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

/* 21. question is write a code to when i access show Ref Err value contain this block scope  */

function show(){
    {
        var x = 10;
        var y = 20;
    }
    log(x, y);
}
show()
// Answer:
/* function show(){
    {
        (function() {
            var x = 10;
            var y = 20;
        })();
    }
    log(x, y);
}
show(); */

/* What is the output? */
let x = [1,2,3];
let y = "1,2,3";
log(x == y)

/* How to group by age by using object */
const people = [
    { name: 'shuvadeep', age: 25 },
    { name: 'Bapi', age: 30 },
    { name: 'john', age: 25 },
    { name: 'kishore kumar', age: 32 },
];

const grouping = Object.groupBy(people, p => p.age);
log(grouping)

/* what is the output? */
async function foo(){
    log("1")
    await log("2")
    log("3")
}
log("4")
foo();
log("5")
// output: 4  1  2  5  3
/* log("2") runs immediately (it’s just a normal function, not a promise), so it prints 2.

But because of the await, JavaScript treats the rest of the function (log("3")) as asynchronous — meaning it's deferred and placed in the microtask queue. */

/* what is the output? */
var variable = 10;
variable = variable++;
log(variable); 

/* what is the output? */ 
let count=0;
(function (){ 
    if(count == 0){
        let count=1;
        log(count);
    }
    log(count);
})();