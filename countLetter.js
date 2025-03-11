function countLetter(alpha){
    let lowCase = alpha.toLowerCase();
    let alphaStore = {};

    for(let i= 0; i<lowCase.length; i++){
        let char = lowCase[i];
        if(char >= 'a' && char <= 'z'){
            // console.log(alphaStore[char]);
            if(alphaStore[char]!= undefined){
                alphaStore[char]++;
                // console.log(alphaStore)
            }else{
                alphaStore[char]=1;
            }
        }
    }
    return alphaStore;
}
let str = "Hello World";
let letter = countLetter(str);
console.log(letter)