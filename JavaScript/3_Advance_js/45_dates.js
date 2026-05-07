// Dates:
//   dates are objects that contains values that represents dates and times.
//  these date objects can be changed and formatted

const date = new Date();


// for custom date object:

// Date(year, month, day, hour, minute, second, ms)
const date2 = new Date(2024, 1, 23, 14, 3, 4, 5);


//  T               : time
//  Z               : UTC time (global standard time) (Zulu time)
// military time    : 24-hour format (0-23)
// Local time       : pakistan (UTC + 5)
// ISO string       : standard format used in APIs

// we can write in a format we want: 
const date3 = new Date("2026-05-02T12:00:00z");

// within the date  constructor we can pass a given amount of time in ms since epic.
// epic : epic is the date your computer thinks time began. that is (december 31 1969)
const date4 = new Date(1775200000000);

// current date and time:
const date5 = new Date();


// extracting the individual values from the date objects
const year = date5.getFullYear();
const month = date5.getMonth();
const day = date5.getDate();
const hour = date5.getHours();
const minutes = date5.getMinutes();
const seconds = date5.getSeconds();
const dayOfWeek = date5.getDay();

// console.log(date5);
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);


//  with date object we can set the date with a method.
 const date6 = new Date();
 date6.setFullYear(2027);
 date6.setMonth(7);
 date6.setDate(25);
 date6.setHours(2);
 date6.setMinutes(3);
 date6.setSeconds(4);
 date6.setMilliseconds(5);

// console.log(date6);

// we can compare two dates:
const date_A = new Date("2023-12-31");
const date_B = new Date("2024-01-01");

if (date_B>date_A){
    console.log("Its new year!")
}