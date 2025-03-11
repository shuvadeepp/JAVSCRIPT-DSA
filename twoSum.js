function twoSum(nums, target){
    // console.log(nums)
    let map = {};
    for(let i=0; i<nums.length; i++){ 
        let complement = target - nums[i];
        // console.log(map[complement]);
        if(map[complement] != undefined){ 
            return [map[complement], i];
        }  
        map[nums[i]]=i;
    }
    return [];
}
console.log(twoSum([2,7,11,15], 9));    // Output: [0,1]
console.log(twoSum([3,2,4], 6));        // Output: [1,2]
console.log(twoSum([3,3], 6));          // Output: [0,1]
