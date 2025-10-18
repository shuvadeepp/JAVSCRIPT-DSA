const log = console.log;

/* 1. Problem 1 */
/*const arr = [5, 2, 6, 1, 7, 8, 9, 3, 4 ,0, 10, -1];
 for(let i=0; i<arr.length; i++){
    for(let k=0; k<arr.length; k++){
        if(arr[k] > arr[k +1]){
            let temp = arr[k];
            arr[k] = arr[k +1];
            arr[k +1] = temp;
        }
    }
} */

/* let len = arr.length;
let center = Math.floor(len / 2);
let index = arr[center];
log(index); */

/* 2. Problem 2 */
/* const arr = [100, 50, 40, 55, 43, 10, 5, 4, 11, 77, 62];
let first = arr[0];
let second = arr[0];
for(let i=0; i<arr.length; i++){
    if(arr[i] < first){
        // log(arr[i])
        second = first;
        first = arr[i];
    } else if(second < arr[i] && arr[i] > first) {
        second = arr[i];
    }
}
log(second); */

/* 3. Problem 3 */
/* function fabonacci(n){
    let series = [0, 1];
    for(let i=2; i<n; i++){
        series[i] = series[i -1] + series[i -2];
    }
    return series;
}
let fn = fabonacci(10);
log(fn); */

/* 4. Problem 4 */
/* const vowal = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
function chkVowal(data){
    for(let i=0; i<data.length; i++){
        if(vowal.includes(data[i])){
            count++;
        }
    }
    return count;
}
let fn = chkVowal("Hello guys, dream to react developer");
log(fn); */


/* 5. Problem 5 */
/* function isPalimdrome(n){
    let rev = [];
    for(let i = n.length -1; i>=0; i--){
        rev += n[i];
    } 
    let str = "";
    if(rev === n){
        str = "true";
    }else{
        str = "false";
    }
    return str;
}
let fn = isPalimdrome("252");
log(fn) */
 
/* 6. Problem 6 */
/* const arr = [5, 2, 6, 1, 7, 8, 9, 3, 4 ,0, 10, -1];
function findEven(even){
    let result = [];
    for(let i=0; i<even.length; i++){
        if(even[i] % 2 === 0){
            result.push(even[i]);
        }
    }
    return result;
}
let fn = findEven(arr);
log(fn) */

/* 7. Problem 7 */
/* let str = "React Node Angular Laravel";
let cnvrt = str.split(" ");
let remove = cnvrt.splice(2, 1);
let store = cnvrt.splice(3, 0, remove[0]);
let cnvrtStr = cnvrt.join(" ");
log(cnvrtStr) */

// let newArr = [];
// const arrOne = [2, 4, 6, 8];
// const arrTwo = [1, 3, 5, 7];

// for(valOne of arrOne){
//     newArr.push(valOne)
// }

// for(valTwo of arrTwo){
//     newArr.push(valTwo)
// }

// console.log(newArr);

// for(let i=0; i<newArr.length; i++){
//     for(let k=0; k<newArr.length -i -1; k++){
//         if(newArr[k] > newArr[k +1]){
//             let temp = newArr[k];
//             newArr[k] = newArr[k +1];
//             newArr[k +1] = temp
//         }
//     }
// }
// log(newArr)

// const newArr = [...arrOne, ...arrTwo].sort((a, b) => a - b);

// console.log(newArr);

// let output='';
// for(let i=1; i<=9; i++){
//     output+=i;
//     if(i % 3 == 0){
//         output+="\n";
//     }
// }
// log(output)

// const objOne = { name: "developer" };
// let b = { ...objOne };
// b.name="software Engineer";
// log(b)

// let map = new Map();

// map.set('1', 'str1');   // a string key
// map.set(1, 'num1');     // a numeric key
// map.set(true, 'bool1'); // a boolean key
 
// log( map.get('1') ); // 'str1'
// log( map.has(true)); // 'num1'

// log( map.size ); // 3

// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion',    50]
// ]);
// // log(recipeMap.values())
// for(val of recipeMap.keys()){
//     log(val)
// }

