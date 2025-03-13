const arr = [3,5,7,9,2,4,6,8,10,9];
const count = arr.length;
const centerIndex = Math.floor(count / 2);
const centerItem = arr[centerIndex];
console.log('The center item of array: ',centerItem);

/* using loop */ 
/* 
const array = [5, 8, 24, 23, 13, 56, 24, 1, 90];
const count = array.length;
const round = count / 2;
let centerItem = array[0];

for (let i = 0; i < Math.round(round); i++) {
    centerItem = array[i];
}

console.log('The center item of array:', centerItem); 
*/
