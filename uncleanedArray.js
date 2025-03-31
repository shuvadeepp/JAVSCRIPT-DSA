

function cleanArray(arr){
    let result = [];
    for(let value of arr){
        if(value){
            result.push(value);
        }
    }
    return result;
}

let uncleanedArr = [1, 2, false, 4, "", 5, undefined, NaN]; 
console.log(cleanArray(uncleanedArr)) // output : [ 1, 2, 4, 5 ]