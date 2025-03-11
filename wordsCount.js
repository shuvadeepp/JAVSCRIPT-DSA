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