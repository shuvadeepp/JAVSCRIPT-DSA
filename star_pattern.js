let k=4;
log = console.log;
output = '';
for(let i=0; i<=k; i++){
    // log(i);
    for(let j=0; j<=(2*k) -1; j++){
        // log(j);
        if(j>=k-(i-1) && j<=k+(i-1)){
            output+="*";
        }else{
            output+=" ";
        }
    }
    output+="\n";
}
log(output);