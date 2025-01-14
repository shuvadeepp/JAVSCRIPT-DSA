let log = console.log;

const searchElements = (elems, searchElem) => {
    let index = '';  
    for(let i=0; i<= elems.length -1; i++){ 
        if(elems[i] == searchElem){ 
            index=i;
        }
    }
    // log( index);
    return index;
}
let arr = [10, 22, 34, 45, 50, 62, 72, 88, 98];
let find = 72;

let search = searchElements(arr, find); // 72
log(search); // elem: 72, position: 6