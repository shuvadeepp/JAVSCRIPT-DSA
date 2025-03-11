// function x(){
//     let a = 10;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// x()();

// function x(a){
//     // let a = 10;
//     function y(b){
//         function z(c){
//             // console.log(a)
//             return a * b * c;
//         }
//         return z;
//     }
//     return y;
// }
 
// console.log(x(2)(2)(2));


function outer(){
    let count = 0;
    return function inner(){
        count++;
        console.log(count);
    }
}
const outerscope = outer();

outerscope();
outerscope();
outerscope();

/* 
    output:
    1
    2
    3 
*/