let obj = {a: 1,b: 2,c: { d: 4, e: { f: 6 }, g: 7, h: 8 }, i: 9, j: 10};
 
function flattObject (obj, parentKey='', result={}){
    for(let key in obj){ 
        let newKey = parentKey ? `${parentKey}.${key}` : key; 
        if(typeof obj[key] === 'object' && obj[key] !== null){
            flattObject(obj[key], newKey, result);
        }else{
            result[newKey] = obj[key];
        }
    }
   return result;
}

let fn = flattObject(obj);
log(fn);