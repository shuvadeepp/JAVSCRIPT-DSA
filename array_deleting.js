let log = console.log;

const arrDeleting = (elems, isPosition) => { 

    for(let i =0; i<=elems.length -1; i++){

        if(i >= isPosition){
            // log(elems[i]);
            elems[i] = elems[i+1];
        } 
    }
    elems.length = elems.length -1;
    return elems;

}

let arr = [10, 22, 34, 45, 50, 62, 72, 88, 98];
let position = 3;
let isDeleteElem = arrDeleting(arr, position);
log(isDeleteElem);