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
// let arr = [1, [2, [3, 4], [7,5]], 6];
// function flatterArr(arr, result=[]){
//     for(val of arr){
//         // log(val)
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