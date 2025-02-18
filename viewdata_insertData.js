let datas = [
    { name: "samir", designation: "Tech Lead" },
    { name: "ravindra", designation: "sr. Programmer Analyst" },
    { name: "satya", designation: "junior software engineer" },
]

function getData(){
    setTimeout(function(){
            let htm = ``;
            htm +=`
                <table class="table table-bordered">
                    <tr>
                        <th> Sl# </th>
                        <th> Name </th>
                        <th> Designation </th>
                    </tr>`;
                        datas.forEach((data, index) =>{
                            htm+=`<tr ${index +1}>`
                                htm+=`<td>${index +1}</td>`
                                htm+=`<td>${data.name}</td>`
                                htm+=`<td>${data.designation}</td>`
                            htm+=`</tr>`;
                        });
            htm+=`</table>`; 
            
            document.getElementById("tableContainer").innerHTML = htm;

    }, 2000);
}

getData();

function insrtData(newData){
    setTimeout(() =>{
        datas.push(newData);
    }, 1000);
}
insrtData({ name: "shuvadeep", designation: "software engineer" });