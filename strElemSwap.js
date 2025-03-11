 

//output: biswanath shuvadeep shuvashree rinku

let str = "biswanath shuvashree shuvadeep rinku";
let cnvrtArr = str.split(" ");
let remove = cnvrtArr.splice(2, 1);
let positionChange = cnvrtArr.splice(1,0, remove[0]);
let result = cnvrtArr.join(" ");
console.log(result);