/* const people = [
    { name: 'shuvadeep', age: 25 },
    { name: 'Bapi', age: 30 },
    { name: 'john', age: 25 },
    { name: 'kishore kumar', age: 32 },
];*/ 

/* const grouping = Object.groupBy(people, p => p.age);
log(grouping)  */


/* let count = 0;
const intervalId = setInterval(() => {
    log(count++)
    if(count > 5){
        clearInterval(intervalId)
    }
}, 1000); */


const people = [
    { name: 'shuvadeep', age: 25 },
    { name: 'Bapi', age: 30 },
    { name: 'john', age: 25 },
    { name: 'kishore kumar', age: 32 },
];

/* let ageStore ={};
for(const person of people){
    // log(person.age)
    let age = person.age;
    // log(ageStore[age])
    if(ageStore[age] == undefined){
        ageStore[age] = [];
    }
    ageStore[age].push(person)
}

 log(ageStore) */

//  let grp = Object.groupBy(people, p => p.age);
//  log(grp)



/* const fetchData = () =>{
    return new Promise((resolve, reject)=>{
        const success = true;
        setTimeout(()=>{
            if(success){
                resolve("Data fetching Successfully")
            }else{
                reject("failed to fetch data")
            }
        }, 2000)
    })
}
fetchData().then((msg)=> console.log("Message ::: ", msg)).catch((err)=>console.log("Error ::: ", err)); */
 


// let obj;
// obj = {a: {b: undefined}};
// console.log(obj.a?.b?.c?.d ?? "x");

/* function xyz(){
    if(true){
        var b = 25;
        const a = 20; 
    }
    console.log("B::: ", b);
    console.log("A::: ", a);
}
xyz(); */

// let count=1;
// function demo(num){
//     if(count > num){
//         return;
//     }

//     log("learing recursive :::", count);
//     count++;
//     demo(num);
// }
// demo(5);

/* function flatArr(arr, result=[]){
    for(let i=0; i<arr.length; i++){
        // log(arr[i])
        if(Array.isArray(arr[i])){
            flatArr(arr[i], result)
        }else{
            result.push(arr[i])
        }
    }
    return result;
}

var input = [1, 2, [3, 4, [5, 6], 7, 8], 9, 10];
let fn = flatArr(input);
log(fn) */


// let arr = [1,[2,3,[4,5],6,7],8];
// let arr = [1, [2, [3, 4], [5,6]], 7];
// function flatterArr(arr, result=[]){
//     for(val of arr){
//         //  log(val)
//         if(Array.isArray(val)){
//             flatterArr(val, result)
//         }else{
//             result.push(val)
//         }
//     }
//     return result
// }
// let fn = flatterArr(arr);
// log(fn)

// function findPairs(input1, input2){
//     paris = [];
//     seen = new Set();
//     for(num of input1){
//         let complement = input2 - num; 
//         if(seen.has(complement)){
//             paris.push([complement, num]);
//         }
//         seen.add(num)
//     }
//     return paris;
// }

// const input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const input2 = 10;
// const output = findPairs(input1, input2);
// console.log(output);
// output: [ [ 4, 6 ], [ 3, 7 ], [ 2, 8 ], [ 1, 9 ] ]

/* async function foo(){
    log("1")
    await log("2")
    log("3")
}
log("4")
foo();
log("5") */

/* let count=0;
(function (){ 
    if(count == 0){
        let count=1;
        log(count);
    }
    log(count);
})(); */


/* var variable = 10;
variable = variable++;
log(variable);  */


/* function countLetter(letterStr){
    let lowCase = letterStr.toLowerCase();
    let store = {}; 
    for(let i=0; i<lowCase.length; i++){ 
        let char = lowCase[i];
        if(char > 'a' && char <='z'){ 
            if(store[char] != undefined){
                store[char]++;
            }else{
                store[char]=1;
            }
        }
    }
    return store;
}
let fn = countLetter("shuvadeep");
log(fn) */

