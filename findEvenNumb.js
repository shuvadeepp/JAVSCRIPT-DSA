function findEvenNumb(numb){
 
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
findEvenNumb(findEven);