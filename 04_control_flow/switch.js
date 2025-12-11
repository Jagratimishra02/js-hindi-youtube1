// 


const month = 3
switch (month) {             // switch choose one correct option from the above
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");   // once  the case matched all the code below will execute except default ,bcoz of break student the other statement is n't printed
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("default case match");
        
        break; 
}

switch ("april") {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("febuary");
        break;
    case "mar":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("above case do not match");
        
        break;
}