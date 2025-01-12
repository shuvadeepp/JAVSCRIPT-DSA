/* ::::: Using For Loop ::::: */
// let output = '';
// for(let i=0; i<=9; i++){
//     output+=i;
//     if(i % 3 == 0){
//         output+="\n";
//     }
// }
// console.log(output);

/* ::::: Using While Loop ::::: */
// let i=1;
// let output = '';
// while(i<=9){
//     output+=i;
//     if(i % 3 == 0){
//         output+="\n";
//     }
//     i++;
// }
// console.log(output);

/* ::::: Using Do While Loop ::::: */
let i=1;
let output = '';
do{
    output+=i;
    if(i % 3 == 0){
        output+="\n";
    }
    i++;
} while(i<=9);
console.log(output);