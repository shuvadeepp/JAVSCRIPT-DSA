function flattenArray(arr, result = []) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattenArray(arr[i], result);  
        } else {
            result.push(arr[i]);  
        }
    }
    return result;
}

var input = [1, 2, [3, 4, [5, 6], 7, 8], 9, 10];
// var output = flattenArray(input);
var output = flattenArray(input);
console.log(output);
