let newArr = [];
const arrOne = [2, 4, 6, 8];
const arrTwo = [1, 3, 5, 7];

for(valOne of arrOne){
    newArr.push(valOne)
}

for(valTwo of arrTwo){
    newArr.push(valTwo)
}

// console.log(newArr);

for(let i=0; i<newArr.length; i++){
    for(let k=0; k<newArr.length -i -1; k++){
        if(newArr[k] > newArr[k +1]){
            let temp = newArr[k];
            newArr[k] = newArr[k +1];
            newArr[k +1] = temp
        }
    }
}
log(newArr)



/* Shorthand code: */
/* const newArr = [...arrOne, ...arrTwo].sort((a, b) => a - b); */