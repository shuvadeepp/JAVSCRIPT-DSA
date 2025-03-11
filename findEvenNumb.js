
function findEvenNumbers(arr){
    let result =[];
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
          result.push(arr[i]);
        }
    }
    return result;
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8,-8,19, 9, 10];
console.log("Even numbers:", findEvenNumbers(numbers));


/* function findEvenNumb(numb){
 
    let digits = numb.toString();
 
    for(let i = 0; i <= digits.length; i++){
        setTimeout(function () {
            let digit = parseInt(digits[i]);
            if(digit % 2 === 0){
                console.log(digit); 
            } 
        }, i * 1000); 
    } 
}
let findEven = 23456789;
findEvenNumb(findEven); */