
const singleStarPattern = (numb) => {
    let pattern='';
    for(let i=0; i< numb; i++){
        for(let k=0; k<=i; k++){
            pattern+='*';
        }
        pattern+='\n';
    }
    pattern+='\n';
 
}


let singleStar = singleStarPattern(5);
console.log(singleStar)

/* ======================================================================== */

function singleStarPattern(){
     
    for(let i=1; i<=5; i++){
        setTimeout(function(){
            let star = '';
            for(let k=0; k<i; k++){
                star +=' * ';
            } 
            console.log(star);
        }, i * 1000); 
    } 
}
singleStarPattern(); 