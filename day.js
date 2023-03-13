// whatDay() function indicates day from numbers 0-6
const whatDay = dayNumber => {
    switch(dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day number";
    }
}

// Test whatDay() function
console.log(whatDay(4));