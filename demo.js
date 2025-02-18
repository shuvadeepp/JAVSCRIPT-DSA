// let a = null;
// let b;

// console.log( typeof a );
// console.log( typeof b );

// var a = 'shuvadeep';
// console.log(this.a);


// function sayHello(){
//     var a = 'shuvadeepp';
//     console.log(a);
// }
// sayHello();
// console.error(a);

// let arr = ['biswa', 'wasik', 'lopita', 'aparajita', 'manoj'];
// let arr2 = ['shuvadeep', 'satya', ...arr];
// console.log(arr2);

// function x(...num){
//     console.log(num)
// }
// x(2,3);

// const mySet = new Set([1, 2, 3, 3, 4, 4, 5]); 
// console.log(mySet);

// function x(){
     
//     for(let i=1; i<=5; i++){
//         setTimeout(function(){
//             let star = '';
//             for(let k=0; k<i; k++){
//                 star +=' * ';
//             } 
//             console.log(star);
//         }, i * 1000); 
//     } 
// }
// x(); 

// function findEvenNumb(numb){
 
//     let digits = numb.toString();
 
//     for(let i = 0; i <= digits.length; i++){
//         setTimeout(function () {
//             let digit = parseInt(digits[i]);
//             if(digit % 2 === 0){
//                 console.log(digit); 
//             } 
//         }, i * 1000); 
//     } 
// }
// let findEven = 23456789;
// findEvenNumb(findEven);


// function greet(callback){
//     console.log("hello ");
//     callback();
// } 
// function me(){
//     console.log("shuvadeep");
// }
// greet(me);

// const myPromise = new Promise((res, rej) => {
//     setTimeout(function() {
//         res('successed!');
//     }, 2000);
// });
// myPromise.then(result => console.log(result));

// async function GET(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const data = await response.json();
//     console.log(data);
// }
// GET();

let datas = [
    { name: "samir", designation: "Tech Lead" },
    { name: "ravindra", designation: "sr. Programmer Analyst" },
    { name: "satya", designation: "junior software engineer" },
]

function getData(){
    setTimeout(function(){
            let htm = ``;
            htm +=`
                <table class="table table-bordered">
                    <tr>
                        <th> Sl# </th>
                        <th> Name </th>
                        <th> Designation </th>
                    </tr>`;
                        datas.forEach((data, index) =>{
                            htm+=`<tr ${index +1}>`
                                htm+=`<td>${index +1}</td>`
                                htm+=`<td>${data.name}</td>`
                                htm+=`<td>${data.designation}</td>`
                            htm+=`</tr>`;
                        });
            htm+=`</table>`; 
            
            document.getElementById("tableContainer").innerHTML = htm;

    }, 1000);
}

// getData();

function insrtData(newData){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            datas.push(newData);
            let error = false;
            (!error) ? resolve() : reject("Oops something wents wrong!"); 
        }, 2000);
    }) 
}
// insrtData({ name: "shuvadeep", designation: "software engineer" }).then(getData).catch(err => alert(err));

async function start(){
    await insrtData({ name: "shuvadeep", designation: "software engineer" });
    getData();
}
start();