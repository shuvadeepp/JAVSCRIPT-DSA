// let a = null;
// let b;

// console.log( typeof a );
// console.log( typeof b );

// var a = 'shuvadeep';
// console.log(this.a);


// function sayHello(){
//     var a = 'shuvadeepp';
//     console.log(a);
// }
// sayHello();
// console.error(a);

// let arr = ['biswa', 'wasik', 'lopita', 'aparajita', 'manoj'];
// let arr2 = ['shuvadeep', 'satya', ...arr];
// console.log(arr2);

// function x(...num){
//     console.log(num)
// }
// x(2,3);

// const mySet = new Set([1, 2, 3, 3, 4, 4, 5]); 
// console.log(mySet);

// function x(){
     
//     for(let i=1; i<=5; i++){
//         setTimeout(function(){
//             let star = '';
//             for(let k=0; k<i; k++){
//                 star +=' * ';
//             } 
//             console.log(star);
//         }, i * 1000); 
//     } 
// }
// x(); 

// function findEvenNumb(numb){
 
//     let digits = numb.toString();
 
//     for(let i = 0; i <= digits.length; i++){
//         setTimeout(function () {
//             let digit = parseInt(digits[i]);
//             if(digit % 2 === 0){
//                 console.log(digit); 
//             } 
//         }, i * 1000); 
//     } 
// }
// let findEven = 23456789;
// findEvenNumb(findEven);


// function greet(callback){
//     console.log("hello ");
//     callback();
// } 
// function me(){
//     console.log("shuvadeep");
// }
// greet(me);

// const myPromise = new Promise((res, rej) => {
//     setTimeout(function() {
//         res('successed!');
//     }, 2000);
// });
// myPromise.then(result => console.log(result));

// async function GET(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const data = await response.json();
//     console.log(data);
// }
// GET();

// let datas = [
//     { name: "samir", designation: "Tech Lead" },
//     { name: "ravindra", designation: "sr. Programmer Analyst" },
//     { name: "satya", designation: "junior software engineer" },
// ]

// function getData(){
//     setTimeout(function(){
//             let htm = ``;
//             htm +=`
//                 <table class="table table-bordered">
//                     <tr>
//                         <th> Sl# </th>
//                         <th> Name </th>
//                         <th> Designation </th>
//                     </tr>`;
//                         datas.forEach((data, index) =>{
//                             htm+=`<tr ${index +1}>`
//                                 htm+=`<td>${index +1}</td>`
//                                 htm+=`<td>${data.name}</td>`
//                                 htm+=`<td>${data.designation}</td>`
//                             htm+=`</tr>`;
//                         });
//             htm+=`</table>`; 
            
//             document.getElementById("tableContainer").innerHTML = htm;

//     }, 1000);
// }

// // getData();

// function insrtData(newData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             datas.push(newData);
//             let error = false;
//             (!error) ? resolve() : reject("Oops something wents wrong!"); 
//         }, 2000);
//     }) 
// }
// // insrtData({ name: "shuvadeep", designation: "software engineer" }).then(getData).catch(err => alert(err));

// async function start(){
//     await insrtData({ name: "shuvadeep", designation: "software engineer" });
//     getData();
// }
// start(); 

// const number = [1,2,3,4,5];
// const [x, , ...y] = number;
// console.log(x, y);


// const btn = document.getElementById("myButton");

// btn.addEventListener('click', function(){
//     console.log('btn clicked');
// })
// console.log('start script');

// setTimeout(function(){
//     console.log('Timeout 1');
// }, 1000);

// setTimeout(function(){
//     console.log('Timeout 2');
// }, 500);

// console.log('end script');


// const ages = [18, 16, 23, 20, 9, 12, 29, 17];
// const doubleAge = ages.filter((age) => age < 18);
// console.log(doubleAge);

// console.log('start script');

// setTimeout(()=>{
//     console.log('setTimeout');
// }, 0);

// Promise.resolve().then(() => {
//     console.log('Promise 1');
// }).then(() =>{
//     console.log('Promise 2');
// })

// console.log('end script');


// function fun1(param){
//     fun2();
// }
// function fun2(){
//     fun3();
// }
// function fun3(){
    
