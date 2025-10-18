const log = console.log;


function searchMissingNumb(arr){
 
  let n = arr.length;
  let sum = 0;
  for(let i=0; i<n; i++){
    sum = sum + arr[i];
  }
  
  let total = (n * (n+1)) / 2;    // Math Formula to find the sum of first n missing numbers
  let missing = total - sum;
  
  let str = "The missing numb is  : " + missing;
  
  /*let res = [];
  for(let j=0; j<=n; j++){
    res.push(j);
  }
  return res;*/
  
  let shallowCopyArr = arr.slice();
  shallowCopyArr.push(missing);
  shallowCopyArr.sort((a, b) => a - b);
  log(arr)
  return shallowCopyArr;
   
}


const arr = [3, 0, 2];
log(searchMissingNumb(arr));