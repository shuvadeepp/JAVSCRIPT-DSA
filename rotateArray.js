/* 
    Rotate Array by K Steps
    Input: [1, 2, 3, 4, 5], K=2 → Output: [4, 5, 1, 2, 3]
*/

function rotateArr(arr, k){
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
log(fn)