// }
// // debugger;    
// fun1('HELLO');

// function greet(name, callback) {
//     return callback(name);
// }

// function sayHello(name) {
//     return `Hello, ${name}!`;  
// }
// // debugger;
// console.log(greet("Shuvadeep", sayHello)); 

// myPlace = 'bhubaneswar';
// console.log(myPlace);
// var myPlace;

// let myName = 'shuvadeep';
// sayHi();

// function sayHi(){
//     let greet = "hi";
//     console.log(greet, myName);
// }
// sayHello();
// let sayHello = () => {
//     console.log(myName);
// }

// const arr = [1,2,3,4,5];
// const arr = ["Banana", "Orange", "Apple", "Mango"];
// let newArr = arr.concat(4);
// let newArr = arr.splice(1,0,2);
// arr.forEach(function(data){
// arr.map(function(data){
//     console.log(data);
// })

// let text = arr.join();

// console.log(arr);

// name = 'shuvadeep';
// console.log(name);
// var name;

// console.log(0 == "0");
 
// console.log(0 == []);
 
// console.log("0" == [])
 
const  data = { a: 1, b : { c: 2 }, d: 10 }

// // data.b['c'] = 5; 
// data.b['c'] = 4;
// console.log(data)
 
// let x = 10;
// let y = (x++, x+1, x*2);
// console.log(y);  

//  let ar = "hey my name is shuvadep im working in csm tech";
//  let sp = ar.split(" ");
//  let f = sp.filter(sp => sp.length > 3);
//  let m = f.map(sp => sp.toUpperCase());
//  let jr = m.join(" ");
// console.log(jr);  


// function managerOffice(){
//     let secretFile="new project is coming soon";
//     function employeeRoom(){
//         console.log("rumers coming from company", secretFile);
//     }
//     return employeeRoom;
// }
// const manager = managerOffice();
// manager();
// manager();
// manager();


// let x = 10;
// let y = (x++, x+1, x*2, ++x);
// console.log(y);  // asnwer 24 is wrnog answer is 22

// console.log(0 || 1);  // output: 1  (true)
// console.log(1 || 2);  // output: 1  (true)
// console.log(0 && 1);  // output: 0  (false)
// console.log(1 && 2);  // output: 2  (true)

// let str = "biswanath shuvashree shuvadeep rinku";
// let cnvrtArr = str.split(" "); 
// let takenName = cnvrtArr.splice(2, 1);    
// cnvrtArr.splice(1, 0, takenName[0]);  
// let returnStr = cnvrtArr.join(" ");
// console.log(returnStr);


/* How to swap string element ? */
// let str = "React Node Angular Laravel";
// let convertToArr = str.split(" ");
// let removingThirdElem = convertToArr.splice(0, 1);
// let insrt = convertToArr.splice(2, 0, removingThirdElem[0]);
// let removeNode = convertToArr.splice(0, 1);
// let i = convertToArr.splice(1, 0, removeNode[0]);
// let res = convertToArr.join(" ");

// console.log(res); // output: Angular Node React Laravel

// let arr=[9,5,2,7,1,3,8,6,4];
// let arrLen = arr.length; 
// // console.log(arrLen);
// for(let i=0; i<arrLen; i++){
//     for(let k=0; k<i; k++){
//         // console.log("array ::: ", arr[k +1]);
//         if(arr[k] > arr[k +1]){
//             let temp = arr[k];
//             arr[k]=arr[k +1];
//             arr[k +1] = temp;
//         }
//     }
// }
// console.log("sorted ::: ", arr);

// let arr=[9,5,2,7,1,3,8,6,4];
// arr.sort((a, b)=> a - b);
// console.log(arr);

// function countLetter(alpha){
//     let lowCase = alpha.toLowerCase();
//     let alphaStore = {};

//     for(let i= 0; i<lowCase.length; i++){
//         let char = lowCase[i];
//         if(char >= 'a' && char <= 'z'){
//             // console.log(alphaStore[char]);
//             if(alphaStore[char]!= undefined){
//                 alphaStore[char]++;
//                 // console.log(alphaStore)
//             }else{
//                 alphaStore[char]=1;
//             }
//         }
//     }
//     return alphaStore;
// }
// let str = "Hello World";
// let letter = countLetter(str);
// console.log(letter)
 
