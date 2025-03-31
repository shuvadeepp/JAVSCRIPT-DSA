function leapYear(y){
    if(y % 4 === 0 && y % 100 !== 0 || y % 400 === 0){
        return "Leap Year";
    }else{
        return "not Leap Year"
    }
}
log(leapYear(2024))


function leapYear(years){ 
    let res = [];
    for(year of years){ 
        if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
            res.push(year + " Leap Year");
        }else{
            res.push(year + " Not Leap Year");
        }
    }   
    return res;
}
const years = [2021, 2022, 2023, 2024, 2025, 2026];
log(leapYear(years).join("\n"))