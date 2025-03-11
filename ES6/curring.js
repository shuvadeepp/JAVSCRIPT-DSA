
// This is called function currying, a powerful concept in JavaScript.

function higherOrderFunc(a){
    return function(b){
        console.log(a+b)
    }
}
higherOrderFunc(3)(5);