// var a;
// console.log(a);
// let a = 10;

// console.log("start script");
// let a = 'hey javascript';
// function x(b=a){
//     console.log(a)
// }
// x();
// console.log("end script");

// function example(...arg){
//     console.log(arg)
// }
// example(1,2,3,4,5);

// let a = 10;
// let b = 20;
// [b, a] = [a, b];
// console.log(b);
// console.log(a);

// let dataa = new Map();
// dataa.set('id', 100);
// dataa.set('userName', 'shuvadeep');
// for(let [key, item] of dataa){
//     if(key == 'userName'){
//         console.log(item);
        
//     }
//     // console.log(item.get('userName'));
// }
// console.log(dataa.get('userName'));
// let dataa = new Set();
// dataa.add(100);
// dataa.add('shuvadeep');
// for(let item of dataa){
//     console.log(item);
// }

// function findMethod(){
//     let arr = [{id: 1, name: "PHP"}, {id: 2, name: "javascript"}];
//     let find = arr.find(x=> x.id == 2);
//     // let find = arr.findIndex(x=> x.id == 2);
//     console.log(find);

// }
// findMethod()

// let nameOne = {
//     name: "shuvadeep",
//     degn: " sr. software engineer"
// };
// let nameTwo = {
//     name: "satya",
//     degn: "software engineer"
// }

// const printName = function(params){
//     console.log(this.name, this.degn, params);
// }
// printName.call(nameOne, "csm tech");
// printName.apply(nameTwo, ["TCS"]);

// const person = {
//     name: "shuvadeep",
//     greed: function(){
//         console.log(this.name);
//     }
// }
// const greet = person.greed;
// person.greed();

// console.log(indexedDB);

// let openRequest = indexedDB.open("csmDB", 1);

// console.log(openRequest);

// /* store data with browser IndexedDB */
// openRequest.onsuccess = (e) => {
//     console.log("from success");
//     let db = openRequest.result;
//     // console.log("db ::: ", db);
//     let transaction = db.transaction("t_employee", "readwrite");
//     let storeObject = transaction.objectStore("t_employee");

//     // let request = storeObject.put({
//     //     // id: 101,
//     //     name: "john sins",
//     //     email: "johnsins@gmail.com"
//     // }, 102);
//     // console.log("request ::: ", request);

//     // let request = storeObject.getAll();
//     let request = storeObject.delete(102);

//     request.onsuccess = (e) => {
//         console.log(e.target.result);
//     }
//     request.onerror = (e) => {
//         console.log(e.target.error);
//     }
// }

// openRequest.onupgradeneeded = (e) => {
//     console.log("upgrade needed");
//     let db = openRequest.result;
    
//     if(!db.objectStoreNames.contains('t_employee')){
//         let store  = db.createObjectStore('t_employee', { keyPath: 'id'});
//         // console.log("request ::: ", request);
//         store .createIndex("name", "name", { unique: false });
//         store .createIndex("email", "email", { unique: true });
//     }
// }

// openRequest.onerror = (e) => {
//     console.log("from error ::: ", e.target.error);
// }


// const arr = [5,3,4,1,2];

// for(let i=0; i<arr.length; i++){
//     for(let k=0; k<arr.length; k++){
//         // console.log(arr[k])
//         if(arr[k] > arr[k+1]){
//             let temp=arr[k];
//             arr[k]= arr[k+1];
//             arr[k+1]=temp;
//         }
//     }
// }

// console.log(arr);

// const wordCount =(param)=> {
//     let wordStore = {};
//     let words = param.split(" ");
//     for(let i=0; i<words.length; i++){
//         let word = words[i];
//         if(wordStore[word] != undefined){
//             wordStore[word]++;
//         }else{
//             wordStore[word]=1;
//         }
//         // console.log(wordStore[word])
//     }
//     // console.log(words)
//     return wordStore;
// }