// let arr = [1,2,3,4,5];
// let obj = arr.reduce((acc, curval, i)=>{
//     acc[i] = curval;
//     return acc;
// }, {});
// let conrtArr = Object.values(obj);
// log(conrtArr)

// let a = 10;
// let b = 20;
// [b, a] = [a, b];
// log(b)

// let arr = [1,4,2,5,3];
// for(let i=0; i<arr.length; i++){
//     for(let k=0; k<arr.length -i -1; k++){
//         if(arr[k] > arr[k +1]){
//             let temp = arr[k];
//             arr[k] = arr[k +1];
//             arr[k +1] = temp;
//         }
//     }
// }
// log(arr);

// let obj = {a: 1,b: 2,c: { d: 4, e: { f: 6 }, g: 7, h: 8 }, i: 9, j: 10}
 
// function flattObject (obj, parentKey='', result={}){
//  // log(obj)
//    for(let key in obj){  
//      let newKey = parentKey ? `${parentKey}.${key}` : key; 
//     //  log("obj ::::: ", obj[key])
//      if(typeof obj[key] === 'object' && obj[key] !== null){
//         flattObject(obj[key], newKey, result);
//      }else{
//         result[newKey] = obj[key];
//         // log(result[newKey])
//      }
//     //  log(parentKey ? `${parentKey}.${key}` : key);
//    }
//    return result;
// }

// let fn = flattObject(obj);
// log(fn)

// var input = [1, 2, [3, 4, [5, 6], 7, 8], 9, 10];
// function flattArr(input, result=[]){
//     for(let i=0; i<input.length; i++){
//         // log(input[i]);
//         if(Array.isArray(input[i])){
//             flattArr(input[i], result);
//         } else {
//             result.push(input[i]);
//         }
//     }
//     return result;
// }
// let fn = flattArr(input);
// log(fn)

/* function febonnaci(n){
    let feb = [1, 2];
    for(let i=2; i<n; i++){
        feb[i] = feb[i -1] + feb[i -2];
    }
    return feb;
}
let fn = febonnaci(10);
log(fn) */

/* function is_palindrome(param){
    // log(param)
    let reverse="";
    for(let i=param.length -1; i>=0; i--){
        // log(param[i])
        reverse+=param[i];
    } 
    if(reverse === param){
        return true;
    }else{
        return false;
    }
}

let fn = is_palindrome("152");
log(fn) */

/* let arr=[9,5,2,7,1,3,8,6,4];

for(let i=0; i<=arr.length; i++){
    for(let k=0; k<=arr.length; k++){
        if(arr[k] >= arr[k +1]){
            // log(arr[k])
            let temp = arr[k];
            arr[k] = arr[k+1];
            arr[k+1] = temp;
        }
    }
}
log(arr); */

/* function febonaci(n){
    let feb = [0, 1];
    for(let i=2; i<n; i++){

        log(feb[i-1])

        // feb[i] = feb[i -1] + feb[i -2];
    } 
    // return feb;
}
let fn = febonaci(10);
log(fn)
 */

/* function maxSubarraySum(arr, k) {
    if (arr.length < k) return null;
  
    let windowSum = 0;
    // First window sum
    for (let i = 0; i < k; i++) {
      windowSum += arr[i];
    }
  
    let maxSum = windowSum;
  
    // Slide the window
    for (let i = k; i < arr.length; i++) {
      windowSum = windowSum - arr[i - k] + arr[i];
      maxSum = Math.max(maxSum, windowSum);
    }
  
    return maxSum;
  }
  

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSubarraySum(arr, k)); */



// function chunkArray(arr, size) {
//     let result = [];
//     for (let i = 0; i < arr.length; i += size) {
//         // log(arr.slice(i, i + size))
//       result.push(arr.slice(i, i + size));
//     }
//     return result;
// }
// console.log(chunkArray([1, 2, 3, 4, 5, 6], 2));  

/* function countVowels(str) {
    // Your implementation
    let count = 0;
    if (str != "") {
        for (let i = 0; i <= str.length; i++) {
            let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'i', 'O', 'U'];
            if (vowels.includes(str[i])) {
                count++;
            }
        }
    }else{
        count = 0;
    }
    
    return count;
}
countVowels("") */




