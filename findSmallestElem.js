const arr = [5,8,24,23,13,56,2,24,1,90];
let firstElem = arr[0];
for(let i=0; i<=arr.length; i++){
    if(arr[i] < firstElem){
        firstElem = arr[i];
    }
}
console.log(firstElem)