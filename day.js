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

// Create day object
let day = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
}

// whatIsToday() function indicates day from day object
const whatIsToday = dayNum => {
    switch(dayNum) {
        case dayNum:
            return day[dayNum];
        default:
            return "Invalid Number.";
    }
}

// Test whatIsToday() function
console.log(whatIsToday(4));

// Create day array
let dayInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// whatToday() function indicates day from day array
const whatToday = dayNum => {
    switch(dayNum) {
        case dayNum:
            return dayInWeek[dayNum];
        default:
            return "Invalid Number.";
    }
}

// Test whatToday() function
console.log(whatToday(4));