const wordCount =(param)=> {
    let wordStore = {};
    let words = param.split(" ");
    for(let i=0; i<words.length; i++){
        let word = words[i];
        if(wordStore[word] != undefined){
            wordStore[word]++;
        }else{
            wordStore[word]=1;
        }
        // console.log(wordStore[word])
    }
    // console.log(words)
    return wordStore;
}

let str="Hello World, This is PHP Code. PHP";
let wordPrint = wordCount(str);
console.log(wordPrint)

/* using pre define function array reduce */
function wordCount(word){
    let arr = word.toLowerCase().split(" ");
    let count = arr.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) +1;
        return acc;
    }, {});
    return count;
}

let word = wordCount("Hello World");
console.log(word)