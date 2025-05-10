/* Sliding Window: Find Max Sum of Subarray of Size K ? */

function maxSumSubarray(arr, k){
    if(arr.length < k) {
        throw new Error("Array length must be at least k");
    }
    let windowSum=0;
    for(let i=0; i<k; i++){
        windowSum+=arr[i];  
    }
    let maxSum = windowSum;
 
    for(let i=k; i<arr.length; i++){ 
        
        windowSum += arr[i] - arr[i - k]
        maxSum = Math.max(maxSum, windowSum); 
    }   
    return maxSum;
}

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSumSubarray(arr, k)); // Output: 9 (5 + 1 + 3)
