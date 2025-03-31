function fetchData(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("data fatching...");
        }, 2000)
    })
}

async function getData(){
    log("starting...");
    const data = await fetchData();
    console.log(data);
    log("ending...");
}
getData();