// let str="Hello World, This is PHP Code. PHP";
// let wordPrint = wordCount(str);
// console.log(wordPrint)


// setInterval(function(){
//     console.log("print hello after every 2 seconds");
// }, 2000);

// setTimeout(function(){
//     console.log("print hello after 2 seconds");
// }, 2000);



// let str = "hello world, i'm a programmer";
// let convrtToArr = str.split(" ");
// let store = [];
// for(let i=0; i<convrtToArr.length; i++){
//     let character = convrtToArr[i];
//     if(store[character] != undefined){ 
//         store[character]++;
//     }else{
//         store[character]=1;
//     }
//     // console.log(store[character])
// }
// console.log(store)

// console.log(typeof NaN); // number
// console.log(NaN == NaN); // false
// console.log('0' == 0); 



// let userdata = {
//     "name": "shuvadeep",
//     "age": 28,
//     "address": "bhubaneswar"
// };
// let convrtArr = Object.entries(userdata);
// console.log(convrtArr);

// var a = 10;
// (function() {
//     console.log(a);
//     var a = 20;
// })();


// function is_palindrome(param){
//     let res;
//     param.split("").reverse().join("") === param ? res=param + " Is palindrome" : res=param + " Is not palindrome";
//     console.log(res); 
// }
 
// function is_palindrome(param){
//     let input = param.length; 
//     let rev = "";

//     for(let i=input -1; i>=0; i--){ 
//         rev+=param[i]; 
//     }
    
//     let str;
//     if(rev === param){
//         str= rev + " Is palindrome";
//     }else{
//         str= rev + " Is not palindrome";
//     }
//     console.log(str); 
// }

// is_palindrome("545"); 

// function wordCount(words){
//     let split = words.split(" "); 
//     let store={};
//     for(let i=0; i<split.length; i++){
//         let char = split[i];
//         // console.log(store[words])
//         if(store[char] != undefined){
//             store[char]++;
//         }else{
//             store[char]=1;
//         }
//     }
//     return store;
// }
// let word = wordCount("hello developers i am react developers");
// console.log(word);

// function letterCount(count){
//     let lowCase = count.toLowerCase();
//     // console.log(split)
//     let store={};
//     for(let i=0; i<lowCase.length; i++){
//         // console.log(split[i])
//         let char = lowCase[i];
//         if(char >= 'a' && char <= 'z') { 
//             if(store[char] != undefined){
//                 store[char]++;
//             }else{
//                 store[char]=1;
//             }
//         }
//     } 
//     return store;
// }

// let lett = letterCount("hello react");
// console.log(lett)

// let str = "samir sangita shuvadeep sujit satya rohan";
// let cnvtArr = str.split(" ");
// let removeShuvadeep = cnvtArr.splice(2, 1);
// let inLast = cnvtArr.splice(5,0, removeShuvadeep[0]);
// let cnvrtStr = cnvtArr.join(" ");
// console.log(cnvrtStr)

// let arr = [0, 1, 5, 3, 4, 2];

// for(let i=0; i<=arr.length; i++){
//     // console.log(arr[i]);
//     for(let k=0; k<=arr.length -i -1; k++){
//         // console.log(arr[k]);
//         if(arr[k] > arr[k +1]){
//             let temp = arr[k];
//             arr[k]=arr[k+1];
//             arr[k+1]=temp
//         }
//     }
// }
// console.log(arr)


// function star(pattern){
//     let star='';
//     for(let i=0; i<=pattern; i++){
//         for(let k=0; k<i; k++){
//             // console.log(pattern[k])
//             star+=" * ";
//         }
//         star+="\n";
//     } 
//     console.log(star);
// }
// star(5)

// console.log(typeof typeof 1);

// function outer(){
//     let x = 1;
//     function test() {
//         console.log(x);
//         // let x = 2;
//     }
//     return test;
// }

// let Close = outer();
// Close();

// let originalArray = [1, 2, [3, 4]];
// let shallowCopy = [...originalArray];
// shallowCopy[2][0]=200;
// console.log(originalArray);


