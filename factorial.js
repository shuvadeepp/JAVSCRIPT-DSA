const log = console.log;
 
function FindFatorial(numb){
  
  let ans = 1;
  for(let i = 1; i <= numb; i++){
    ans = ans * i;
  }
  return ans;
    
} 

function findFatorialWithArr(arr){
   let output = [];
   for(let i=0; i< arr.length; i++){
     var num = arr[i];
     output.push(FindFatorial(num));
   }
    return output
}

const arr = [1, 3, 4];
log(findFatorialWithArr(arr));