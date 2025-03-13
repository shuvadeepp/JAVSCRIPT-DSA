function compareDate(userDate) {
    let givenDate = new Date(userDate).getTime();  
    
    let toDate = new Date("2025-03-01").getTime();
    let frmDate = new Date("2025-03-31").getTime();
   

    let check = false;

    if (givenDate >= toDate && givenDate <= frmDate) { 
        check = true;
    } else {
        check = false;
    }
    return check;
}

let givenDates = "2025-04-31"; 
let printDate = compareDate(givenDates);
console.log(printDate);