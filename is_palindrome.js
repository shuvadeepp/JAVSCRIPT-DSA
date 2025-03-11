// function is_palindrome(param){
//     param.split("").reverse().join("") === param ? console.log(param + " Is palindrome") : console.log(param + " Is not palindrome");
//     // console.log(param);
    
// }
 
function is_palindrome(param){
    let input = param.length; 
    let rev = "";

    for(let i=input -1; i>=0; i--){ 
        rev+=param[i]; 
    }
    
    let str;
    if(rev === param){
        str= rev + " Is palindrome";
    }else{
        str= rev + " Is not palindrome";
    }
    console.log(str); 
}

is_palindrome("54w2"); 