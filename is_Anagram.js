function isAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if(str1.length !== str2.length) return false;
     
     const count = {};
     
     for(let char of str1){
   
        if(count[char] != undefined){
            count[char]++;
        }else{
          count[char]= 1;
        }
     }
   
    for(let char of str2){ 
      if(!count[char]) return false;
        count[char]--;
    }
    
    return true;
}
  
let fn = isAnagram("dormitory", "dirty room");
  
  
  console.log(fn);