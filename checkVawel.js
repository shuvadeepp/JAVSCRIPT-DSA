

const checkVowel = (str) => {
     
    let count = 0;
    for(let i=0; i<=str.length; i++){ 

        let chkVowelArr = ['a', 'e', 'i', 'o', 'u'];
        if(chkVowelArr.includes(str[i])){ 
            count++;
        }
        
    } 
    return count;
}
let string = "Hello world, This is a program";
let chkVowel = checkVowel(string);
console.log(chkVowel);