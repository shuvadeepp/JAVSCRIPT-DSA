let log = console.log;

const arrInserting = (elems) => {
    let newElem = 3;
    let position = 2;    
    for(let i=elems.length -1; i>=0; i--){
        // log(elems[i]);
        if(i >= position){
            // log(i);
            elems[i+1] = elems[i];
            if(i === position){  
                elems[i] = newElem;
                // log(elems[i]);
            }
        }
    } 
    return elems;
}

let arr = [1, 2, 4, 5, 6, 7, 8, 9];

let updatedArr = arrInserting(arr);
log(updatedArr);

// using splice method:-
// arr.splice(2, 0, 3);
// log(arr);
// end of the code