function febonacci(n){
    let febonacciSeries = [0, 1];
    for(let i=2; i<n; i++){
        febonacciSeries[i] = febonacciSeries[i -1] + febonacciSeries[i -2]
    }
    return febonacciSeries;
}

let febo = febonacci(10);
log("Febonacci series: ", febo.join(", "));

// output : Febonacci series:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34