// function letter_count(alpha){
//     let lowCase = alpha.toLowerCase();
//     let store = {};
//     for(let i=0; i<lowCase.length; i++){
//         let char = lowCase[i];
//         if(char > 'a' && char < 'z'){
//             // console.log(store[char]);
//             if(store[char] != undefined){
//                 store[char]++;
//             }else{
//                 store[char]=1;
//             } 
//         }
//     }
//     return store;
// }

// function words_count(word){
//     let lowCase = word.split(" ");
//     let store = {};
//     for(let i=0; i<=lowCase.length -1; i++){
//         let char = lowCase[i];
//         // console.log(store[char]);
//         if(store[char] != undefined){
//             store[char]++;
//         }else{
//             store[char]=1;
//         }
//     }
//     return store;
// }

// let str = "hello learn JS and wokring with JS";
// const wordss = words_count(str);
// console.log(wordss);


// const unSortedArr = [0, 3, 1, 5, 2, 4];

// for(let i=0; i<unSortedArr.length; i++){ 
//     for(let k=0; k<unSortedArr.length -i -1; k++){ 
//         let temp=[]; 
//         if(unSortedArr[k] > unSortedArr[k +1]){
//             temp=unSortedArr[k];
//             unSortedArr[k]=unSortedArr[k +1];
//             unSortedArr[k +1]= temp;
//         }
//     }
// } 
// console.log(unSortedArr);



// let originalArray = [1, 2, [3, 4]];
// // let shallowCopy = [...originalArray];
// // console.log(shallowCopy) 
// let deepCopy = JSON.parse(JSON.stringify(originalArray));  
// // shallowCopy[2][0]=300; 
// deepCopy[2][0]=300; 
// console.log(deepCopy); 

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const someGreaterThan10 = numbers.every(
// number => number > 1
// );
// console.log(someGreaterThan10); // false

// function x(){
//     for(var i=1; i<=5; i++){
//         setTimeout(()=>{
//             console.log(i)
//         }, i * 1000);
//     }
// }
// x();


// function twoSum(nums, target){
//     // console.log(target);
//     let map = {};
//     for(let i=0; i<nums.length; i++){
//         let comp = target - nums[i];
//         // console.log(map[comp]);
//         if(map[comp] != undefined){
//             // console.log([map[comp]=i]); 
//             return [map[comp], i];
//         }
//         // console.log(map[nums[i]]=i)
//         map[nums[i]]=i;
//     }
//     return [];
// }

// console.log(twoSum([2,7,11,15], 9));    // Output: [0,1]
// // console.log(twoSum([3,2,4], 6));        // Output: [1,2]
// // console.log(twoSum([3,3], 6));          // Output: [0,1]



// function removeDuplicates(arr){
//     let unique = [];
//     for(let i=0; i<arr.length; i++){ 
//         if(unique.indexOf(arr[i]) == -1){  
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }
 
// let removedArr = removeDuplicates([1, 2, 1, 3, 4, 2, 2, 1, 5, 6]);
// console.log(removedArr);

// function findEvenNumbers(arr){
//     let result =[];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] % 2 == 0){
//           result.push(arr[i]);
//         }
//     }
//     return result;
// }


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8,-8,19, 9, 10];
// console.log("Even numbers:", findEvenNumbers(numbers));


/* function findLongestWord(long){
    let findLongWordArr = long.split(" ");
    let longestArr = "";
    // console.log(findLongWordArr)
    for(let i=0; i<findLongWordArr.length; i++){
        // console.log(findLongWordArr[i].length);
        
        if(findLongWordArr[i].length > longestArr.length){
            longestArr = findLongWordArr[i];
        }
    }
    return longestArr;
} 
let logenstWord = findLongestWord("Hi Iam Saikrishna Iam a UI Developer");
console.log(logenstWord); */

/* function isValid(s){
    let stack = [];
    let bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for(let char of s){
        if(char in bracketMap){
            let topElement = stack.length ? stack.pop() : "#";
            if(topElement !== bracketMap[char]){
                return false;
            }
        }else{
            stack.push(char);
        }
    }
    return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]")); */