/* function isAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if(str1.length !== str2.length) return false;
     
     const count = {};
     
     for(let char of str1){
   
        if(count[char] != undefined){
            count[char]++;
        }else{
          count[char]= 1;
        }
     }
   
    for(let char of str2){ 
      if(!count[char]) return false;
        count[char]--;
    }
    
    return true;
  }
  
  let fn = isAnagram("dormitory", "dirty room");
  
  
  console.log(fn); */






/* function maxSumSubarray(arr, k){
    if(arr.length < k) {
        throw new Error("Array length must be at least k");
    }
    let windowSum=0;
    for(let i=0; i<k; i++){
        windowSum+=arr[i];  
    }
    let maxSum = windowSum;
 
    for(let i=k; i<arr.length; i++){ 
        
        windowSum += arr[i] - arr[i - k]
        maxSum = Math.max(maxSum, windowSum); 
    }   
    return maxSum;
}

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSumSubarray(arr, k)); // Output: 9 (5 + 1 + 3)
 */

/* function mergeSortedArrays(arr1, arr2){
    let marge = [];
    for(let i=0; i<arr1.length; i++){
        marge.push(arr1[i]);
    } 
    for(let i=0; i<arr2.length; i++){
        marge.push(arr2[i]);
    }  
    // [ 1, 3, 5, 2, 4, 6 ]
    for(let k=0; k<=marge.length -1; k++){
        for(let j=0; j<=marge.length -k -1; j++){
            if(marge[j] < marge[j -1]){
                let temp = marge[j];
                marge[j] = marge[j-1];
                marge[j-1] = temp;
            }
        }
    }
    return marge;
}

const a = [1, 3, 5];
const b = [2, 4, 6];
let fn = mergeSortedArrays(a, b); */

/* 
    Rotate Array by K Steps
    Input: [1, 2, 3, 4, 5], K=2 → Output: [4, 5, 1, 2, 3]
*/

/* function rotateArr(arr, k){
    let n = k % arr.length; 
    let rotate = [];
    
    for(let i=arr.length -n; i<arr.length; i++){
        rotate.push(arr[i])
    }

    for(let i=0; i<arr.length -n; i++){ 
        rotate.push(arr[i])
    }
    
    return rotate;
}
let arr = [1, 2, 3, 4, 5];
let k = 2;
let fn = rotateArr(arr, k); 
log(fn) */


/* let a = [1,2,3];
let b = a;
a = [4,5,6];
log(b);  */


// const x = [];
// x[4] = 1;
// // console.log(x);
// x.forEach((i, val)=>{
//     console.log("hi ::: ", i);
// });


/* function flatterArray(arr, result=[]){
    
    for(let i=0; i<arr.length; i++){ 
        if(Array.isArray(arr[i])){
            flatterArray(arr[i], result);
        }else{
            result.push(arr[i]);
        }
    }
    return result;
}

var input = [1, 2, [3, 4, [5, 6], 7, 8], 9, 10];
let fn = flatterArray(input);
log(fn) */

// function chunkArr(arr, size){
//     // log(size)
//     let result =[];
//     for(let i=0; i<arr.length; i+=size){
// // log(arr.slice(i, i+size))
// result.push(arr.slice(i, i+size));
//     }
//     return result;
// }

// let fn = chunkArr([1, 2, 3, 4, 5, 6, 7, 8], 2);
// log(fn)

// const people1 = [
//     { name: 'shuvadeep', age: 25 },
//     { name: 'Bapi', age: 30 },
//     { name: 'john', age: 25 },
//     { name: 'kishore kumar', age: 32 },
// ];
// const grouping = Object.groupBy(people1, p => p.age);
// log(grouping)


// function DoSomething(x, y){ 
//     arguments[1] = 15; 
//     return x + y;
// }
// log(DoSomething(5, 5));


function checkParam() {
  throw new Error("Name is required!");
}

function check(name=checkParam()){
  log(name);
}
 
try {
    check()
} catch(err){
    log("Err:", err.message);
}