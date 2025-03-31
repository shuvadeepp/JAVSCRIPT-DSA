// function y(){
//     let a = 10; 
//     function x(){
//         console.log(a);
//     }
//     x();            // lexical scope 
//     // return x;    // closures scope
// }
// y();


function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    inner()
}
// const outerscope = outer();

outer(); 

/* 

    output:
        1
        1
        1

*/


function x(){
    let a= 10;
    function y(){
        console.log(a);
    }
    a = 500; 
    y();
} 
x();