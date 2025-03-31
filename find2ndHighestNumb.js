const arr = [100, 50, 40, 55, 43, 10, 5, 4, 11, 77, 62];
let firstElem = arr[0];
let secondElem = arr[0];
 
for(let i=0; i<arr.length; i++){
    if(arr[i] < firstElem){
        secondElem = firstElem;
        firstElem = arr[i];
    }else if(secondElem < arr[i] && arr[i] > firstElem){
        secondElem = arr[i];
    }
}
console.log(secondElem)