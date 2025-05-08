function findMaxNumber(arr) { 
  
    let firstElem = arr[0];
    if(arr.length > 0){
      for (let i = 0; i <= arr.length; i++) {
        if (arr[i] >= firstElem) {
            firstElem = arr[i];
        }
      }
    }else{
      return null
    }
    
    return firstElem;
}

// let fn = findMaxNumber([]);
// let fn = findMaxNumber([1,2,3,4,5]);
// let fn = findMaxNumber([-20, -10, -3, -1]); 
// let fn = findMaxNumber([100, 100, 100]); 