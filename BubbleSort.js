let arr=[9,5,2,7,1,3,8,6,4];
let len = arr.length; 
for(let i=0; i<len; i++){ 
    for(let k=0; k<len; k++){ 
        if(arr[k] > arr[k +1]){
            let temp=arr[k];
            arr[k]=arr[k+1];
            arr[k +1]=temp;
        }
    }
}
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]