
const reverseElem = (arr) =>{
    let newArr = [];
    for(let i=arr.length -1; i>=0; i--){
        newArr.push(arr[i]);
    } 
    return newArr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let elems = reverseElem(arr);
console.log(elems);