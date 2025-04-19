function findPairs(input1, input2){
    paris = [];
    seen = new Set();
    for(num of input1){
        let complement = input2 - num; 
        if(seen.has(complement)){
            paris.push([complement, num]);
        }
        seen.add(num)
    }
    return paris;
}

const input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const input2 = 10;
const output = findPairs(input1, input2);
console.log(output);
// output: [ [ 4, 6 ], [ 3, 7 ], [ 2, 8 ], [ 1, 9 ] ]