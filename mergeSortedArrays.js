/* 
    Merge Two Sorted Arrays Without Using .sort()

    Input: [1, 3, 5] & [2, 4, 6] → Output: [1, 2, 3, 4, 5, 6]
*/

function mergeSortedArrays(arr1, arr2){
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
let fn = mergeSortedArrays(a, b);