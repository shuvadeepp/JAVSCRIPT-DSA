function removeDuplicates(arr){
    let unique = [];
    for(let i=0; i<arr.length; i++){ 
        if(unique.indexOf(arr[i]) == -1){  
            unique.push(arr[i]);
            // console.log(uniqueArr)
        }
    }
    return unique;
}
 
let removedArr = removeDuplicates([1, 2, 1, 3, 4, 2, 2, 1, 5, 6]);
console.log(removedArr);