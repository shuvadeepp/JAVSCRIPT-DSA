
function reverseWords(sentence) {
    // Your implementation
    // console.log(sentence.split(" "));
    let arr = sentence.split(" ");
    let store=[];
    if(sentence.length > 0){
      
      for(let i=0; i<=arr.length -1; i++){
        // console.log(arr[i]);
        let word = arr[i];
        let rev = "";
        for(let k=word.length -1; k>=0; k--){
          rev+=word[k];
        }
        store.push(rev);
      }
      return store.join(" "); 
    }else{
      return null
    }
} 

let fn = reverseWords("Hello World");
console.log(fn)