// function twoSum(nums, target){
//     let map = {};
//     for(let i=0; i<nums.length; i++){ 
//         let compireson = target - nums[i]; 
//         if(map[compireson] != undefined){ 
//             return [map[compireson], i];
//         }
//         map[nums[i]]=i 
//     }
//     return [];
// }

 
// console.log(twoSum([2,7,11,15], 9));    // Output: [0,1]
// console.log(twoSum([3,2,4], 6));        // Output: [1,2]
// console.log(twoSum([3,3], 6));          // Output: [0,1]
// function removeDuplicates(arr){
//     let unique = [];
//     for(let i=0; i<arr.length; i++){
//         // console.log(arr[i])
//         if(unique.indexOf(arr[i])== -1){
//             unique.push(arr[i]);
//         }
//     }
//     // console.log(unique)
//     return unique;
// }

// let removedArr = removeDuplicates([1, 2, 1, 3, 4, 2, 2, 1, 5, 6]);
// console.log(removedArr);

// function checkVowel(str){
//     let count=0;
//     for(let i=0; i<str.length; i++){
//         let chkVawelArr = ['a', 'e', 'i', 'o', 'u'];
//         if(chkVawelArr.includes(str[i])){
//             count++;
//         }
//     }
//     return count;
// }

// let string = "Hello world, This is a program";
// let chkVowel = checkVowel(string);
// console.log(chkVowel);

// function removeDuplicates(arr){
//     let unique = [];
//     for(let i=0; i<arr.length; i++){
//         // console.log(unique.indexOf(arr[i]))
//         if(unique.indexOf(arr[i])==-1){
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }

// let removedArr = removeDuplicates([1, 2, 1, 3, 4, 2, 2, 1, 5, 6]);
// console.log(removedArr);


// function wordCount(str){
//     let cnvrtArr = str.split(" ");
//     let store = {};
//     for(let i=0; i<cnvrtArr.length; i++){
//         // console.log(str[i])
//         let word = cnvrtArr[i];
//         // console.log(store[char]);
//         if(store[word] != undefined){
//             store[word]++;
//         }else{
//             store[word]=1;
//         }
//     }
//     return store;
// }

// let str="Hello World, This is PHP Code. PHP";
// let wordPrint = wordCount(str);
// console.log(wordPrint);

 
// console.log(strFrmDate)

// function compareDate(userDate) {
//     let givenDate = new Date(userDate).getTime();  
    
//     let toDate = new Date("2025-03-01").getTime();
//     let frmDate = new Date("2025-03-31").getTime();
   

//     let check = false;

//     if (givenDate >= toDate && givenDate <= frmDate) { 
//         check = true;
//     } else {
//         check = false;
//     }
//     return check;
// }

// let givenDates = "2025-04-31"; 
// let printDate = compareDate(givenDates);
// console.log(printDate);

// const arr = [5,8,24,23,13,56,2,24,1,90];
// let firstElem = arr[0];
// for(let i=0; i<=arr.length; i++){
//     if(arr[i] < firstElem){
//         firstElem = arr[i];
//     }
// }
// console.log(firstElem)

// function showMessage(marks){
//     // const message = marks ?? "Absent";
//     const message = marks || "Absent";
//     console.log(`Mark ${message}`);
// }
// showMessage(29);
// showMessage(0);
// showMessage(50);

//  function letterCount(str){
//     let lowCase = str.toLowerCase(); 
//     let store = {};
//     for(let i=0; i<=lowCase.length; i++){
//         let char = lowCase[i]; 
//         if(char >= 'a' && char <= 'z'){ 
//             if(store[char] != undefined){
//                 store[char]++;
//             }else{
//                 store[char]=1;
//             }
//         }
//     } 
//     return store;
//  }

// let letter_count = letterCount("Hello Worlds");
// console.log(letter_count);

// function wordCount(word){
//     let arr = word.toLowerCase().split(" ");
//     let count = arr.reduce((acc, word) => {
//         acc[word] = (acc[word] || 0) +1;
//         return acc;
//     }, {});
//     return count;
// }

// let word = wordCount("Hello World");
// console.log(word)

// const numbers = [10, 20, 30, 40, 50];
// const sum = numbers.reduce((acc, numb) => acc + numb, 0);
// console.log(sum);

